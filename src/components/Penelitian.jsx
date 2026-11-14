import DataIMG from "../../data";

function Penelitian() {
  return (
    <section id="penelitian" className="py-10 font-poppins">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Gambar (di desktop: kiri, di mobile: bawah) */}
          <div
            className="w-[350px] h-[350px] bg-cover bg-center order-2 md:order-1"
            style={{ backgroundImage: `url(${DataIMG.Penelitian})` }}
          />

          {/* Teks (di desktop: kanan, di mobile: atas) */}
          <div className="md:w-1/2 text-start order-1 md:order-2">
            <h6 className="text-3xl md:text-4xl font-bold mb-4">Penelitian</h6>
            <p className="text-base leading-relaxed">
              Melaksanakan Tri Dharma Perguruan Tinggi merupakan prioritas Institut Teknologi Padang (ITP)
              dalam melahirkan Sumber Daya Manusia (SDM) yang cerdas dan mengimplementasikan ilmu
              pengetahuan untuk kemajuan bangsa, salah satunya melalui penelitian. Dengan melakukan
              penelitian inovatif secara kontinue, ITP berhasil meraih tiga kategori prestasi membanggakan
              di bidang penelitian dari LLDIKTI Wilayah X.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Penelitian;
