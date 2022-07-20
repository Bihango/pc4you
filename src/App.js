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
import Cpus from './components/pages/browsecrumbs/Cpus';
import Standards from './components/pages/Standards';
import Cpu3700x from './components/pages/browsecrumbs/Cpu3700x';
//////
import GpuTest from './components/pages/GpuTest';
import Homepage from './components/pages/pc4you';
import Recommendations from './components/pages/Recommendations';



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
        </Routes>
      </Router> 
    </>
  );
}

export default App;
