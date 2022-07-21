import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import Discover from './components/pages/Discover';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Customize from './components/pages/Customize';
//////
import Standards from './components/pages/Standards';
//////
import Homepage from './components/pages/pc4you';
import Recommendations from './components/pages/Recommendations';


//This for all the browse pages
import Basic from './components/pages/browsecrumbs/Basic';
import Cpus from './components/pages/browsecrumbs/Cpus'; //test one
import Cpu3700x from './components/pages/browsecrumbs/Cpu3700x';//test one
import Enthusiast from './components/pages/browsecrumbs/Enthusiast';
import Pro from './components/pages/browsecrumbs/Pro';
import PlatinumPreset from './components/pages/browsecrumbs/PlatinumPreset';
import SapphairePreset from './components/pages/browsecrumbs/SapphairePreset';
import EmeraldPreset from './components/pages/browsecrumbs/EmeraldPreset';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/browse' element={<Browse />}/>
        <Route path='/discover' element={<Discover />}/>
        <Route path='/standards' element={<Standards />}/>
        <Route path='/recommendations' element={<Recommendations />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/customize' element={<Customize />}/>
        <Route path='/cpus' element={<Cpus />}/>
        <Route path='/cpu3700x' element={<Cpu3700x />}/>       
        <Route path='/pc4you' element={<Homepage />}/>
        
        <Route path='/enthusiast' element={<Enthusiast />}/>
        <Route path='/pro' element={<Pro />}/>
        <Route path='/basic' element={<Basic />}/>

        
        <Route path='/platinumpreset' element={<PlatinumPreset />}/>
        <Route path='/sapphairepreset' element={<SapphairePreset />}/> 
        <Route path='/emeraldpreset' element={<EmeraldPreset />}/>


        </Routes>
      </Router> 
    </>
  );
}

export default App;
