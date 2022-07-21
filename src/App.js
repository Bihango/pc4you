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
import Cpus from './components/pages/browsecrumbs/Cpus'; 
import Enthusiast from './components/pages/browsecrumbs/Enthusiast';
import Pro from './components/pages/browsecrumbs/Pro';
import PlatinumPreset from './components/pages/browsecrumbs/PlatinumPreset';
import SapphairePreset from './components/pages/browsecrumbs/SapphairePreset';
import EmeraldPreset from './components/pages/browsecrumbs/EmeraldPreset';

//cpu

import Cpu3600 from './components/pages/browsecrumbs/productCPU/Cpu3600';
import Cpu5600x from './components/pages/browsecrumbs/productCPU/Cpu5600x';
import Cpu5800x from './components/pages/browsecrumbs/productCPU/Cpu5800x';

//gpus
import Gpus from './components/pages/browsecrumbs/Gpus'; 
import Gpu3080 from './components/pages/browsecrumbs/productGPU/Gpu3080';
import Gpu3070 from './components/pages/browsecrumbs/productGPU/Gpu3070';
import Gpu3060 from './components/pages/browsecrumbs/productGPU/Gpu3060';

//mobos
import Mobos from './components/pages/browsecrumbs/Mobos'; 
import Masus from './components/pages/browsecrumbs/productMobo/Masus';
import Mgiga from './components/pages/browsecrumbs/productMobo/Mgiga';
import Mmsi from './components/pages/browsecrumbs/productMobo/Mmsi';



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
        <Route path='/pc4you' element={<Homepage />}/>
        
        <Route path='/enthusiast' element={<Enthusiast />}/>
        <Route path='/pro' element={<Pro />}/>
        <Route path='/basic' element={<Basic />}/>

        <Route path='/platinumpreset' element={<PlatinumPreset />}/>
        <Route path='/sapphairepreset' element={<SapphairePreset />}/> 
        <Route path='/emeraldpreset' element={<EmeraldPreset />}/>
        
        <Route path='/cpu3600' element={<Cpu3600 />}/>
        <Route path='/cpu5600x' element={<Cpu5600x />}/>
        <Route path='/cpu5800x' element={<Cpu5800x />}/>
        
        
        <Route path='/gpus' element={<Gpus />}/>   
        <Route path='/gpu3080' element={<Gpu3080 />}/>
        <Route path='/gpu3070' element={<Gpu3070 />}/>
        <Route path='/gpu3060' element={<Gpu3060 />}/>

        
        <Route path='/mobos' element={<Mobos />}/>   
        <Route path='/masus' element={<Masus />}/>
        <Route path='/mgiga' element={<Mgiga />}/>
        <Route path='/mmsi' element={<Mmsi />}/>

        </Routes>
      </Router> 
    </>
  );
}

export default App;
