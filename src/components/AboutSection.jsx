
import { User, BookOpen, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tentang <span className="text-primary">Saya</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
       
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <User />
              <h3 className="text-xl font-semibold">Identitas</h3>
            </div>
            <p className="text-muted-foreground">Nama: Septian Dani Permana</p>
            <p className="text-muted-foreground">Email: 2023610047.SEPTIAN.ITP.AC.ID</p>
            <p className="text-muted-foreground">Lokasi: Padang, Indonesia</p>
          </div>

       
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <BookOpen />
              <h3 className="text-xl font-semibold">Pendidikan</h3>
            </div>
            <p className="text-muted-foreground">S1 Teknik Informatika, ITP (2023 - ?)</p>
            <p className="text-muted-foreground"></p>
          </div>

        
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Briefcase />
              <h3 className="text-xl font-semibold">Pengalaman</h3>
            </div>
            <p className="text-muted-foreground"></p>
            <p className="text-muted-foreground"></p>
          </div>
        </div>
      </div>
    </section>
  );
};
