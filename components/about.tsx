"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.99);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Chiropractic</span>, I found myself drawn
        to the world of programming and decided to embark on a career change. I
        began teaching myself programming and enrolled in a coding bootcamp to
        learn <span className="font-medium">full-stack web development</span>.
        <span className="italic"> I love problem-solving</span>, and the
        satisfaction of unraveling a complex challenge. My core technology stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Express, Python, SQL, and MongoDB
        </span>
        . Additionally, I am proficient in{" "}
        <span className="font-medium">
          TypeScript, Prisma, Flask, Selenium{" "}
        </span>
        and more! I am <span className="underline">Passionate</span> about
        continuous learning and I am always eager to explore new technologies
        and expand my knowledge base. I am currently searching for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I spend a lot of
        time outdoors - canyoning, rock climbing, hiking and trail running. I
        also enjoy <span className="font-medium">training and learning</span>{" "}
        about these activities to get the best{" "}
        <span className="font-medium">performance</span> I possibly can from
        myself.
      </p>
    </motion.section>
  );
}
