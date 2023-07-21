import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/anasayfaPage';
import Footer from './components/Footer';
import Detay  from './pages/ilanDetayPage';
import IlanEkle from './pages/ilanEklemePage';
import Profil from './pages/profilPage';
import GirisYap from './pages/girisYapPage';
import KayitOl from './pages/kayitOlPage';
import Liste from './pages/ilanListelemePage';



function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">

      <BrowserRouter>
       <Header/>
        <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/anasayfa" element={<Home/>} exact/>
              <Route path="/ilan-ekle" element={<IlanEkle/>} exact/>
              <Route path="/ilan-detay" element={<Detay/>} exact/>
              <Route path="/profil" element={<Profil/>} exact/>
              <Route path="/giris-yap" element={<GirisYap/>} exact/>
              <Route path="/kayit-ol" element={<KayitOl/>} exact/>
              <Route path="/ilan-listeleme" element={<Liste/>} exact/>
        </Routes> 
        <Footer/>
        </BrowserRouter>                  

     


    </div>
  );
}

export default App;
