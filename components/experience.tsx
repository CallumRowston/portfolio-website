"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.4)
    const { theme } = useTheme();

  return (
    <div className="relative">
    <div className="bg-gradient-to-r from-custom-green to-custom-blue bg-200% animate-gradient-waves absolute top-[9rem] -z-10 right-[11rem] h-[35rem] w-[30rem] rounded-full blur-[10rem] sm:w-[80rem] dark:bg-gradient-to-r dark:from-custom-dark-blue dark:to-custom-dark-purple dark:bg-opacity-50"></div>
    <div className="bg-gradient-to-r from-custom-blue to-custom-purple bg-200% animate-gradient-waves absolute top-[9rem] -z-10 left-[-35rem] h-[35rem] w-[30rem] rounded-full blur-[10rem] sm:w-[100rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-gradient-to-r dark:from-custom-dark-green dark:to-custom-dark-blue dark:bg-opacity-50"></div>
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40
    ">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? "0.4rem solid  #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
    </div>

  );
}
