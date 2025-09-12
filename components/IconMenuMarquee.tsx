import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  { name: "Dataform", color: "bg-indigo-100", symbol: "📁" },
  { name: "Process", color: "bg-yellow-100", symbol: "⚙️" },
  { name: "Analysis", color: "bg-gray-100", symbol: "📊" },
  { name: "Integration", color: "bg-amber-100", symbol: "🔗" },
  { name: "Time Tracking", color: "bg-sky-100", symbol: "⏱️" },
  { name: "Chart", color: "bg-indigo-100", symbol: "📈" },
  { name: "Schedule", color: "bg-amber-100", symbol: "📅" },
  { name: "Report", color: "bg-amber-100", symbol: "📝" },
  { name: "Kanban", color: "bg-pink-100", symbol: "📋" },
  { name: "People", color: "bg-violet-100", symbol: "👥" },
  { name: "Dashboards", color: "bg-amber-100", symbol: "📊" },
  { name: "Channel", color: "bg-yellow-100", symbol: "📢" },
];

const MarqueeRow = ({ reverse = false, speed = 30 }) => (
  <motion.div
    className="flex gap-8 whitespace-nowrap"
    animate={{
      x: reverse
        ? ["0%", "-50%"] // scroll left
        : ["-50%", "0%"], // scroll right
    }}
    transition={{
      repeat: Infinity,
      duration: speed,
      ease: "linear",
    }}
  >
    {[...ITEMS, ...ITEMS].map((it, idx) => (
      <motion.button
        key={idx}
        className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md hover:shadow-lg border border-gray-200 focus:outline-none"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className={`flex items-center justify-center h-8 w-8 rounded-lg text-xl ${it.color} text-gray-800`}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.2,
          }}
        >
          {it.symbol}
        </motion.span>
        <span className="text-sm font-medium text-gray-700">{it.name}</span>
      </motion.button>
    ))}
  </motion.div>
);

export default function FeatureMarquee() {
  return (
    <div className="w-full overflow-hidden space-y-6 py-10">
      <MarqueeRow reverse={false} speed={30} />
      <MarqueeRow reverse={true} speed={30} />
      <MarqueeRow reverse={false} speed={30} />
    </div>
  );
}
