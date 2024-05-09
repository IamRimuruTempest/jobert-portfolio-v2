"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Social from "@/app/components/Social";
export default function About() {
  return (
    <section className="" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-3  text-2xl font-medium tracking-tighter"
      >
        hey, I'm jobert adviento{" "}
        <span>
          <motion.div
            animate={{
              rotate: [0, -15, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
            className="inline-block"
          >
            👋
          </motion.div>
        </span>
      </motion.h1>

      <Social />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <p className=" text-white/70">
          I'm a passionate{" "}
          <span className="text-[#F0DB4F] font-semibold">
            Full-Stack Web Developer
          </span>{" "}
          with 2 years of experience, passionate about building high-quality,
          user-friendly web applications.
        </p>
      </motion.div>

      <div className="my-8 columns-2 gap-4 sm:columns-3 z-0">
        <motion.div
          initial={{ x: `-5vw`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="relative mb-4 h-40"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 1.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ x: `-10vw`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            duration: 1,
            delay: 0.1,
          }}
          className="relative mb-4 h-80 sm:mb-0"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 4.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ y: `-5vw`, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="relative h-40 sm:mb-4 sm:h-80"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 5.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ y: `3vw`, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            duration: 1,
            delay: 0.1,
          }}
          className="relative mb-4 h-40 sm:mb-0"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 3.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ x: `10vw`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            duration: 1,
            delay: 0.1,
          }}
          className="relative mb-4 h-40"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 2.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ x: `5vw`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
          }}
          className="relative h-80"
        >
          <Image
            alt=""
            fill
            class="rounded-lg object-cover"
            src="/images/about/about 6.jpg"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className=" text-white/70"
      >
        From frontend to backend, I thrive on building seamless digital
        experiences that not only look good but also work flawlessly.
      </motion.p>
    </section>
  );
}
