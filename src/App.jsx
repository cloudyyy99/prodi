import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccessibilityPanel } from "./components/AccessibilityPanel";
import { Home } from "./pages/Home";
import { TeknikInformatika } from "./pages/TeknikInformatika";
import { VisiMisi } from "./pages/VisiMisi";
import { ProfilLulusan } from "./pages/ProfilLulusan.jsx";
import { Dosen } from "./pages/Dosen";
import { Akreditasi } from "./pages/Akreditasi";
import { Kurikulum } from "./pages/Kurikulum";
import { Test } from "./pages/tes.jsx";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <ScrollToTop />
        <AccessibilityPanel />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/TeknikInformatika" element={<TeknikInformatika />} />
          <Route path="/VisiMisi" element={<VisiMisi />} />
          <Route path="/ProfilLulusan" element={<ProfilLulusan />} />
          <Route path="/tes" element={<Test />} />
          <Route path="/Dosen" element={<Dosen />} />
          <Route path="/Akreditasi" element={<Akreditasi />} />
          <Route path="/Kurikulum" element={<Kurikulum />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
