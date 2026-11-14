export default function Navbar({ active, setActive }) {
  const navItems = [
    { id: 'tentang', label: 'Tentang Informatika' },
    { id: 'visi-misi', label: 'Visi dan Misi' },
    { id: 'akreditasi', label: 'Akreditasi' },
    { id: 'profil-kelulusan', label: 'Profil Kelulusan' },
    { id: 'kurikulum', label: 'Kurikulum' },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer ${active === item.id ? 'font-bold underline' : ''}`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
