import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Folder,
  Settings,
  BarChart,
  Link,
  Timer,
  TrendingUp,
  Calendar,
  FileText,
  Clipboard,
  Users,
  Megaphone,
} from "lucide-react";

const ITEMS = [
  {
    name: "Dataform",
    color: "bg-gradient-to-br from-red-200 to-red-100",
    icon: Folder,
  },
  {
    name: "Process",
    color: "bg-gradient-to-br from-orange-200 to-orange-100",
    icon: Settings,
  },
  {
    name: "Analysis",
    color: "bg-gradient-to-br from-yellow-200 to-yellow-100",
    icon: BarChart,
  },
  {
    name: "Integration",
    color: "bg-gradient-to-br from-green-200 to-green-100",
    icon: Link,
  },
  {
    name: "Time Tracking",
    color: "bg-gradient-to-br from-teal-200 to-teal-100",
    icon: Timer,
  },
  {
    name: "Chart",
    color: "bg-gradient-to-br from-cyan-200 to-cyan-100",
    icon: TrendingUp,
  },
  {
    name: "Schedule",
    color: "bg-gradient-to-br from-sky-200 to-sky-100",
    icon: Calendar,
  },
  {
    name: "Report",
    color: "bg-gradient-to-br from-blue-200 to-blue-100",
    icon: FileText,
  },
  {
    name: "Kanban",
    color: "bg-gradient-to-br from-indigo-200 to-indigo-100",
    icon: Clipboard,
  },
  {
    name: "People",
    color: "bg-gradient-to-br from-purple-200 to-purple-100",
    icon: Users,
  },
  {
    name: "Dashboards",
    color: "bg-gradient-to-br from-pink-200 to-pink-100",
    icon: BarChart,
  },
  {
    name: "Channel",
    color: "bg-gradient-to-br from-rose-200 to-rose-100",
    icon: Megaphone,
  },
];

const ITEMS1 = ITEMS;
const ITEMS2 = [...ITEMS.slice(4), ...ITEMS.slice(0, 4)];
const ITEMS3 = [...ITEMS.slice(8), ...ITEMS.slice(0, 8)];

const MarqueeRow = ({ items = ITEMS, reverse = false, speed = 30 }) => {
  const controls = useAnimation();

  const animation = {
    x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      repeat: Infinity,
      duration: speed,
    },
  };

  useEffect(() => {
    controls.start(animation);
  }, [controls, reverse, speed]);

  return (
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={controls}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start(animation)}
    >
      {[...items, ...items].map((it, idx) => (
        <motion.button
          key={idx}
          className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md hover:shadow-lg border border-gray-200 focus:outline-none"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className={`flex items-center justify-center h-8 w-8 rounded-lg ${it.color} text-gray-800`}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
          >
            <it.icon className="h-5 w-5" />
          </motion.span>
          <span className="text-sm font-medium text-gray-700">{it.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default function FeatureMarquee() {
  return (
    <div className="w-full overflow-hidden space-y-6 py-10">
      <MarqueeRow items={ITEMS1} reverse={false} speed={30} />
      <MarqueeRow items={ITEMS2} reverse={true} speed={30} />
      <MarqueeRow items={ITEMS3} reverse={false} speed={30} />
    </div>
  );
}
