"use client";

import Image from "next/image";
import { motion } from "motion/react";

const workExperience = [
  {
    company: "Skyshare Labs",
    position: "UI / UX / Web Designer",
    date: "March 2024 - Present",
    image: "/images/skyshare-labs.svg",
  },
  {
    company: "Deer Designer",
    position: "Graphic / Web Designer",
    date: "September 2024 - March 2025",
    image: "/images/deer-designer.svg",
  },
  {
    company: "FastSend Mobile Solutions",
    position: "UI / UX Designer",
    date: "April 2023 - July 2023",
    image: "/images/fastsend.svg",
  },
];

export function WorkExperience() {
  return (
    <section>
      <motion.h2
        className="mb-4 text-[#08090A]/80 text-xl md:text-[25px] font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.7 }}
      >
        Work Experience
      </motion.h2>
      <div className="flex flex-col gap-4">
        {workExperience.map((experience) => (
          <motion.div
            key={experience.company}
            className="flex items-center justify-between gap-4"
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.7,
              },
            }}
            viewport={{ once: true, margin: "-100px 0px" }}
          >
            <div className="flex items-center gap-4">
              <Image
                src={experience.image}
                alt={experience.company}
                width={48}
                height={48}
              />
              <div>
                <h3 className="font-semibold text-[#161616] text-base md:text-xl">
                  {experience.company}
                </h3>
                <p className="text-[#08090A]/80 text-sm">
                  {experience.position}
                </p>
              </div>
            </div>
            <p className="text-[#08090A]/80 text-sm text-right">
              {experience.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
