//import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes} from "react-router-dom"
import Avaleht from './pages/usestate/Avaleht';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/useref/LisaToode';
import Ostukorv from './pages/arrays/Ostukorv';
import Kinkekaart from './pages/useref/Kinkekaart';
import MitteLeitud from './pages/usestate/MitteLeitud';
// import Menyy from './components/Menyy';
import Seaded from './pages/usestate/Seaded';
import Profiil from './pages/useref/Profiil';
import LogiSisse from './pages/useref/LogiSisse';
import Registreeru from './pages/useref/Registreeru';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksKasutaja from './pages/yks/YksKasutaja';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import Meny from './components/Meny';
import AdminHalda from './pages/halda/AdminHalda';
import Shops from './pages/usestate/Shops';
import {useState} from "react";
import Tarnija from './pages/api/Tarnija';



function App() {
  const [dark, setDark]= useState(localStorage.getItem("tume-leht"));

  const muudaTumedaks = () => {
    setDark("true");
    localStorage.setItem("tume-leht", "true")
  }

  const muudaHeledaks = () => {
    setDark("false");
    localStorage.setItem("tume-leht", "false")
  }
  return (
    <div className={dark === "true" ? "App-dark" : "App"}>

      <Meny/>
      <button onClick={muudaTumedaks}>Dark mode</button>
      <button onClick={muudaHeledaks}>Light mode</button>

  

      <Routes>
      <Route path='' element={<Navigate to="avaleht"/>  }/>
      <Route path='avaleht' element={<Avaleht/>  }/>
      <Route path='kinkekaart' element={ <Kinkekaart/> }/>
      <Route path='esindused' element={ <Esindused/> }/>
      <Route path='lisa-toode' element={ <LisaToode/> }/>
      <Route path='ostukorv' element={ <Ostukorv/> }/>
      <Route path='seaded' element={ <Seaded/> }/>
      <Route path="profiil" element={<Profiil/>}/>
      <Route path="logi-sisse" element={<LogiSisse/>}/>
      <Route path="registreeru" element={<Registreeru/>}/>
      <Route path="hinnad" element={<Hinnad/>}/>
      <Route path='*' element={ <MitteLeitud/> }/>
      <Route path="tootajad" element={<Tootajad/>}/>
      <Route path="tooted" element={<Tooted/>}/>

      <Route path="halda-esindused" element={<HaldaEsindused/>}/>
      <Route path="halda-hinnad" element={<HaldaHinnad/>}/>
      <Route path="halda-tootajad" element={<HaldaTootajad/>}/>
      <Route path="halda-tooted" element={<HaldaTooted/>}/>

      <Route path="esindus/:index" element={<YksEsindus/>}/>
      <Route path="hind/:hinnaIndex" element={<YksHind/>}/>
      <Route path="kasutaja/:nimi" element={<YksKasutaja/>}/>
      <Route path="toode/:index" element={<YksToode/>}/>
      <Route path="tootaja/:index" element={<YksTootaja/>}/>

      <Route path="muuda-esindus/:jrknr" element={<MuudaEsindus/>}/>
      <Route path="muuda-hind/:index" element={<MuudaHind/>}/>
      <Route path="muuda-toode/:index" element={<MuudaToode/>}/>
      <Route path="muuda-tootaja/:index" element={<MuudaTootaja/>}/>

      <Route path="admin" element={<AdminHalda/>}/>
      <Route path="shops" element={<Shops/>}/>
      <Route path="tarnija" element={<Tarnija/>}/>

      </Routes>
    </div> 
  ); 
}

export default App;
