"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { cn } from "~/lib/utils";

type Project = {
  title: string;
  thumbnail: string;
  category: string;
  year: number;
  fullView: string;
  slideshow?: string[];
  hasBorder?: boolean;
  pdf?: string;
};

const projects = [
  {
    title: "KPC Logistics Redesign",
    thumbnail: "/images/kpc-thumbail.png",
    category: "UI/UX",
    year: 2025,
    fullView: "/images/kpc-full-view.png",
    hasBorder: true,
    pdf: "/pdfs/KPC Logistics Case Study - Ostulano.pdf",
  },
  {
    title: "Western Landing Page",
    thumbnail: "/images/western-landing-page.png",
    category: "Web Design",
    year: 2025,
    slideshow: [
      "/images/western-landing-page.png",
      "/images/western-landing-page-2.png",
      "/images/western-landing-page-3.png",
      "/images/western-landing-page-4.png",
    ],
    fullView: "/images/western-full-view.png",
  },
  {
    title: "Aeris Body Spray Landing Page",
    thumbnail: "/images/aeris-body-spray-landing-page.png",
    category: "Web Design",
    year: 2025,
    slideshow: [
      "/images/aeris-body-spray-landing-page.png",
      "/images/aeris-body-spray-landing-page-2.png",
      "/images/aeris-body-spray-landing-page-3.png",
    ],
    fullView: "/images/aeris-full-view.png",
  },
  {
    title: "OSALON Landing Page",
    thumbnail: "/images/osalon-landing-page.png",
    category: "Web Design",
    year: 2024,
    slideshow: [
      "/images/osalon-landing-page.png",
      "/images/osalon-landing-page-2.png",
      "/images/osalon-landing-page-3.png",
    ],
    fullView: "/images/osalon-full-view.png",
  },
  {
    title: "Fireplace Landing Page",
    thumbnail: "/images/fireplace-landing-page.png",
    category: "Web Design",
    year: 2024,
    slideshow: [
      "/images/fireplace-landing-page.png",
      "/images/fireplace-landing-page-2.png",
    ],
    fullView: "/images/fireplace-full-view.png",
  },
];

export function Project({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="fixed inset-0 h-full w-full bg-black/70 backdrop-blur-lg"
            />
            <motion.div
              initial={{ translateY: "100vh" }}
              animate={{ translateY: 0, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-[800px] rounded-4xl bg-white p-5 md:p-16"
            >
              <button
                onClick={handleClose}
                className="sticky top-4 right-0 ml-auto md:-mt-8 md:-mr-8 flex md:h-10 md:w-10 items-center justify-center rounded-full bg-black text-white z-5017"
              >
                <Image
                  src={"/icons/close.svg"}
                  alt="Close"
                  width={32}
                  height={32}
                />
              </button>
              <div>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="mb-4">
                      <h3 className="mb-2 text-2xl md:text-4xl text-[#161616] font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-[#08090A]/50 text-sm">
                        {project.category} / {project.year}
                      </p>
                    </div>
                    {project.pdf && (
                      <a
                        href={project.pdf}
                        target="_blank"
                        className="shrink-0 flex items-center p-4 h-[33px] text-sm leading-[120%] border border-[#000000]/32 rounded-lg"
                      >
                        Open as PDF
                      </a>
                    )}
                  </div>
                  {project.slideshow && (
                    <div className="mb-8 md:mb-16">
                      <Image
                        src={project.slideshow[selectedSlide]}
                        alt={project.title}
                        width={672}
                        height={504}
                        className="w-full mb-4 object-cover rounded-[20px]"
                      />
                      <div className="flex items-center justify-center gap-2 md:gap-4">
                        {project.slideshow.map((slide, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => setSelectedSlide(index)}
                              className={cn(
                                "relative w-16 md:w-[120px] h-16 md:h-[120px] rounded-2xl overflow-hidden border-[3px] border-transparent transition-all ease-in-out",
                                selectedSlide === index
                                  ? "border-[#E08B22]"
                                  : "hover:border-[#818181]/16"
                              )}
                            >
                              <Image
                                src={slide}
                                alt={`${project.title}-${index}`}
                                className="object-cover"
                                fill
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {project.category === "Web Design" && (
                    <h4 className="mb-2 text-xl md:text-2xl text-[#161616] font-semibold">
                      Full View
                    </h4>
                  )}

                  <Image
                    src={project.fullView}
                    alt={`${project.title} Full View`}
                    width={672}
                    height={2128.78}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        onClick={handleOpen}
        key={project.title}
        className="flex flex-col gap-1"
        initial={{
          y: 100,
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
        <div
          className={cn(
            "group rounded-2xl overflow-hidden",
            project.hasBorder && "border border-[#000000]/16"
          )}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={552}
            height={414}
            className="w-full object-cover transition ease-in-out duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-[#161616] font-medium">
            {project.title}
          </h3>
          <p className="text-[#08090A]/80 text-sm">
            {project.category} / {project.year}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export function Projects() {
  return (
    <section>
      <motion.h2
        className="mb-3 text-[#08090A]/80 text-xl md:text-[25px] font-semibold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
