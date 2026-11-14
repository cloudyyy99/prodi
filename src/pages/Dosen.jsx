export function Dosen() {
  const dosenList = [
    {
      nama: "Anisya, M.Kom",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/anisya.jpg",
    },
    {
      nama: "Anna Syahrani, M.Eng",
      jabatan: "Teknik Informatika Sarjana",
      bidang:
        "Big Data Analytics, Context-Aware Computing, Pervasive & Mobile Computing",
      foto: "/img/dosen/anna.png",
    },
    {
      nama: "Busran, S.Pd, M.T",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/busran.jpg",
    },
    {
      nama: "Dede Wira Trise Putra, M.Kom",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/dede.jpg",
    },
    {
      nama: "Eko Kurniawanto Putra, S.Pd., M.T",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/eko.jpg",
    },
    {
      nama: "Eva Yulianti, M.Cs",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/eva.png",
    },
    {
      nama: "Firmansyah David, S.T, M.Eng, Ph.D.",
      jabatan: "Teknik Informatika Sarjana",
      bidang: "Manajemen Informatika",
      foto: "/img/dosen/firmansyah.png",
    },
    {
      nama: "Ganda Yoga Swara, S.Kom., M.Kom.",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/ganda.jpg",
    },
    {
      nama: "Indra Warman, M.Kom",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/indra.jpg",
    },
    {
      nama: "Minarni, S.Si, M.T",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/minarni.jpg",
    },
    {
      nama: "Putri Mandarani, M.T",
      jabatan: "Teknik Informatika Sarjana",
      foto: "/img/dosen/putri.jpg",
    },
  ];

  return (
<section id="dosen" className="pt-24 p-8 bg-gray-50 scroll-mt-24 font-poppins">
  <div className="text-center mb-10">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Dosen</h1>
    <hr className="mt-4 border-pink-500 w-250 mx-auto" />
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 place-items-center">
    {dosenList.map((dosen, index) => (
      <div
        key={index}
        className="flex w-full bg-white border border-gray-200 rounded-lg shadow-md p-6"
      >
        <img
          src={dosen.foto}
          alt={dosen.nama}
          className="w-24 h-24 object-cover rounded mr-6 flex-shrink-0"
        />
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-800">{dosen.nama}</h2>
          <p className="text-sm text-gray-700">{dosen.jabatan}</p>
          {dosen.bidang && (
            <p className="text-sm text-gray-500 mt-1">{dosen.bidang}</p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
