"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsAndoffers/dealsandoffers";
import Footer from "@/components/Footer/Footer";
import HomeOutdoorSection from "@/components/HomeOutdoorSection/HomeOutdoorSection";
import Navbar from "@/components/Navbar/Navbar";
import Consumer from "../Consumer/consumer";
import AppleCardsCarouselDemo from "../example/apple-cards-carousel-demo-2";
import TimelineDemo from "../example/timeline-demo";
import QuoteForm from "../QuoteForm/QuoteForm";
import OpeningAnimation from "../OpeningAnimation/OpeningAnimation";

export default function Main() {
  const [showContent, setShowContent] = useState(false); // State to control when to show the main content

  // Run the opening animation for a specific duration before showing content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Show the content after 3 seconds (adjust this duration if needed)
    }, 3000); // Duration of the animation

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {/* Show Opening Animation first */}
      {!showContent && <OpeningAnimation />}

      {/* Show the rest of the content after animation completes */}
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

          <AppleCardsCarouselDemo />
          <QuoteForm />
          <div>
            <TimelineDemo />
          </div>

          {/* <Subscribe /> */}
          <Footer />
        </>
      )}
    </div>
  );
}
