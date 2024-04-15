"use client";
import React from "react";
import courseData from "@/data/music_course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const featuredCourses = courseData.courses.filter(
  (course: Course) => course.isFeatured
);

function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col max-w-sm p-4 sm:p-10  rounded-[22px]  dark:bg-zink-900  overflow-hidden h-full ">
                <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 ">
                    {course.title}
                  </p>
                  <p className="text-sm text-neural-600 mb-5 flex-grow">
                    {course.description}
                  </p>
                  <Link className="border" href={`/courses/${course.slug}`}>Learn more</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center ">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
