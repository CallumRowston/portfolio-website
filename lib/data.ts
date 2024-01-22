import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import travellersForumImg from "@/public/travellers-forum.png";
import apiErdImg from "@/public/api-erd.png";
import pywordleImg from "@/public/pywordle.jpeg";
import nbaOctImg from "@/public/nba-oct.png";
import portfolioLightImg from "@/public/portfolio-light.jpg";

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
      "I'm now a full-stack developer working for Wicky. Some projects have included expanding the range of data tools to the NBA and NFL and adding new features to existing tools. I have also implemented a user subscription feature to enable monetization of these data tools. ",
    icon: React.createElement(FaReact),
    date: "Mar 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Site",
    description:
      "This portfolio site built using the latest NextJS features. Fully animated and responsive with dark mode.",
    tags: ["React", "NextJS", "TypeScript", "Tailwind", "Framer"],
    imageUrl: portfolioLightImg,
    gitHubUrl: "https://github.com/CallumRowston/portfolio-website"
  },
  {
    title: "Wicky NBA OCT",
    description:
      "A data tool to scrape betting odds from multiple bookmakers for the NBA, aggregate and display the data to help punters make informed decisions",
    tags: ["Python", "React", "Express", "Selenium", "Pandas", "SQL"],
    imageUrl: nbaOctImg,
    gitHubUrl: "https://wicky.ai/nba-oct/"
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
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Web Scraping",
  "Wordpress",
  "Agile",
] as const;
