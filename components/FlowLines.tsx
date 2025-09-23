import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface PathData {
  d: string;
  key: string;
  fromEl: HTMLElement;
  toEl: HTMLElement;
}

/**
 * Props:
 *  - containerId: id of the element that contains all cards (the SVG overlays this container)
 *  - itemSelector: selector for the cards inside the container (default '.flow-card')
 *  - connections: optional array of [fromSelector, toSelector] pairs (selectors are queried inside container).
 *                 If omitted, component connects cards in DOM order.
 *  - strokeWidth: line thickness (default 3)
 */
export default function FlowLines({
  containerId = "flow-container",
  itemSelector = ".flow-card",
  connections = null,
  strokeWidth = 3,
}: {
  containerId?: string;
  itemSelector?: string;
  connections?: [string, string][] | null;
  strokeWidth?: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<PathData[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const compute = () => {
      const nodes = Array.from(container.querySelectorAll(itemSelector));
      const containerRect = container.getBoundingClientRect();
      setSize({
        w: Math.max(1, Math.round(containerRect.width)),
        h: Math.max(1, Math.round(containerRect.height)),
      });

      if (nodes.length < 2 && (!connections || connections.length < 1)) {
        setPaths([]);
        return;
      }

      const computePathBetween = (fromEl: HTMLElement, toEl: HTMLElement) => {
        const f = fromEl.getBoundingClientRect();
        const t = toEl.getBoundingClientRect();

        // Coordinates relative to container
        const startX = f.left - containerRect.left + f.width / 2;
        const endX = t.left - containerRect.left + t.width / 2;

        // Start point: center of the source element
        const startY = f.top - containerRect.top + f.height / 2;

        // End point: center of the target element
        const endY = t.top - containerRect.top + t.height / 2;

        const dx = endX - startX;
        const dy = endY - startY;

        // Calculate control points for curved lines
        const cp1x = startX + dx * 0.25;
        const cp2x = startX + dx * 0.75;
        const cp1y = startY + (endY - startY) * 0.2;
        const cp2y = startY + (endY - startY) * 0.8;

        const d = `M ${startX} ${startY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${endX} ${endY}`;
        const key = `${fromEl.id || fromEl.dataset.key || startX}-${
          toEl.id || toEl.dataset.key || endX
        }`;
        return { d, key, fromEl, toEl };
      };

      const conns = [];
      if (Array.isArray(connections) && connections.length) {
        // connections are selector pairs inside the container
        connections.forEach(([fromSel, toSel]) => {
          const fromEl = container.querySelector(fromSel) as HTMLElement;
          const toEl = container.querySelector(toSel) as HTMLElement;
          if (fromEl && toEl) conns.push(computePathBetween(fromEl, toEl));
        });
      } else {
        // default: connect sequential DOM order (0->1, 1->2, ...)
        for (let i = 0; i < nodes.length - 1; i++) {
          conns.push(
            computePathBetween(
              nodes[i] as HTMLElement,
              nodes[i + 1] as HTMLElement
            )
          );
        }
      }

      setPaths(conns);
    };

    // initial compute
    compute();

    // ResizeObserver to update when container or cards resize/reflow
    const ro = new ResizeObserver(() => requestAnimationFrame(compute));
    ro.observe(container);
    Array.from(container.querySelectorAll(itemSelector)).forEach((n) =>
      ro.observe(n)
    );

    // MutationObserver so new/removed cards are handled
    const mo = new MutationObserver(() => {
      ro.disconnect();
      ro.observe(container);
      Array.from(container.querySelectorAll(itemSelector)).forEach((n) =>
        ro.observe(n)
      );
      requestAnimationFrame(compute);
    });
    mo.observe(container, { childList: true, subtree: true });

    window.addEventListener("resize", compute);
    return () => {
      ro && ro.disconnect();
      mo && mo.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [containerId, itemSelector, connections]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="blueGreenGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        {/* arrow marker — orient="auto" rotates to path tangent */}
        <marker
          id="arrowhead"
          markerWidth="14"
          markerHeight="12"
          refX="12"
          refY="6"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L12,6 L0,12 z" fill="url(#blueGreenGradient)" />
        </marker>
      </defs>

      {paths.map((p, i) => (
        <motion.path
          key={p.key}
          d={p.d}
          stroke="url(#blueGreenGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}
