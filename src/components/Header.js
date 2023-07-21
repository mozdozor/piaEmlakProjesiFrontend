import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useSearchParams ,useNavigate } from "react-router-dom";

const Header = () => {
  const [searchParams] = useSearchParams();
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/")
    
  }
  
  return (
    <>
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}

          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Emlak Logo"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-white text-xl font-bold">Emlaksan.com</div>
            </div>
          </NavLink>

          {/* Slogan */}
          <div className="text-white text-lg">
            {/* <b>EV ARIYORSANIZ DOĞRU YERDESİNİZ.</b> */}
            <b>
              Kimi için sığınabileceği bir ev, kimi için hayallerini
              sığdırabileceği bir cennet!
            </b>
          </div>

          {/* İlan Ver Butonu */}

          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <NavLink to="ilan-ekle">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
                  İlan Ver
                </button>
              </NavLink>
            </div>

            {user_id ? (
              <>
                 <NavLink to={`/profil`}>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
                  Profilim
                </button>
              </NavLink>
              
                <button onClick={logout} className="bg-white text-blue-500 px-4 py-2 rounded-md">
                  Çıkış
                </button>
             
              </>
           
              
            ) :
            
            (
              <NavLink to="/giris-yap">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
                  Giriş Yap
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
