import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <div className="px-2 sm:px-4">
      <Banner />
      {/* about  part */}
      <About />
      {/* skill */}
      <Skills />
      {/* projects  */}
      <Projects />
    </div>
  );
}
