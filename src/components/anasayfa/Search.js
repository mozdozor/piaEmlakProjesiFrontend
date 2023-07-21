
import React, { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

const Aramacard = () => {

  const [searchParams] = useSearchParams();
  const kullaniciEmail = searchParams.get("kullaniciEmail")

  const [formData, setFormData] = useState({
    saleType: '',
    propertyType: 'daire',
    city: '',
    district: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const data = [
    {
      il: "Hatay",
      plaka: 1,
      ilceleri: [
        "Altınözü",
        "Arsuz",
        "Defne",
        "Dörtyol",
        "Hassa",
        "Antakya",
        "İskenderun",
        "Kırıkhan",
        "Payas",
        "Reyhanlı",
        "Samandağ",
        "Yayladağı",
        "Erzin",
        "Belen",
        "Kumlu"
      ]
    },
    {
      il: "Van",
      plaka: 2,
      ilceleri: [
        "Başkale",
        "Çatak",
        "Erciş",
        "Gevaş",
        "Gürpınar",
        "İpekyolu",
        "Muradiye",
        "Özalp",
        "Tuşba",
        "Bahçesaray",
        "Çaldıran",
        "Edremit",
        "Saray"
      ]
    },
    {
      il: "İstanbul",
      plaka: 3,
      ilceleri: [
        "Adalar",
        "Bakırköy",
        "Beşiktaş",
        "Beykoz",
        "Beyoğlu",
        "Çatalca",
        "Eyüp",
        "Fatih",
        "Gaziosmanpaşa",
        "Kadıköy",
        "Kartal",
        "Sarıyer",
        "Silivri",
        "Şile",
        "Şişli",
        "Üsküdar",
        "Zeytinburnu",
        "Büyükçekmece",
        "Kağıthane",
        "Küçükçekmece",
        "Pendik",
        "Ümraniye",
        "Bayrampaşa",
        "Avcılar",
        "Bağcılar",
        "Bahçelievler",
        "Güngören",
        "Maltepe",
        "Sultanbeyli",
        "Tuzla",
        "Esenler",
        "Arnavutköy",
        "Ataşehir",
        "Başakşehir",
        "Beylikdüzü",
        "Çekmeköy",
        "Esenyurt",
        "Sancaktepe",
        "Sultangazi"
      ]
    },
    {
      il: "İzmir",
      plaka: 4,
      ilceleri: [
        "Aliağa",
      "Bayındır",
      "Bergama",
      "Bornova",
      "Çeşme",
      "Dikili",
      "Foça",
      "Karaburun",
      "Karşıyaka",
      "Kemalpaşa",
      "Kınık",
      "Kiraz",
      "Menemen",
      "Ödemiş",
      "Seferihisar",
      "Selçuk",
      "Tire",
      "Torbalı",
      "Urla",
      "Beydağ",
      "Buca",
      "Konak",
      "Menderes",
      "Balçova",
      "Çiğli",
      "Gaziemir",
      "Narlıdere",
      "Güzelbahçe",
      "Bayraklı",
      "Karabağlar"
      ]
    },
    {
      il: "Kahramanmaraş",
      plaka: 5,
      ilceleri: [
        "Afşin",
      "Andırın",
      "Dulkadiroğlu",
      "Onikişubat",
      "Elbistan",
      "Göksun",
      "Merkez",
      "Pazarcık",
      "Türkoğlu",
      "Çağlayancerit",
      "Ekinözü",
      "Nurhak"
      ]
    },
  ];

  const cities = data.map((item) => item.il);

  const districts = data.find((item) => item.il === formData.city)?.ilceleri || [];

  return (
    <>
      <div className="container mx-auto mt-4 ">
        <div className="bg-white p-4 rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-pink-500">
          <h2 className="text-xl font-bold text-center mb-2 text-white">Hoş Geldiniz</h2>

          <p className="text-center mb-2 text-white">
            <h1>Hayallerinin evini arıyorsan doğru yerdesin!</h1>
          </p>

          {/* Input Alanları ve Select List */}
          <div className="flex flex-wrap justify-center mt-4">
            <div className="md:w-1/4 p-2">
              <label className="block text-sm font-medium text-white">
                Satılık/Kiralık
              </label>
              <select
                name="saleType"
                value={formData.saleType}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 border rounded-md"
              >
                <option value="">Satılık/Kiralık seçin</option>
                <option value="satilik">Satılık</option>
                <option value="kiralik">Kiralık</option>
              </select>
            </div>
            <div className="md:w-1/4 p-2">
              <label className="block text-sm font-medium text-white">
                Daire/İşyeri
              </label>
              <select
                name="saleType"
                value={formData.saleType}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 border rounded-md"
              >
                <option value="">Daire/İşyeri seçin</option>
                <option value="daire">Daire</option>
                <option value="isyeri">İşyeri</option>
              </select>
            </div>

            <div className="md:w-1/4 p-2">
              <label className="block text-sm font-medium text-white">
                İl
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 border rounded-md"
              >
                <option value="">İl seçin</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/4 p-2">
              <label className="block text-sm font-medium text-white">
                İlçe
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 border rounded-md"
                disabled={!formData.city}
              >
                <option value="">İlçe seçin</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2 p-2">
              <NavLink to={`/ilan-listeleme?kullaniciEmail=${kullaniciEmail}`}>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md w-full" >
                Ara
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aramacard;
