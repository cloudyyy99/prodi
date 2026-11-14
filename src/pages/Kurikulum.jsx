import { useState } from "react";

export function Kurikulum() {
  const data = [

    {
      semester: 1,
      sks: 20,
      courses: [
        { no: 1, code: "ITP1012", name: "Pendidikan Pancasila", sks: 2 },
        { no: 2, code: "ITP1042", name: "Bahasa Indonesia", sks: 2 },
        { no: 3, code: "TIF1312", name: "Bahasa Inggris", sks: 2 },
        { no: 4, code: "TIF1213", name: "Transformasi Digital", sks: 3 },
        { no: 5, code: "TIF1112", name: "Informatika Sosial", sks: 2 },
        { no: 6, code: "TIF1222", name: "Manajemen Sistem Informasi", sks: 2 },
        { no: 7, code: "TIF1233", name: "Dasar Pemrograman", sks: 3 },
        { no: 8, code: "TIF1241", name: "Praktikum Dasar Pemrograman", sks: 1 },
        { no: 9, code: "TIF1253", name: "Kalkulus 1", sks: 3 },
      ],
    },
    {
      semester: 2,
      sks: 20,
      courses: [
        { no: 10, code: "ITP2032", name: "Pendidikan Agama", sks: 2 },
        { no: 11, code: "ITP2022", name: "Pendidikan Kewarganegaraan", sks: 2 },
        { no: 12, code: "TIF2212", name: "Probabilitas dan Statistik", sks: 2 },
        { no: 13, code: "TIF2223", name: "Organisasi dan Arsitektur Komputer", sks: 3 },
        { no: 14, code: "TIF2233", name: "Kalkulus 2", sks: 3 },
        { no: 15, code: "TIF2243", name: "Teknik Elektronika Digital", sks: 3 },
        { no: 16, code: "TIF2251", name: "Praktikum Teknik Elektronika Digital", sks: 1 },
        { no: 17, code: "TIF2263", name: "Algoritma dan Struktur Data", sks: 3 },
        { no: 18, code: "TIF2271", name: "Praktikum Algoritma dan Struktur Data", sks: 1 },
      ],
    },
    {
      semester: 3,
      sks: 21,
      courses: [
        { no: 19, code: "TIF3213", name: "Matematika Diskret dan Logika", sks: 3, prerequisite: "Kalkulus 2" },
        { no: 20, code: "TIF3223", name: "Analisis Sistem dan Desain", sks: 3 },
        { no: 21, code: "TIF3233", name: "Multimedia", sks: 3 },
        { no: 22, code: "TIF3243", name: "Basis Data", sks: 3 },
        { no: 23, code: "TIF3251", name: "Praktikum Basis Data", sks: 1 },
        { no: 24, code: "TIF3263", name: "Jaringan Komputer 1", sks: 3, prerequisite: "Teknik Elektronika Digital" },
        { no: 25, code: "TIF3271", name: "Praktikum Jaringan Komputer 1", sks: 1 },
        { no: 26, code: "TIF3283", name: "Sistem Operasi", sks: 3, prerequisite: "Organisasi dan Arsitektur Komputer" },
        { no: 27, code: "TIF3291", name: "Praktikum Sistem Operasi", sks: 1 },
      ],
    },
    {
      semester: 4,
      sks: 20,
      courses: [
        { no: 28, code: "TIF4213", name: "Aljabar Linear", sks: 3 },
        { no: 29, code: "TIF4223", name: "Rekayasa Perangkat Lunak", sks: 3, prerequisite: "Analisis Sistem dan Desain, Algoritma dan Struktur Data" },
        { no: 30, code: "TIF4233", name: "Pemograman Berorientasi Objek", sks: 3, prerequisite: "Dasar Pemrograman, Algoritma dan Struktur Data" },
        { no: 31, code: "TIF4243", name: "Perancangan Web", sks: 3, prerequisite: "Dasar Pemrograman" },
        { no: 32, code: "TIF4413", name: "Basis Data Lanjut", sks: 3, prerequisite: "Basis Data" },
        { no: 33, code: "TIF4421", name: "Praktikum Basis Data Lanjut", sks: 1 },
        { no: 34, code: "TIF4433", name: "Jaringan Komputer 2", sks: 3, prerequisite: "Jaringan Komputer 1" },
        { no: 35, code: "TIF4441", name: "Praktikum Jaringan Komputer 2", sks: 1 },
      ]
    },
    {
      semester: 5,
      sks: 22,
      courses: [
        { no: 36, code: "TIF5213", name: "Kecerdasan Buatan", sks: 3 },
        { no: 37, code: "TIF5222", name: "Grafika Komputer", sks: 2, prerequisite: "Aljabar Linear" },
        { no: 38, code: "TIF5232", name: "Interoperabilitas", sks: 2, prerequisite: "SO, JARKOM, PBO" },
        { no: 39, code: "TIF5413", name: "Sistem Tertanam", sks: 3, prerequisite: "Teknik Elektronika Digital" },
        { no: 40, code: "TIF5421", name: "Praktikum Sistem Tertanam", sks: 1 },
        { no: 41, code: "TIF5433", name: "Keamanan Komputer dan Jaringan", sks: 3, prerequisite: "Jaringan Komputer 1, Sistem Operasi" },
        { no: 42, code: "TIF5442", name: "Jaringan Nirkabel", sks: 2, prerequisite: "Jaringan Komputer 1" },
        { no: 43, code: "TIF5453", name: "Pemograman Web", sks: 3, prerequisite: "Perancangan Web, Basis Data Lanjut" },
        { no: 44, code: "TIF5463", name: "Pemrograman Mobile", sks: 3, prerequisite: "Pemograman Berorientasi Objek" },
      ]
    },
    {
      semester: 6,
      sks: 20,
      courses: [
        { no: 45, code: "TIF6213", name: "Sistem Pendukung Keputusan", sks: 3 },
        { no: 46, code: "TIF6412", name: "Perancangan User Experience (UX)", sks: 2 },
        { no: 47, code: "TIF6423", name: "Pengembangan Aplikasi Mobile", sks: 3, prerequisite: "Pemrograman Mobile" },
        { no: 48, code: "TIF6313", name: "Analisis Proses Bisnis", sks: 3 },
        { no: 49, code: "TIF6223", name: "Interaksi Manusia dan Komputer", sks: 3 },
        { no: 50, code: "TIF6322", name: "E-Commerce", sks: 2 },
        { no: 51, code: "TIF", name: "MK Pilihan", sks: 2 },
        { no: 52, code: "TIF", name: "MK Pilihan", sks: 2 },
      ],
      electives: [
        { no: 1, code: "TIF6432", name: "Sistem Informasi Geografis (SIG)", sks: 2 },
        { no: 2, code: "TIF6442", name: "Manajemen Proyek Perangkat Lunak", sks: 2 },
        { no: 3, code: "TIF6452", name: "Administrasi Sistem Server", sks: 2 },
        { no: 4, code: "TIF6462", name: "Arsitektur Jaringan Terkini", sks: 2 },
      ]
    },
    {
      semester: 7,
      sks: 16,
      courses: [
        { no: 53, code: "TIF7112", name: "Etika Profesi", sks: 2 },
        { no: 54, code: "TIF7212", name: "Pengantar Technopreneurship", sks: 2 },
        { no: 55, code: "TIF7312", name: "Metodologi Riset", sks: 2 },
        { no: 56, code: "TIF7413", name: "Data Warehouse", sks: 3 },
        { no: 57, code: "TIF7222", name: "Pengantar Forensik Teknologi Informasi", sks: 2 },
        { no: 58, code: "TIF", name: "MK Pilihan", sks: 2 },
        { no: 59, code: "TIF", name: "MK Pilihan", sks: 2 },
      ],
      electives: [
        { no: 1, code: "TIF7422", name: "Web Semantik", sks: 2 },
        { no: 2, code: "TIF7432", name: "Administrasi Jaringan", sks: 2 },
        { no: 3, code: "TIF7442", name: "Topik Khusus (RPL)", sks: 2 },
        { no: 4, code: "TIF7452", name: "Topik Khusus (Networking)", sks: 2 },
      ]
    },
    {
      semester: 8,
      sks: 6,
      courses: [
        { no: 60, code: "TIF8312", name: "Kerja Praktek", sks: 2, prerequisite: "100 SKS / Sudah Jalan 6 Semester" },
        { no: 61, code: "TIF8324", name: "Tugas Akhir", sks: 4, prerequisite: "Kerja Praktek, Metodologi Riset" },
      ]
    }
  ];

  const [selectedSemester, setSelectedSemester] = useState(null);

  const filteredData = selectedSemester
    ? data.filter((d) => d.semester === selectedSemester)
    : data;

  return (
    <section id="kurikulum" className="pt-24 p-8 bg-white scroll-mt-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Kurikulum</h1>
        <hr className="mt-4 border-pink-500 w-250 mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {filteredData.map((sem) => (
          <div key={sem.semester} className="border rounded-lg shadow p-6 bg-gray-50">
            <h2 className="text-2xl font-bold font-poppins mb-4 text-gray-800">
              Semester {sem.semester}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="border px-4 py-2 w-[5%] text-left">No</th>
                    <th className="border px-4 py-2 w-[15%] text-left">Kode MK</th>
                    <th className="border px-4 py-2 w-[40%] text-left">Nama Mata Kuliah</th>
                    <th className="border px-4 py-2 w-[6%] text-left">SKS</th>
                    <th className="border px-4 py-2 w-[30%] text-left">Prasyarat</th>
                  </tr>
                </thead>
                <tbody>
                  {sem.courses.map((course) => (
                    <tr key={course.no} className="hover:bg-white text-left">
                      <td className="border px-4 py-2 min-h-[48px]">{course.no}</td>
                      <td className="border px-4 py-2 min-h-[48px]">{course.code}</td>
                      <td className="border px-4 py-2 min-h-[48px]">{course.name}</td>
                      <td className="border px-4 py-2 min-h-[48px] text-center">{course.sks}</td>
                      <td className="border px-4 py-2 min-h-[48px]">{course.prerequisite || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {sem.electives && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold font-poppins mb-2 text-gray-800 text-left">MK Pilihan</h3>

                  <table className="w-full table-fixed border-collapse text-left">
                    <thead>
                      <tr className="bg-pink-200">
                        <th className="border px-4 py-2 w-[5%] text-center">No</th>
                        <th className="border px-4 py-2 w-[15.5%]">Kode MK</th>
                        <th className="border px-4 py-2">Nama Mata Kuliah</th>
                        <th className="border px-4 py-2 w-[6%] text-center">SKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sem.electives.map((elective, index) => (
                        <tr key={index} className="bg-pink-50">
                          <td className="border px-4 py-2 text-center">{elective.no}</td>
                          <td className="border px-4 py-2">{elective.code}</td>
                          <td className="border px-4 py-2">{elective.name}</td>
                          <td className="border px-4 py-2 text-center">{elective.sks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <p className="mt-4 font-medium text-gray-700">Jumlah SKS: {sem.sks}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
