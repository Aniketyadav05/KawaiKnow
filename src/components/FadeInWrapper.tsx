import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface FadeInWrapperProps {
  children: ReactNode;
  className?: string;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // ✅ Fixed `triggerOnce` issue

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
