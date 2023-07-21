// import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IlanEkle = () => {

  const navigate = useNavigate();

  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileBir, setSelectedFileBir] = useState(null);
  const [selectedFileIki, setSelectedFileIki] = useState(null);

  const handleDosyaSec = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleDosyaSec1 = (e) => {
    setSelectedFileBir(e.target.files[0]);
  };
  const handleDosyaSec2 = (e) => {
    setSelectedFileIki(e.target.files[0]);
  };

 
  







  const handleYayinla = () => {
    // Kullanıcı bilgilerini kontrol et
    if (!ad || !soyad || !telefon || !email) {
      setIsOpen(true);
      return
    } else {
      // İlanı yayınla işlemleri burada yapılabilir
      navigate('/anasayfa');
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
            <span className="close ml-5" onClick={closeModal}><b>X</b></span>
            
            <p className='mt-5' style={{color:"#eb1809"}}>⚠️ Lütfen tüm alanları doldurun!</p>
          </div>
        </div>
      )}
    </div>


      <div className="bg-white p-4 rounded-lg shadow-lg">

        <div className="">
          İlan veren bilgileri


          {/* Input Alanları ve Select List */}
          <div className="flex space-x-4">


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
            <input
              type="text"
              className="w-1/4 p-2 border rounded-md"
              placeholder="Telefon"
              value={telefon}
              onChange={(e) =>
                setTelefon(
                  e.target.value
                )
              }
            />
            <input
              type="text"
              className="w-1/4 p-2 border rounded-md"
              placeholder="E-posta"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />
          </div>
          {/* İlan türü ve mülk türü seçim listeleri */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="ilanTur">İlan Türü:</label>
              <select
                id="ilanTur"
                className="block w-full p-2 border rounded-md mt-2"
              >
                <option value="satilik">Satılık</option>
                <option value="kiralik">Kiralık</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="mulkTur">Mülk Türü:</label>
              <select
                id="mulkTur"
                className="block w-full p-2 border rounded-md mt-2"
              >
                <option value="daire">Daire</option>
                <option value="isyeri">İşyeri</option>

              </select>
            </div>
          </div>
          {/* İlan başlığı */}
          <div className="mt-4">
            <label htmlFor="ilanBaslik">İlan Başlığı:</label>
            <input
              type="text"
              id="ilanBaslik"
              className="w-full p-2 border rounded-md mt-2"
              placeholder="İlan Başlığı"
            />
          </div>

          {/* İlan açıklaması */}
          <div className="mt-4">
            <label htmlFor="ilanAciklama">İlan Açıklaması:</label>
            <textarea
              id="ilanAciklama"
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
                    style={{ minWidth: '120px' }} // Set a minimum width to ensure button size consistency
                  >
                    {selectedFile ? `Dosya Seçildi: ${selectedFile.name}` : 'Resim Seç'}
                    <input
                      type="file"
                      className="hidden w-full mt-2"
                      onChange={handleDosyaSec}
                      accept="image/*" // Accept only image files
                    />
                  </label>

                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">


                  <label
                    className={`flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer`}
                    style={{ minWidth: '120px' }} // Set a minimum width to ensure button size consistency
                  >
                    {selectedFileBir ? `Dosya Seçildi: ${selectedFileBir.name}` : 'Resim Seç'}
                    <input
                      type="file"
                      className="hidden w-full mt-2"
                      onChange={handleDosyaSec1}
                      accept="image/*" // Accept only image files
                    />
                  </label>

                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg">


                  <label
                    className={`flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer`}
                    style={{ minWidth: '120px' }} // Set a minimum width to ensure button size consistency
                  >
                    {selectedFileIki ? `Dosya Seçildi: ${selectedFileIki.name}` : 'Resim Seç'}
                    <input
                      type="file"
                      className="hidden w-full mt-2"
                      onChange={handleDosyaSec2}
                      accept="image/*" // Accept only image files
                    />
                  </label>

                </div>


                <div className='mt-2'> <label >
                  <b className='font-weight-bold p-10'>Dosya Yüklemek İçin Tıklayın</b>

                </label></div>
              </div>

            </div>
          </div>
          {/* Fiyat ve Metrekare */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="fiyat">Fiyat (TL):</label>
              <input
                type="number"
                id="fiyat"
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Fiyat"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="metrekare">Metrekare (m²):</label>
              <input
                type="number"
                id="metrekare"
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Metrekare"
              />
            </div>
          </div>
          {/* İl ve İlçe seçim listeleri */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="il">İl:</label>
              <select id="il" className="block w-full p-2 border rounded-md mt-2">
                {/* İl seçenekleri buraya gelecek */}
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="ilce">İlçe:</label>
              <select id="ilce" className="block w-full p-2 border rounded-md mt-2">
                <option value="kadikoy">Kadıköy</option>
                <option value="beyoglu">Beyoğlu</option>
                <option value="cankaya">Çankaya</option>
              </select>
            </div>
          </div>
          {/* Kat ve Oda Sayısı */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="kat">Kat:</label>
              <input
                type="number"
                id="kat"
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Kat"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="odaSayisi">Oda Sayısı:</label>
              <input
                type="number"
                id="odaSayisi"
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Oda Sayısı"
              />
            </div>
          </div>
          {/* Isıtma Durumu ve Eşya Durumu */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="isitmaDurumu">Isıtma Durumu:</label>
              <select
                id="isitmaDurumu"
                className="block w-full p-2 border rounded-md mt-2"
              >
                <option value="dogalgaz">Doğalgaz</option>
                <option value="soba">Soba</option>
                <option value="klima">Klima</option>
                <option value="kalorifer">Kalorifer</option>
                <option value="merkezi">Merkezi Sistem</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="esyaDurumu">Eşya Durumu:</label>
              <select
                id="esyaDurumu"
                className="block w-full p-2 border rounded-md mt-2"
              >
                <option value="esyalı">Eşyalı</option>
                <option value="esyasiz">Eşyasız</option>
              </select>
            </div>
          </div>
          {/* İlanı Yayınla butonu */}

          <div className="flex justify-center items-center ">
            <button className=" flex items-center p-2 mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
              onClick={handleYayinla}
            >
              <FaCloudUploadAlt className="ml-60 mr-2" /> YAYINLA
            </button>
          </div>

        </div>
      </div>
    </div>


  );
};

export default IlanEkle;
