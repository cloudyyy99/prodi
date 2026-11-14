export function ProfilLulusan() {
  return (
    <section
      id="profil-lulusan"
      className="pt-24 p-8 bg-gray-50 scroll-mt-24 font-poppins"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Profil Lulusan
        </h1>
        <hr className="mt-4 border-pink-500 w-250 mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto text-gray-800">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Ilmu Dasar */}
          <div className="md:w-1/2">
            <div className="bg-gray-200 p-4 rounded mb-4">
              <h2 className="text-xl font-bold text-gray-800">Ilmu Dasar</h2>
            </div>

            <div className="space-y-4 text-justify leading-relaxed tracking-tight">
              <p>
                Di era digital yang berkembang pesat ini, kemampuan logika dan analisis menjadi aset berharga.
                Program Studi Teknik Informatika ITP membekali mahasiswa dengan keterampilan berpikir logis dan sistematis,
                kemampuan mengidentifikasi akar masalah, serta keahlian dalam memecahkan masalah.
                Dengan demikian, lulusan siap menghadapi tantangan di dunia teknologi informasi.
              </p>

              <div>
                <p className="font-semibold">Pilihan Konsentrasi yang Menarik:</p>

                <p className="font-semibold mt-2">1. Network Engineering</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>
                    Kuasai seluk-beluk jaringan komputer, mulai dari konsep dasar hingga pengelolaan jaringan yang kompleks.
                  </li>
                  <li>
                    Pelajari strategi dan teknik keamanan jaringan (network security) untuk melindungi sistem dari ancaman siber.
                  </li>
                </ul>

                <p className="font-semibold mt-4">2. Software Engineering</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>
                    Pelajari konsep dasar dan teknik pengembangan perangkat lunak yang mutakhir.
                  </li>
                  <li>
                    Terlibat langsung dalam berbagai proyek rekayasa perangkat lunak, menerapkan tahapan pengembangan secara profesional.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prospek Karir */}
          <div className="md:w-1/2">
            <div className="bg-gray-200 p-4 rounded mb-4">
              <h2 className="text-xl font-bold text-gray-800">Prospek Karir</h2>
            </div>

            <div className="overflow-hidden rounded-sm border border-white">
  <table className="w-full table-auto text-left text-sm">
    <thead className="bg-blue-200">
      <tr>
        <th className="border px-4 py-2 w-[5%]">No</th>
        <th className="border px-4 py-2">Posisi</th>
      </tr>
    </thead>
    <tbody>
      {[
        "Senior System Analyst",
        "Web Developer",
        "Database Administrator",
        "Software Engineer",
        "Network Security Analyst",
        "System Administrator",
        "Digital Computer Technology",
        "Advisor",
        "Network Administrator"
      ].map((posisi, index) => (
        <tr key={index} className="hover:bg-white">
          <td className="border px-4 py-2 align-middle">{index + 1}</td>
          <td className="border px-4 py-2 align-middle">{posisi}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
