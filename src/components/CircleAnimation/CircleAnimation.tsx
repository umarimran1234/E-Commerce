import { motion } from "framer-motion";

const CircleAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Upper semi-circle */}
      <motion.div
        className="w-24 h-24 border-t-8 border-l-8 rounded-full border-white"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Slower speed
      />
      {/* Lower semi-circle */}
      <motion.div
        className="w-24 h-24 border-b-8 border-r-8 rounded-full border-white mt-4"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Slower speed
      />
    </div>
  );
};

export default CircleAnimation;
