"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      className="flex flex-col items-center gap-4 w-full px-[32px] py-[46px] bg-[linear-gradient(rgba(0,0,0,0.8)),url(/images/footer-background.png)] bg-cover bg-center rounded-2xl overflow-hidden"
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
      <Image src="/icons/icon.svg" alt="Icon" width={64} height={64} />
      <div className="text-center">
        <h2 className="font-semibold text-xl text-[#F8F8FA]">
          For more inquiries/ look into more of my projects
        </h2>
        <p className="text-sm text-white/80 mt-3">
          Feel free to reach out for a chat, job opportunity, or design-related
          questions!
        </p>
      </div>
      <a
        href="mailto:mattharvey220@gmail.com"
        target="_blank"
        className="inline-flex items-center justify-center h-10 px-5 py-3 bg-[#754B17] rounded-xl font-semibold text-[#F8F8FA] text-sm transition ease-in-out hover:opacity-80 active:opacity-90"
      >
        Get in touch
      </a>
    </motion.footer>
  );
}
