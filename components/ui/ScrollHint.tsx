"use client";

import { motion } from "framer-motion";

export default function ScrollHint({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 py-6 ${dark ? "" : ""}`}>
      <motion.span
        className={`font-body text-[10px] tracking-[0.25em] uppercase ${dark ? "text-white/30" : "text-[#0F1C2E]/30"}`}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Scroll
      </motion.span>
      {/* 마우스 아이콘 */}
      <div className={`w-5 h-8 rounded-full border ${dark ? "border-white/25" : "border-[#0F1C2E]/25"} flex justify-center pt-1.5`}>
        <motion.div
          className={`w-0.5 h-2 rounded-full ${dark ? "bg-[#C9A96E]" : "bg-[#C9A96E]"}`}
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
