import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataIMG from "../../data";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Teknik Informatika", href: "/TeknikInformatika" },
  { name: "Visi Misi", href: "/VisiMisi" },
  { name: "Profil Lulusan", href: "/ProfilLulusan" },
  { name: "Dosen", href: "/Dosen" },
  { name: "Akreditasi", href: "/Akreditasi" },
  { name: "Kurikulum", href: "/Kurikulum" },
  { name: "Test", href: "/tes" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 top-0 duration-300 bg-[#04396C]",
        isScrolled ? "py-2 shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold text-primary flex items-center"
          to="/"
        >
          <span className="ml-5 relative z-10 justify-between flex">
            <img src={DataIMG.logohmti} alt="Logo" className="w-10" />
            <span className="text-white ml-2">Teknik</span>
            <span className="text-[#FF69B4] ml-2">Informatika</span>
          </span>
        </Link>

        <div className=" hidden md:flex space-x-3 font-robotoCondensed font-semibold">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-white hover:text-pink-300 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-[#064663]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className="text-white hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
