import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import travellersForumImg from "@/public/travellers-forum.png";
import apiErdImg from "@/public/api-erd.png";
import pywordleImg from "@/public/pywordle.jpeg";
import nbaOctImg from "@/public/nba-oct.png";
import portfolioLightImg from "@/public/portfolio-light.jpg";
import littleMoversClub from "@/public/littlemoversclub.png";
import flipIqImg from "@/public/flipiq.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Sydney (Remote)",
    description:
      "After 6 months of full-time study at CoderAcademy, I graduated as a full-stack web developer with a Diploma of IT. I found an internship immediately.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - Jan 2023",
  },
  {
    title: "Wicky | Software Engineer Internship",
    location: "Sydney (Hybrid)",
    description:
      "I worked with the Founder and data team to maintain and create new data tools for betting and stats relating to the NRL and Cricket",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Mar 2023",
  },
  {
    title: "Wicky | Junior Software Engineer",
    location: "Sydney, (Hybrid)",
    description:
      "I'm now a full-stack developer working for Wicky. Some projects have included expanding the range of data tools to the AFL, NBA and NFL and adding new features to existing tools. We have recently developed a ChatGPT based chatbots for multiple sports to help users make informed decisions by asking questions. I have also implemented a user subscription feature to enable monetization of these data tools. ",
    icon: React.createElement(FaReact),
    date: "Mar 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FLIPIQ Flashcards",
    description:
      "A Flashcard quiz app to build your own quizzes on demand with AI. Includes login for saving created quizzes or a guest mode to avoid signing up",
    tags: ["Python", "React", "Django", "PostgreSQL", "Tailwind", "OpenAI"],
    imageUrl: flipIqImg,
    gitHubUrl: "https://flip-iq.vercel.app/auth"
  },
  {
    title: "Little Movers Club",
    description:
      "Professionally branded website for a small business built using the latest NextJS features. Fully animated and responsive with contact form.",
    tags: ["React", "NextJS", "TypeScript", "Tailwind", "Framer"],
    imageUrl: littleMoversClub,
    gitHubUrl: "https://littlemoversclub.com.au/"
  },
  {
    title: "Traveller's Forum",
    description:
      "A complete full-stack forum app with posts, comments, ratings and authentication. My final bootcamp group project built over 3 weeks.",
    tags: ["React", "Express", "MongoDB", "Node.js", "JWT", "Jest"],
    imageUrl: travellersForumImg,
    gitHubUrl: "https://github.com/CallumRowston/CA-T3A2-B-travelers-forum-server"
  },
  {
    title: "Canyoning API",
    description:
      "A complete API webserver for a canyoning related forum. Full CRUD functionality, authentication and admin controls.",
    tags: ["Python", "Flask", "SQL", "Marshmallow"],
    imageUrl: apiErdImg,
    gitHubUrl: "https://github.com/CallumRowston/Canyoning_API_Webserver_CallumRowston_T2A2"
  },
  {
    title: "PyWordle",
    description:
      "A Wordle style Python terminal app with additional word length and guess number options, and bash install script for easy setup.",
    tags: ["Python", "Bash", "Scripting", "PyTest"],
    imageUrl: pywordleImg,
    gitHubUrl: "https://github.com/CallumRowston/Python_Wordle_CallumRowston_T1A3"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "Flask",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Web Scraping",
  "Wordpress",
  "Agile",
] as const;
