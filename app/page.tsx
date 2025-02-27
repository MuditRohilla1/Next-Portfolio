import Approach from "@/components/Approach";
import Card from "@/components/Card";
import Content from "@/components/Content";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        {/* <Clients/> */}
        <Content/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <div className="hidden md:block">
          <Card/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
