export function VisiMisi() {
  return (
    <section id="visi-misi" className="pt-24 p-8 bg-gray-50 scroll-mt-24 font-poppins">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Visi dan Misi
        </h1>
        <hr className="mt-4 border-pink-500 w-250 mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto text-gray-800 space-y-8">
        {/* Visi */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 bg-gray-200 p-4 rounded mb-3">
            Visi
          </h2>
          <p className="text-justify leading-relaxed text-base tracking-tight">
            “Menjadi salah satu program studi yang unggul dan kompetitif di bidang Jaringan Komputer
            dan Rekayasa Perangkat Lunak menuju world class university tahun 2040.”
          </p>
        </div>

        {/* Misi */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 bg-gray-200 p-4 rounded mb-3">
            Misi
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-justify leading-relaxed text-base tracking-tight">
            <li>
              Menyelenggarakan pendidikan tinggi yang berkualitas berbasis Teknologi Informasi.
            </li>
            <li>
              Melakukan dan mengembangkan penelitian yang inovatif dalam bidang Teknologi Informasi,
              khususnya di bidang Jaringan Komputer dan Rekayasa Perangkat Lunak.
            </li>
            <li>
              Melaksanakan pengabdian kepada masyarakat dalam bentuk dukungan penyebaran ilmu
              pengetahuan dan teknologi informasi.
            </li>
            <li>
              Meningkatkan sarana dan prasarana pembelajaran mengikuti perkembangan ilmu pengetahuan
              dan teknologi.
            </li>
            <li>
              Melakukan evaluasi kurikulum yang berkelanjutan.
            </li>
            <li>
              Meningkatkan kerjasama yang saling menguntungkan dengan pihak lain baik dalam negeri
              maupun luar negeri.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
