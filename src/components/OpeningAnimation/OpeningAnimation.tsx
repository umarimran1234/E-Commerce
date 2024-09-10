"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OpeningAnimation = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Automatically hide the animation after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 2000); // Total animation time in milliseconds

    return () => clearTimeout(timer);
  }, []);

  if (isAnimationComplete) {
    return null; // Remove the animation from the DOM when it's complete
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.img
        src="/images/E-CommerceLogo-1.png"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ width: '200px', height: 'auto' }}
      />
    </motion.div>
  );
};

export default OpeningAnimation;
