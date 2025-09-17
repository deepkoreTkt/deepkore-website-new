import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  { name: "Budget Approval", color: "bg-green-100", symbol: "💰" },
  { name: "Expense Management", color: "bg-red-100", symbol: "💸" },
  { name: "Payables and Receivables", color: "bg-blue-100", symbol: "💳" },
  { name: "Treasury Requests", color: "bg-purple-100", symbol: "🏦" },
  { name: "Capital Expenditure", color: "bg-orange-100", symbol: "🏗️" },
  { name: "Travel Reimbursement", color: "bg-teal-100", symbol: "✈️" },
  { name: "Admin Service Requests", color: "bg-pink-100", symbol: "📋" },
  { name: "Record Keeping", color: "bg-indigo-100", symbol: "📚" },
  { name: "Maintenance Scheduling", color: "bg-yellow-100", symbol: "🔧" },
  { name: "IT Service Requests", color: "bg-gray-100", symbol: "💻" },
  { name: "Leave Management", color: "bg-cyan-100", symbol: "🏖️" },
  { name: "Performance Management", color: "bg-lime-100", symbol: "📈" },
  { name: "Employee Management", color: "bg-violet-100", symbol: "👥" },
  { name: "Department Transfers", color: "bg-amber-100", symbol: "🔄" },
  { name: "HR Benefits Requests", color: "bg-rose-100", symbol: "🎁" },
];

const MarqueeRow = ({ reverse = false, speed = 30, items = ITEMS }) => (
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
    {[...items, ...items].map((it, idx) => (
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

export default function Processicon() {
  return (
    <div className="w-full overflow-hidden space-y-6 py-10">
      <MarqueeRow reverse={false} speed={30} items={ITEMS.slice(0, 5)} />
      <MarqueeRow reverse={true} speed={30} items={ITEMS.slice(5, 10)} />
      <MarqueeRow reverse={false} speed={30} items={ITEMS.slice(10, 15)} />
    </div>
  );
}
