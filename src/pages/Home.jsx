import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { CommentSection } from "../components/CommentSection";



import Pendidikan from "../components/Pendidikan";
import Praktek from "../components/Penelitian";
import Pengabdian from "../components/Pengabdian";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <Navbar />
      <main>
        <HeroSection />
        <Pendidikan />
        <Praktek />
        <Pengabdian />
        <CommentSection/>
      </main>

      
    </div>
  );
};
