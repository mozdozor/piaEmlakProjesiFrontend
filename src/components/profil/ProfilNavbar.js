import React from "react";
import { NavLink } from "react-router-dom";

const ProfilNavbar = () => {
  // Burada kullanıcı bilgilerini alabilirsiniz
  // Örnek olarak varsayılan bilgiler:
  const kullaniciAdi = "Joni bravo";
  const kullaniciEmail = "çekicibravo@çekici.çek";

  return (
    <>
      <hr />
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto grid grid-cols-2 items-center justify-between">
          {/* Kullanıcı bilgileri */}
          <div className="text-white text-xl font-bold">
            {localStorage.getItem("name") } {localStorage.getItem("lastName")} - {localStorage.getItem("email")}
          </div>
          {/* Navbar bağlantıları */}
          <ul className="flex space-x-4 text-white justify-self-end">
            <li>
              <NavLink
                to="/anasayfa"
                activeClassName="font-bold"
                className="px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-100"
              >
                Anasayfa
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ProfilNavbar;