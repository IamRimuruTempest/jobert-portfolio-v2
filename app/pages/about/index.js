"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Social from "@/app/components/Social";
export default function About() {
  return (
    <section className="" id="about">
      <h1 className="mb-3  text-2xl font-medium tracking-tighter">
        hey, I'm jobert adviento 👋
      </h1>

      <Social />

      <p className=" text-white/70">
        I'm a passionate{" "}
        <span className="text-[#F0DB4F] font-semibold">
          Full-Stack Web Developer
        </span>{" "}
        based in the Philippines with a strong desire to create dynamic and
        user-friendly websites.
      </p>

      <div className="my-8 columns-2 gap-4 sm:columns-3 z-0">
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 1.jpg"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 4.jpg"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 5.jpg"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 3.jpg"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 2.jpg"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 6.jpg"
          />
        </div>
      </div>

      <p className=" text-white/70">
        My journey in web development began with a strong foundation in Computer
        Science from Cagayan State University - Carig Campus. This educational
        experience provided me with the knowledge and tools to excel in the
        field of web development.
      </p>
    </section>
  );
}
