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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
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
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/images/T-Shirt.jpg"
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
    category: "T-Shirt",
    title: "",
    src: "/images/T-Shirt.jpg",
    content: <DummyContent />,
  },
  {
    category: "Inner wear",
    title: "",
    src: "/images/Innerwear.jpg",
    content: <DummyContent />,
  },
  {
    category: "Footwear",
    title: "",
    src: "/images/Footwear.jpg",
    content: <DummyContent />,
  },

  {
    category: "Gym wear",
    title: "",
    src: "/images/Gym.png",
    content: <DummyContent />,
  },
  {
    category: "Fragrances",
    title: "",
    src: "/images/Fragrances.jpg",
    content: <DummyContent />,
  },
  {
    category: "Trouser",
    title: "",
    src: "/images/Trouser.jpg",
    content: <DummyContent />,
  },
  {
    category: "Shirt",
    title: "",
    src: "/images/Shirt.jpg",
    content: <DummyContent />,
  },
  {
    category: "Pant",
    title: "",
    src: "/images/Pant.jpg",
    content: <DummyContent />,
  },
];
