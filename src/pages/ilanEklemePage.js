// import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IlanEkle = () => {

  const [message, setMessage] = useState("");


  // const [estateType, setestateType] = useState("");
  // const [advertisementType, setadvertisementType] = useState("");
  // const [title, settitle] = useState("");
  // const [aciklama, setAciklama] = useState("");
  // // const [telefon, setTelefon] = useState("");
  // // const [email, setEmail] = useState("");

  // const [selectedFile, setSelectedFile] = useState(null);
  // const [selectedFileBir, setSelectedFileBir] = useState(null);
  // const [selectedFileIki, setSelectedFileIki] = useState(null);

  // const [price, setprice] = useState("");
  // const [size, setSize] = useState("");
  // const [kat, setKat] = useState("");
  // const [oda, setOda] = useState("");
  // const [heatingType, setHeatingType] = useState("");
  // const [esyaType, setEsyaType] = useState("");


  const [formData, setFormData] = useState({
    city: "",
    state: "",
    estateType: "",
    advertisementType: "",
    title: "",
    advContent: "",
    firstImagePath: "",
    secondImagePath: "",
    thirdImagePath: "",
    price: "",
    size: "",
    floor: "",
    room: "",
    heatingType: "",
    isFurniture: "",
    user_id: ""


  });

  useEffect(() => {
    if(!localStorage.getItem("user_id")){

      navigate("/giris-yap")
      
    }

  },[])


  const handleChange = (e) => {
    var { name, value, type } = e.target;
    console.log(name, value, type, "değerler");


    if (type === "file") {
      // const fileName = e.target.files[0]?.name || '';
      // console.log("Seçilen dosya adı:", fileName);
      const dosya = e.target.files[0];
      const dosyaYolu = URL.createObjectURL(dosya);
      const dosyaAdiUzantisi = dosya.name;
      let value = dosyaAdiUzantisi.replace(/^.*[\\\/]/, '');
      console.log("Dosya Adı:", value);


    } else {


      // Diğer giriş alanları için işlemler devam eder...

    }

    setFormData({
      ...formData,
      [name]: value,
      user_id: localStorage.getItem("user_id"),
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
        "Kumlu",
      ],
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
        "Saray",
      ],
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
        "Sultangazi",
      ],
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
        "Karabağlar",
      ],
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
        "Nurhak",
      ],
    },
  ];

  const cities = data.map((item) => item.il);

  const districts =
    data.find((item) => item.il === formData.city)?.ilceleri || [];

  const navigate = useNavigate();





  // const handleDosyaSec = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };
  // const handleDosyaSec1 = (e) => {
  //   setSelectedFileBir(e.target.files[0]);
  // };
  // const handleDosyaSec2 = (e) => {
  //   setSelectedFileIki(e.target.files[0]);
  // };setMessagemessag


  const handleSubmit = async () => {


    await axios.post("http://localhost:8080/api/saveAdvertisement", formData)
      .then((response) => {
        console.log(response.data);

        console.log("başarılı");
        setMessage("İlan Ekleme Başarılı");
        setFormData({
          city: "",
          state: "",
          estateType: "",
          advertisementType: "",
          title: "",
          advContent: "",
          firstImagePath: "",
          secondImagePath: "",
          thirdImagePath: "",
          price: "",
          size: "",
          floor: "",
          room: "",
          heatingType: "",
          isFurniture: "",
          user_id: ""
        })

      }

      );


    // Burada formun gönderilme işlemlerini gerçekleştirebilirsiniz
    // formData içindeki bilgileri bir sunucuya göndererek yeni hesap oluşturabilirsiniz
    console.log('Form Gönderildi:', formData);
  };



  const handleYayinla = () => {
    console.log(localStorage.getItem("user_id"), "user_id");
    setFormData({
      ...formData,
      user_id: localStorage.getItem("user_id"),
    });
    // Kullanıcı bilgilerini kontrol et
    if (!formData.advertisementType || !formData.estateType || !formData.title || !formData.price) {
      setIsOpen(true);
      console.log(formData, "formdata");


    } else {
      // İlanı yayınla işlemleri burada yapılabilir
      console.log(formData, "formdata");
      handleSubmit();

      // navigate("/ilan-detay");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="container mx-auto mt-4">
      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close ml-5" onClick={closeModal}>
                <b>X</b>
              </span>

              <p className="mt-5" style={{ color: "#eb1809" }}>
                ⚠️ Lütfen tüm alanları doldurun!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* <div className="bg-white p-4 rounded-lg shadow-lg">

        <div className="">
          İlan veren bilgileri */}

      {/* Input Alanları ve Select List */}
      {/* <div className="flex space-x-4">


            <input
              type="text"
              className="w-1/4 p-2 border rounded-md"
              placeholder="Adınız"
              name='ad'
              value={ad}
              onChange={(e) =>
                setAd(
                  e.target.value
                )
              }
              required
            />
            <input
              type="text"
              className="w-1/4 p-2 border rounded-md"
              placeholder="Soyadınız"
              value={soyad}
              onChange={(e) =>
                setSoyad(
                  e.target.value
                )
              }
            />
            
           
          </div> */}
      {/* İlan türü ve mülk türü seçim listeleri */}

      <div className="message-div-register">

        {

          message ? (
            <div className="ml-24 warning-container register-message" >
              <span className="warning-icon"></span>
              <p className="warning-text">{message}</p>
            </div>
          ) : null}

      </div>


      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="advertisementType">İlan Türü:</label>
          <select
            id="advertisementType"
            name="advertisementType"
            className="block w-full p-2 border rounded-md mt-2"
            value={formData.advertisementType}
            onChange={handleChange}
          >
            <option value="satilik">Satılık</option>
            <option value="kiralik">Kiralık</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="estateType">Mülk Türü:</label>
          <select
            id="estateType"
            name="estateType"
            className="block w-full p-2 border rounded-md mt-2"
            value={formData.estateType}
            onChange={handleChange}
          >
            <option value="daire">Daire</option>
            <option value="isyeri">İşyeri</option>
          </select>
        </div>
      </div>
      {/* İlan başlığı */}
      {/* <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <input
            type="text"
            className="block w-full p-2 border rounded-md mt-2"
            placeholder="Telefon"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            className="block w-full p-2 border rounded-md mt-2"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div> */}
      <div className="mt-4">
        <label htmlFor="title">İlan Başlığı:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full p-2 border rounded-md mt-2"
          placeholder="İlan Başlığı"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* İlan açıklaması */}
      <div className="mt-4">
        <label htmlFor="advContent">İlan Açıklaması:</label>
        <textarea
          onChange={handleChange}
          name="advContent"
          value={formData.advContent}
          id="advContent"
          className="w-full p-2 border rounded-md mt-2"
          rows="4"
          placeholder="İlan Açıklaması"
        ></textarea>
      </div>
      {/* Dosya yükleme alanları */}
      <div className="flex space-x-4 mt-4">
        <div className="my-4">
          {/* Dosya yükle butonu */}

          <div class="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <label
                className={`flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer`}
                style={{ minWidth: "120px" }} // Set a minimum width to ensure button size consistency
              >
                {formData.firstImagePath
                  ? `Dosya Seçildi: ${formData.firstImagePath.name}`
                  : "Resim Seç"}
                <input
                  type="file"
                  name="firstImagePath"
                  value={formData.firstImagePath}
                  className="hidden w-full mt-2"
                  onChange={handleChange}
                  accept="image/*" // Accept only image files
                />
              </label>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <label
                className={`flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer`}
                style={{ minWidth: "120px" }} // Set a minimum width to ensure button size consistency
              >
                {formData.secondImagePath
                  ? `Dosya Seçildi: ${formData.secondImagePath.name}`
                  : "Resim Seç"}
                <input
                  name="secondImagePath"
                  value={formData.secondImagePath}
                  type="file"
                  className="hidden w-full mt-2"
                  onChange={handleChange}
                  accept="image/*" // Accept only image files
                />
              </label>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <label
                className={`flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer`}
                style={{ minWidth: "120px" }} // Set a minimum width to ensure button size consistency
              >
                {formData.thirdImagePath
                  ? `Dosya Seçildi: ${formData.thirdImagePath.name}`
                  : "Resim Seç"}
                <input
                  name="thirdImagePath"
                  value={formData.thirdImagePath}
                  type="file"
                  className="hidden w-full mt-2"
                  onChange={handleChange}
                  accept="image/*" // Accept only image files
                />
              </label>
            </div>

            <div className="mt-2">
              {" "}
              <label>
                <b className="font-weight-bold p-10">
                  İlanınızın Fotoğraflarını Yükleyiniz.
                </b>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* price ve size */}
      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="price">price (TL):</label>
          <input
            name="price"
            type="number"
            id="price"
            className="w-full p-2 border rounded-md mt-2"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="size">size (m²):</label>
          <input
            name="size"
            value={formData.size}
            onChange={handleChange}
            type="number"
            id="size"
            className="w-full p-2 border rounded-md mt-2"
            placeholder="size"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">İl</label>
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

      <div>
        <label className="block text-sm font-medium text-white">İlçe</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="form-select mt-1 block w-full p-2 border rounded-md"
          disabled={!formData.city}
        >
          <option value="">İlçe seçin</option>
          {districts.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Kat ve Oda Sayısı */}
      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="floor">Kat:</label>
          <select id="floor" className="block w-full p-2 border rounded-md mt-2" name="floor" value={formData.floor} onChange={handleChange}>

            <option value="bodrum">Bodrum Kat</option>
            <option value="zemin">Zemin Kat</option>
            <option value="bahce">Bahçe Kat</option>
            <option value="giris">Giriş Kat</option>
            <option value="1">1.Kat</option>
            <option value="2">2.Kat</option>
            <option value="3">3.Kat</option>
            <option value="4">4.Kat</option>
            <option value="5">5.Kat</option>
            <option value="6">6.Kat</option>
            <option value="7">7.Kat</option>
            <option value="8">8.Kat</option>
            <option value="9">9.Kat</option>
            <option value="10ustu">10 ve Üstü</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="room">Oda Sayısı:</label>
          <select
            name="room"
            value={formData.room}
            id="room"
            className="block w-full p-2 border rounded-md mt-2"
            onChange={handleChange}
          >
            <option value="10">1+0</option>
            <option value="11">1+1</option>
            <option value="21">2+1</option>
            <option value="31">3+1</option>
          </select>
        </div>
      </div>
      {/* Isıtma Durumu ve Eşya Durumu */}
      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="heatingType">Isıtma Durumu:</label>
          <select
            name="heatingType"
            value={formData.heatingType}
            onChange={handleChange}
            id="heatingType"
            className="block w-full p-2 border rounded-md mt-2"
          >
            <option value="dogalgaz">Doğalgaz</option>
            <option value="klima">Klima</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="isFurniture">Eşya Durumu:</label>
          <select
            name="isFurniture"
            value={formData.isFurniture}
            onChange={handleChange}
            id="isFurniture"
            className="block w-full p-2 border rounded-md mt-2"
          >
            <option value="true">Eşyalı</option>
            <option value="false">Eşyasız</option>
          </select>
        </div>
      </div>
      {/* İlanı Yayınla butonu */}

      <div className="flex justify-center items-center ">
        <button
          className=" flex items-center p-2 mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
          onClick={handleYayinla}
        >
          <FaCloudUploadAlt className="ml-60 mr-2" /> YAYINLA
        </button>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default IlanEkle;
