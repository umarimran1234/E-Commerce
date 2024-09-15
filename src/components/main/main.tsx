"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsAndoffers/dealsandoffers";
import Footer from "@/components/Footer/Footer";
import HomeOutdoorSection from "@/components/HomeOutdoorSection/HomeOutdoorSection";
import Navbar from "@/components/Navbar/Navbar";
import Consumer from "../Consumer/consumer";

// import TimelineDemo from "../example/timeline-demo";
import QuoteForm from "../QuoteForm/QuoteForm";
import CircleAnimation from "../CircleAnimation/CircleAnimation"; // Import the CircleAnimation component
import HoverExpend from "../hoverExpend/HoverExpend";

export default function Main() {
  const [showContent, setShowContent] = useState(false);

  // Run the opening animation for 2 seconds before showing the main content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Animation runs for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Show Opening Animation */}
      {!showContent && <CircleAnimation />}

      {/* Main content after animation */}
      {showContent && (
        <>
          <Navbar />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="container mb-12 mx-auto"
          >
            <Banner />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="container mb-12 mx-auto"
          >
            <DealsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mb-12 mx-auto"
          >
            <HomeOutdoorSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mb-12 mx-auto"
          >
            <Consumer />
          </motion.div>

          <HoverExpend />

          <QuoteForm />
          <div>{/* <TimelineDemo /> */}</div>

          {/* <Subscribe /> */}
          <Footer />
        </>
      )}
    </div>
  );
}
