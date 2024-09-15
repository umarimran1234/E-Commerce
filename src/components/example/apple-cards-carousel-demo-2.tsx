"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-red-600 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recommended items
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                We have a amazing items for mens and also New Fashion .
              </span>{" "}
              Explore new fashion .
            </p>
            <Image
              src="/images/Kurta-Big.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Kurta",
    title: "Kurta for men.",
    src: "/images/Kurta-Blue.png",
    content: <DummyContent />,
  },
  {
    category: "Jogger Pants",
    title: "Jogger pants for men",
    src: "/images/Jogger.png",
    content: <DummyContent />,
  },
  {
    category: "Shirt",
    title: "Shirt for men",
    src: "/images/Shirt.png",
    content: <DummyContent />,
  },

  {
    category: "T-Shirt",
    title: "T-Shirt for men",
    src: "/images/T-Shirt.png",
    content: <DummyContent />,
  },
  {
    category: "Women's T-Shirt",
    title: "T-Shirt for women",
    src: "/images/Women-T-Shirt.png",
    content: <DummyContent />,
  },
  {
    category: "Woman's Jogger",
    title: "Jogger for woman",
    src: "/images/Women-Jogger.png",
    content: <DummyContent />,
  },
];
