"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Header() {
  return (
    <header>
      <div className="flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/icons/icon.svg" alt="Icon" width={106} height={106} />
        </motion.div>
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col gap-2 text-center">
            <motion.h1
              className="font-semibold text-3xl md:text-5xl text-[#08090A]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Matt Harvey Ostulano
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg text-[#666666]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              UI / UX, Web, Designer
            </motion.h2>
          </div>
          <motion.p
            className="max-w-[552px] text-base md:text-lg md:text-[22px] text-[#08090A]/80 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            A UI/UX Designer who is passionate about creating user-friendly
            designs for applications, websites, and engaging web experiences.
          </motion.p>
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <a
              href="https://dribbble.com/rabirai"
              target="_blank"
              className="transition ease-in-out hover:opacity-80 active:opacity-90"
            >
              <Image
                src="/icons/dribbble.svg"
                alt="Dribbble Icon"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matt-harvey-ostulano-25b3b8296"
              target="_blank"
              className="transition ease-in-out hover:opacity-80 active:opacity-90"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
                width={32}
                height={32}
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <a
              href="mailto:mattharvey220@gmail.com"
              target="_blank"
              className="inline-flex items-center justify-center h-10 px-5 py-3 bg-[#161616] rounded-xl font-semibold text-[#F8F8FA] text-sm transition ease-in-out hover:opacity-80 active:opacity-90"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
