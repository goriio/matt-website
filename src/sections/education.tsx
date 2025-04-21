"use client";

import Image from "next/image";
import { motion } from "motion/react";

const workExperience = [
  {
    school: "Polytechnic University of the Philippines",
    course: "Bachelor of Science in Information Technology",
    description: "2023 • Cum Laude",
    image: "/images/polytechnic-university-of-the-philippines.svg",
  },
];

export function Education() {
  return (
    <section>
      <motion.h2
        className="mb-4 text-[#08090A]/80 text-xl md:text-[25px] font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.7 }}
      >
        Education
      </motion.h2>
      <div className="flex flex-col gap-4">
        {workExperience.map((experience) => (
          <motion.div
            key={experience.school}
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
                alt={experience.school}
                width={48}
                height={48}
                className="shrink-0"
              />
              <div>
                <h3 className="max-w-[227px] w-full font-semibold text-[#161616] text-base leading-[1.20] md:text-xl">
                  {experience.school}
                </h3>
                <p className="text-[#08090A]/80 text-sm">{experience.course}</p>
              </div>
            </div>
            <p className="self-start text-[#08090A]/80 text-sm text-right">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
