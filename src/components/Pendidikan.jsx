import DataIMG from '../../data'

function Pendidikan() {
  return (
    <section id="pendidikan" className="py-10 font-poppins">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          <div className="md:w-1/2 text-start">
            <h6 className="text-3xl md:text-4xl font-bold mb-4">Pendidikan</h6>
            <p className="text-base leading-relaxed">
              Menuju World Class University 2040, Institut Teknologi Padang (ITP) terus berupaya
              meningkatkan mutu pendidikan, penelitian yang inovatif, dan diseminasi ilmu pengetahuan dan
              teknologi. Sebagai salah satu pelopor penerapan program kurikulum Merdeka Belajar Kampus
              Merdeka (MBKM), ITP juga berkonsentrasi dalam menyiapkan lulusan yang berkompeten di dunia
              kerja serta memiliki wawasan dan skill yang luas untuk menjawab tantangan Revolusi Industri
              4.0 dan Society 5.0.
            </p>
          </div>

          
          <div
            className="w-[350px] h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${DataIMG.Pendidikan})` }}
          />
        </div>
      </div>
    </section>
  )
}

export default Pendidikan
