import DataIMG from '../../data'

function Pengabdian() {
  return (
    <section id="pengabdian" className="py-10 font-poppins">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          <div className="md:w-1/2 text-start">
            <h6 className="text-3xl md:text-4xl font-bold mb-4">Pengabdian Masyarakat</h6>
            <p className="text-base leading-relaxed">
              Mengabdi kepada masyarakat adalah hilirisasi dari penerapan pendidikan dan penelitian
              yang dilakukan oleh Institut Teknologi Padang (ITP). Mahasiswa dan civitas akademika
              ITP melaksanakan pengabdian dengan mengunjungi langsung lokasi dan memberikan inovasi
              sesuai kebutuhan daerah tersebut. Teknologi Tepat Guna (TTG) yang diciptakan oleh ITP
              menjadi bukti nyata dari penerapan Tri Dharma perguruan tinggi.
            </p>
          </div>

         
          <div
            className="w-[350px] h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${DataIMG.Masyarakat})` }}
          />
        </div>
      </div>
    </section>
  )
}

export default Pengabdian
