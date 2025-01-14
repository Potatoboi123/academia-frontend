"use client";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import CourseCard from "./cards/CourseCard";

interface ICourse {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  instructor:string
}

export default function Section({label}:{label:string}) {
  const [courses, setCourses] = useState<ICourse[]>([]);
  useEffect(() => {
    //Fetch the courses here
    const a = [
      {
        id: "strin",
        title: "asd",
        image: "asd",
        rating: 123,
        reviews: 123,
        price: 123,
        instructor:'asds'
      },
      {
        id: "sting",
        title: "asd",
        image: "asd",
        rating: 123,
        reviews: 123,
        price: 123,
        instructor:'asds'
      },
      {
        id: "tring",
        title: "asd",
        image: "asd",
        rating: 123,
        reviews: 123,
        price: 123,
        instructor:'asds'
      },
      {
        id: "tng",
        title: "asd",
        image: "asd",
        rating: 123,
        reviews: 123,
        price: 123,
        instructor:'asds'
      },
    ];
    setCourses(a);
  }, []);
  return (
    <>
      <section className="pt-10 pb-5">
        <div className="flex gap-20 items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white cursor-auto">
            {label}
          </h2>
          <button className="flex items-center text-indigo-400 hover:text-indigo-300">
            <span>View all</span>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5 ">
          {courses.map((course: ICourse) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </section>
    </>
  );
}
