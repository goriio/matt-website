import { About } from "~/sections/about";
import { Footer } from "~/sections/footer";
import { Header } from "~/sections/header";
import { Projects } from "~/sections/projects";
import { Skills } from "~/sections/skills";
import { WorkExperience } from "~/sections/work-experience";

export default function Home() {
  return (
    <div className="container flex flex-col gap-8 md:gap-12 mx-auto max-w-[672px] w-full px-5 py-6 md:p-[60px]">
      <Header />
      <Projects />
      <WorkExperience />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
