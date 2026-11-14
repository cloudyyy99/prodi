import { ArrowDown } from "lucide-react";
import DataIMG from "/data";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${DataIMG.BgItp})` }}
      ></div>

      {/* Overlay Hitam */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Konten */}
  <div className="relative z-20 container max-w-4xl mx-auto text-center pt-5 pb-5">
  <div className="inline-block bg-white/50 backdrop-blur px-6 py-4 space-y-3">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#04396C] opacity-0 animate-fade-in-delay-1">
      Teknik Informatika
    </h1>
    <p className="text-lg md:text-xl text-black opacity-0 animate-fade-in-delay-3">
      Institut Teknologi Padang
    </p>
  </div>
</div>

<div className="absolute bottom-0 left-0 w-full h-19 bg-[#04396C] z-20" />



     
    </section>
  );
};
