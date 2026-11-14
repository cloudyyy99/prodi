import DataIMG from "../../data";

export function Akreditasi() {
  return (
      <section id="akreditasi" className="pt-24 p-8 bg-white scroll-mt-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Akreditasi</h1>
        <hr className="mt-4 border-pink-500 w-250 mx-auto" />
      </div>

     
      <div className="flex justify-center mt-6">
        <div
          className="w-[1000px] h-[700px] bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${DataIMG.sertifikat})` }}
        />
      </div>
    </section>
  );
}
