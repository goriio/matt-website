import { InteractiveGridPattern } from "~/components/magicui/interactive-grid-pattern";
import { cn } from "~/lib/utils";
import { About } from "~/sections/about";
import { Education } from "~/sections/education";
import { Footer } from "~/sections/footer";
import { Header } from "~/sections/header";
import { Projects } from "~/sections/projects";
import { Skills } from "~/sections/skills";
import { WorkExperience } from "~/sections/work-experience";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12"
          )}
          squares={[80, 80]}
        />
      </div>
      <div className="relative container flex flex-col gap-8 md:gap-12 mx-auto md:my-20 max-w-[672px] w-full px-5 py-6 md:p-[60px] shadow-[0_47px_102px_rgba(0,0,0,0.1),0_185px_186px_rgba(0,0,0,0.09),0_419px_250px_rgba(0,0,0,0.05),0_745px_250px_rgba(0,0,0,0.01)] bg-white z-10">
        <Header />
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
        <About />
        <Footer />
      </div>
    </main>
  );
}
