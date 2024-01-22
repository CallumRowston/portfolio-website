"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrow90DegDown, BsArrowBarDown, BsGraphDownArrow, BsMenuDown } from "react-icons/bs";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      {/* <BsArrowBarDown className="opacity-70 group-hover:translate-x-1 transition scale-[3] " /> */}
    </motion.div>
  );
}
