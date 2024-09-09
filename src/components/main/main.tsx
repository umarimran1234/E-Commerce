"use client";
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
export default function Main() {
  // import Subscribe from "@/components/subscribe/subscribe";
  return (
    <div>
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
      <QuoteForm></QuoteForm>
      <div>
        <TimelineDemo />
      </div>
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}
