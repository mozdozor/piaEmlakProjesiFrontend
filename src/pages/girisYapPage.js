import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const GirisYap = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);


 

  const handleLogin = async (e) => {
    e.preventDefault();
    // Kullanıcı adının kullaniciAdiListesi içinde var olup olmadığını kontrol et
     await axios.post("http://localhost:8080/api/loginUser", {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data);
        if(!response.data.loginSuccess){
          console.log("giriyor");
            setMessage("Hatalı bilgiler girdiniz")
            
        }else{
          localStorage.setItem("user_id",response.data.user_id);
          localStorage.setItem("name",response.data.name);
          localStorage.setItem("lastName",response.data.lastname);
          localStorage.setItem("email",response.data.email);
          navigate("/")

        }
        
      });

};

return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Giriş Yap
      </h2>

      <form className="mt-4">
        {message ? (
          <div className="ml-24 warning-container">
            <span className="warning-icon">⚠️</span>
            <p className="warning-text">{message}</p>
          </div>
        ) : null}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-posta
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full p-2 border rounded-md"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Şifre
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full p-2 border rounded-md"
            placeholder="Şifrenizi girin"
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Giriş Yap
          </button>
        </div>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        Kayıtlı değilseniz&nbsp;
        <Link to="/kayit-ol" className="text-blue-500 hover:underline">
          Kayıt Olun
        </Link>
      </div>
    </div>
  </div>
);
};

export default GirisYap;
