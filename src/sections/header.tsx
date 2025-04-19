import Image from "next/image";

export function Header() {
  return (
    <header>
      <div className="flex flex-col items-center gap-3">
        <Image src="/icons/icon.svg" alt="Icon" width={106} height={106} />
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-3xl md:text-5xl text-[#08090A]">
              Matt Harvey Ostulano
            </h1>
            <h2 className="text-base md:text-lg text-[#666666]">
              UI / UX, Web, Designer
            </h2>
          </div>
          <p className="max-w-[552px] text-base md:text-lg md:text-[22px] text-[#08090A]/80 text-center">
            A UI/UX Designer who is passionate about creating user-friendly
            designs for applications, websites, and engaging web experiences.
          </p>
          <div className="flex items-center gap-6">
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
          </div>
          <a
            href="mailto:mattharvey220@gmail.com"
            target="_blank"
            className="inline-flex items-center justify-center h-10 px-5 py-3 bg-[#161616] rounded-xl font-semibold text-[#F8F8FA] text-sm transition ease-in-out hover:opacity-80 active:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
