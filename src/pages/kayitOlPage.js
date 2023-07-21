import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

const KayitOl = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    phone: '',
  });

  const [message, setMessage] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/saveUser", formData)
      .then((response) => {
        console.log(response.data);
        if (!response.data.isSuccess) {
          console.log("hatalı");
          setMessage("Kayıt Başarısız");

        } else {
          console.log("başarılı");
          setMessage("Kayıt Başarılı");
          setFormData({
            email: '',
            password: '',
            name: '',
            lastName: '',
            phone: '',
          })

        }

      });


    // Burada formun gönderilme işlemlerini gerçekleştirebilirsiniz
    // formData içindeki bilgileri bir sunucuya göndererek yeni hesap oluşturabilirsiniz
    console.log('Form Gönderildi:', formData);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 message-div-register">
      {

        message ? (
          <div className="ml-24 warning-container register-message" >
            <span className="warning-icon"></span>
            <p className="warning-text">{message}</p>
          </div>
        ) : null}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kayıt Ol
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              İsim
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                value={formData.name}
                placeholder="İsminizi girin"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-900"
            >
              Soyisim
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                placeholder="Soyisminizi girin"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Telefon
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                placeholder="Telefon numarası girin"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mevcut e-posta inputu */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              E-posta Adresi
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                placeholder="E-posta adresinizi girin"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Şifre
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                placeholder="Şifre girin"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>



          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Zaten bir hesabınız var mı?{' '}
        <NavLink
          to="/giris-yap"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Giriş Yapın
        </NavLink>
      </p>
    </div>
  );
};

export default KayitOl;
