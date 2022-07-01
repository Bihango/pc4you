import React, {useState} from 'react';
import Select from 'react-select'
import '../../App.css'

import Gpus from "./data/gpus"
import Processors from "./data/processors"
import PowerSupplys from "./data/powerSupplys"
import Memorys from "./data/memorys"
import Motherboards from "./data/motherboards"
import Storages from "./data/storages"





function GpuTest()
{
    var gpulist = [
        {
            label: "ASUS GeForce GTX1070ti", 
            value: 450
        },
        {
            label: "XFX Radeon RX 580 DirectX",
            value: 500
        },
        {
            label: "MSI Radeon RX XT DirectX",
            value: 850
        },
        {
            label: "ASUS ROG Strix GeForce RTX 3070",
            value: 800
        },
        {
            label: "MSI GeForce RTX 3090 DirectX",
            value: 2180
        },
        {
            label: "ASUS TUF Gaming GeForce RTX 3060 Ti",
            value: 540
        },
        {
            label: "ASRock Radeon RX 6800 Challenger Pro",
            value: 780
        },
        {
            label: "Yeston AMD Radeon RX 560 4G",
            value: 200
        },
        {
            label: "Biostar Gaming Radeon RX 550",
            value: 140
        },
        {
            label: "ASUS GeForce GT 1030",
            value: 112
        },
        {
            label: "PowerColor Radeon HD 6850",
            value: 296
        },
        {
            label: "ASUS GTX770-DC2OC-2GD5 G-SYNC",
            value: 299
        },
        {
            label: "MSI Sapphire Radeon VAPOR-X R9 270X",
            value: 295
        }
    ];

    var cpulist = [
        {label: "AMD Ryzen 3 2200G", value: 175},
        {label: "AMD Ryzen 3 3200G", value: 190},
        {label: "AMD Ryzen 5 3600", value: 200},
        {label: "AMD Ryzen 5 2600X", value: 195},
        {label: "AMD Ryzen 7 2700X", value: 257},
        {label: "AMD Ryzen 7 3700X", value: 368},
        {label: "AMD Ryzen 9 3900X", value: 485},
        {label: "AMD Ryzen 9 3900XT", value: 616},
        {label: "AMD Ryzen 9 3950X", value: 730},
        {label: "Intel i3 10100 Comet Lake", value: 115},
        {label: "Intel i3 10100F Comet Lake", value: 118},
        {label: "Intel i5 6500 Skylake", value: 125},
        {label: "Intel i5 10400 Comet Lake", value: 160},
        {label: "Intel i7 6700K Skylake", value: 271},
        {label: "Intel i7 10700F Comet Lake", value: 283},
        {label: "Intel i7 10700KF", value: 328},
        {label: "Intel i9 9900K Coffee Lake"},
        {label: "Intel i9 9900KF Coffee Lake", value: 409},
        {label: "Intel i9 10900K", value: 510}
    ];
        
    const [gpuresult,gpuUserVal] = useState(gpulist.label);
    const gpuHandler = e =>
    {
        gpuUserVal = (e.label);
    }

    const [cpuresult,cpuUserVal] = useState(cpulist.label);
    const cpuHandler = ec =>
    {
        cpuUserVal = (ec.label);
    }



    return(
        <div>
            <Select options = {gpulist} onChange ={gpuHandler} />
            <Select options = {cpulist} onChange ={cpuHandler} />
            <center>
                <h1>{gpuresult}</h1>
                <h1>I wasnt able to fully complete my implementation yet but here is the mockup</h1>
                <img 
      src="https://i.imgur.com/H5zPv1a.png"
      alt="new"
      />
            </center>
        </div>
    )
}

export default GpuTest;