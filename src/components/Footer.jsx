export const Footer = () => {
  const iconPath = "/img/icons/";
  const iconClass = "w-4 h-4";

  return (
    <footer className="bg-[#04396C] text-white pt-10 pb-6 px-4">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {/* Kontak */}
        <div>
          <div className=" flex items-center gap-2 mb-4">
            <img src="/img/icons/itp.png" alt="Logo ITP" className="w-10 h-10" />
            <h2 className="text-lg font-bold">Institut Teknologi Padang</h2>
          </div>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <img src={`${iconPath}map.png`} alt="Map" className={`${iconClass} mt-1`} />
              Kampus I : Jln. Gajah Mada Kandis, Kp. Olo, Kec. Nanggalo, Kota Padang, Sumatera Barat 25143
            </p>
            <p className="flex items-start gap-2">
              <img src={`${iconPath}map.png`} alt="Map" className={`${iconClass} mt-1`} />
              Kampus II : Jln. DPR, Kelurahan Aia Pacah, Kec. Koto Tangah Kota Padang
            </p>
            <p className="flex items-center gap-2">
              <img src={`${iconPath}mail.png`} alt="Mail" className={iconClass} />
              rektorat@itp.ac.id
            </p>
            <p className="flex items-center gap-2">
              <img src={`${iconPath}phone.png`} alt="Phone" className={iconClass} />
              0751-7056202
            </p>
          </div>
        </div>

        {/* Media Sosial */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/img/icons/socials.png" alt="Media Sosial" className="w-10 h-10" />
            <h2 className="text-lg font-bold">Media Sosial</h2>
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={`${iconPath}linkedin.png`} alt="LinkedIn" className={iconClass} />
                Institut Teknologi Padang (ITP)
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={`${iconPath}facebook.png`} alt="Facebook" className={iconClass} />
                Institut Teknologi Padang
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/itppadang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={`${iconPath}instagram.png`} alt="Instagram" className={iconClass} />
                itppadang
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={`${iconPath}youtube.png`} alt="YouTube" className={iconClass} />
                Institut Teknologi Padang
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@itppadang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={`${iconPath}tiktok.png`} alt="TikTok" className={iconClass} />
                @itppadang
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={`${iconPath}whatsapp.png`} alt="WhatsApp" className={iconClass} />
              082286468416 - 082171179396
            </li>
          </ul>
        </div>

        {/* Google Maps */}
        <div>
          <iframe
            title="Lokasi ITP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31914.300299636976!2d100.35769551778183!3d-0.9345969119580504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8a526503fa9%3A0x7485c0496ad30308!2sInstitut%20Teknologi%20Padang!5e0!3m2!1sen!2sus!4v1750185208357!5m2!1sen!2sus"
            width="100%"
            height="235"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="mt-8 border-t border-black/20 pt-4 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start text-sm text-gray-200">
        <a
          href="https://itp.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300"
        >
          2025 - Institut Teknologi Padang
        </a>
      </div>
    </footer>
  );
};
