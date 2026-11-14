import {
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";


import { useToast } from "@/hooks/use-toast";


export const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-50 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Me!</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         
        </p>

      
        <div className="flex justify-center">
          <div className="space-y-8 w-full md:w-[850px]">
            <h3 className="text-2xl font-semibold mb-6">
              
            </h3>

            
            <div className="border rounded-xl p-6 flex flex-col md:flex-row flex-wrap gap-6 justify-center">
             
              <div className="flex items-start space-x-4 w-full md:w-[45%]">
                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] flex justify-center items-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=2023610047.septian@itp.ac.id&tf=cm"
                    className="text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    2023610047.septian@itp.ac.id
                  </a>
                </div>
              </div>

             
              <div className="flex items-start space-x-4 w-full md:w-[35%]">
                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] flex justify-center items-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h4 className="font-medium">No HP</h4>
                  <a
                    href="tel:+6285767406437"
                    className="text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    +6285767406437
                  </a>
                </div>
              </div>

             
              <div className="flex items-start space-x-4 w-full md:w-[45%]">
                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] flex justify-center items-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h4 className="font-medium">Lokasi</h4>
                  <p className="text-muted-foreground break-words">
                    Padang, Sumatera Barat, Indonesia
                  </p>
                </div>
              </div>

            
              <div className="flex items-start space-x-4 w-full md:w-[35%]">
                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] flex justify-center items-center">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/cloudyyy99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    github.com/cloudyyy99
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
