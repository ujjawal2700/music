"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonial = [
  {
    name: "John Doe",
    title: "Engineer",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    name: "Jane Smith",
    title: "Artist",
    quote:
      "Every child is an artist. The problem is how to remain an artist once we grow up.",
  },
  {
    name: "Alice Johnson",
    title: "Writer",
    quote: "The only way to do great work is to love what you do.",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonial}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
