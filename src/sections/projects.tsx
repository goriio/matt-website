"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { cn } from "~/lib/utils";

type Project = {
  title: string;
  category: string;
  year: number;
  slideshow: string[];
  fullView: string;
};

const projects = [
  {
    title: "Western Landing Page",
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
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: "100%" }}
              transition={{ duration: 0.3 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-[800px] rounded-4xl bg-white p-5 md:p-16 font-sans"
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
                <div className="mb-8 md:mb-16">
                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl md:text-4xl text-[#161616] font-bold">
                      {project.title}
                    </h3>
                    <p className="text-[#08090A]/50 text-sm">
                      {project.category} / {project.year}
                    </p>
                  </div>
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
                <div>
                  <h4 className="mb-2 text-xl md:text-2xl text-[#161616] font-semibold">
                    Full View
                  </h4>

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
        <div className="group rounded-2xl overflow-hidden">
          <Image
            src={project.slideshow[0]}
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
      <div className="flex flex-col gap-3">
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
