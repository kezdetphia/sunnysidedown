"use client";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
export default Template;
