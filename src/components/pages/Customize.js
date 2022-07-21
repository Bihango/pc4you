import React, {Component} from 'react';
import '../../App.css'
import './Customize.css';
import { Button } from './ButtonC';
import MB from './builder/MBcard/MB';
import RAM from './builder/RAM/RAM';
import Proc from './builder/Processor/Proc';
import SSD from './builder/SSD/SSD';
import GC from './builder/GC/GC';
import PS from './builder/Power/PS';
import Cool from './builder/Cool/Cool';
import Case from './builder/Case/Case';
import Finish from './Finish';


class Customize extends Component{
    constructor(){
        super();
        this.state={
            mother: '',
            ram: '',
            ssd: '',
            gc: '',
            power: '',
            cool: '',
            processor: '',
            case: '',
            route: 0,  
        }
    }

    onMotherChange = (mother) => (value) => {
        this.setState({[mother]: value});
      }

      render() {
        return (
          <div className="App">
          {this.state.route === 0 ?  <div>
            <heading className='f1'>Select Your Desired Components</heading>
            <div className='fl w-50 ma5' id="cabinet">
    
              { this.state.mother === 'msi' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/msib.png')} />
              : this.state.mother === 'giga' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/gigam.png')} />
              : this.state.mother === 'asus' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/asus.png')} />
              : <p></p>
              }
    
              { this.state.ram === 'gsk' ? <img id="ram" alt="" src={require('./builder/RAM/gsk.png')}/>
              : this.state.ram === 'cor' ? <img id="ram" alt="" src={require('./builder/RAM/cor.png')}/>
              : this.state.ram === 'hyp' ? <img id="ram" alt="" src={require('./builder/RAM/hyper.png')}/>
              : <p></p>
              }
    
              { this.state.processor === '5800x' ? <img id="processor" alt="i9" src={require('./builder/Processor/5800x.png')} />
              : this.state.processor === '5600x' ? <img id="processor" alt="i9" src={require('./builder/Processor/5600x.png')} />
              : this.state.processor === '3600' ? <img id="processor" alt="i9" src={require('./builder/Processor/3600.png')} />
              : <p></p>
              }
            
              { this.state.gc === '3080' ? <img id="graphic" alt="" src={require('./builder/GC/3080.png')} />
              : this.state.gc === '3070' ? <img id="graphic" alt="" src={require('./builder/GC/3070.png')} />
              : this.state.gc === '3060' ? <img id="graphic" alt="" src={require('./builder/GC/3060.png')} />
              : <p></p>
              }
              
              { this.state.cool === 'z73' ? <img id="cool" alt="" src={require('./builder/Cool/z73.png')} />
              : this.state.cool === 'z63' ? <img id="cool" alt="" src={require('./builder/Cool/z63.png')} />
              : this.state.cool === '120' ? <img id="cool" alt="" src={require('./builder/Cool/120.png')} />
              : <p></p>
              }
    
              { this.state.ssd === 'mus' ? <img id="ssd" alt="" src={require('./builder/SSD/mus.png')} />
              : this.state.ssd === 'sam' ? <img id="ssd" alt="" src={require('./builder/SSD/sam.png')} />
              : this.state.ssd === 'wd' ? <img id="ssd" alt="" src={require('./builder/SSD/wd.png')} />
              : <p></p>
              }
    
              { this.state.power === 'asusp' ? <img id="power" alt="" src={require('./builder/Power/asusp.png')}/>
              : this.state.power === 'evgap' ? <img id="power" alt="" src={require('./builder/Power/evgap.png')}/>
              : this.state.power === 'thermp' ? <img id="power" alt="" src={require('./builder/Power/thermp.png')}/>
              : <p></p>
              }
    
              { this.state.case === 'white' ? <img id="case" alt="" src={require('./builder/Case/white.png')}/>
              : this.state.case === 'black' ? <img id="case" alt="" src={require('./builder/Case/black.png')}/>
              : this.state.case === 'red' ? <img id="case" alt="" src={require('./builder/Case/red.png')}/>
              : <p></p>
              }
              
    
              
            </div>
            <div >
              <div><h1>    </h1><h1>    </h1> </div> 
              <div id="specs1" style={{display: 'flex', justifyContent:'flex-end'}}>
              <MB onMotherChange={this.onMotherChange}/>
              <h1>    </h1>
              <RAM onMotherChange={this.onMotherChange}/>
              <br/>
              </div>
              <div><h1>    </h1> </div> 
              <div id="specs2" style={{display: 'flex', justifyContent:'flex-end'}}>
              <GC onMotherChange={this.onMotherChange}/>
              <h1>       </h1>
              <Proc onMotherChange={this.onMotherChange}/>
              <br/></div>
              <div><h1>    </h1> </div> 
              <div id="specs3" style={{display: 'flex', justifyContent:'flex-end'}}>
              <SSD onMotherChange={this.onMotherChange}/>
              <h1>          </h1>
              <PS onMotherChange={this.onMotherChange}/>
              <br/></div>
              <div><h1>    </h1> </div> 
              <div id="specs4" style={{display: 'flex', justifyContent:'flex-end'}}>
              <Cool onMotherChange={this.onMotherChange}/>
              <h1>                </h1>
              <Case onMotherChange={this.onMotherChange}/>
              </div>
              <div><h1>    </h1> </div> 
              <div id="specs5" style={{display: 'flex', justifyContent:'flex-end'}}>
              <Button Link to ='/cart' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Checkout</Button>
        
              </div>
    
            </div>
            <br/>
            <div>
              <Finish onMotherChange={this.onMotherChange} />
            </div>
    
            </div>
          : <div id="back" className="fl w-100 center">
            <h1 className='f1'>PC Ready for Checkout</h1> 
            <div id="cabinet2" className="fl w-50">
    
              { this.state.mother === 'msi' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/msib.png')} />
              : this.state.mother === 'giga' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/gigam.png')} />
              : this.state.mother === 'asus' ? <img id="motherboard" alt="MB" src={require('./builder/MBcard/asus.png')} />
              : <p></p>
              }
    
              { this.state.ram === 'gsk' ? <img id="ram" alt="" src={require('./builder/RAM/gsk.png')}/>
              : this.state.ram === 'cor' ? <img id="ram" alt="" src={require('./builder/RAM/cor.png')}/>
              : this.state.ram === 'hyp' ? <img id="ram" alt="" src={require('./builder/RAM/hyper.png')}/>
              : <p></p>
              }
    
              { this.state.processor === '5800x' ? <img id="processor" alt="" src={require('./builder/Processor/5800x.png')} />
              : this.state.processor === '5600x' ? <img id="processor" alt="" src={require('./builder/Processor/5600x.png')} />
              : this.state.processor === '3600' ? <img id="processor" alt="" src={require('./builder/Processor/3600.png')} />
              : <p></p>
              }
    

    
              { this.state.gc === '3080' ? <img id="graphic" alt="" src={require('./builder/GC/3080.png')} />
              : this.state.gc === '3070' ? <img id="graphic" alt="" src={require('./builder/GC/3070.png')} />
              : this.state.gc === '3060' ? <img id="graphic" alt="" src={require('./builder/GC/3060.png')} />
              : <p></p>
              }
              
              { this.state.cool === 'z73' ? <img id="cool" alt="" src={require('./builder/Cool/z73.png')} />
              : this.state.cool === 'z63' ? <img id="cool" alt="" src={require('./builder/Cool/z63.png')} />
              : this.state.cool === '120' ? <img id="cool" alt="" src={require('./builder/Cool/120.png')} />
              : <p></p>
              }
    
              { this.state.ssd === 'mus' ? <img id="ssd" alt="" src={require('./builder/SSD/mus.png')} />
              : this.state.ssd === 'sam' ? <img id="ssd" alt="" src={require('./builder/SSD/sam.png')} />
              : this.state.ssd === 'wd' ? <img id="ssd" alt="" src={require('./builder/SSD/wd.png')} />
              : <p></p>
              }
    
              { this.state.power === 'asusp' ? <img id="power" alt="" src={require('./builder/Power/asusp.png')}/>
              : this.state.power === 'evgap' ? <img id="power" alt="" src={require('./builder/Power/evgap.png')}/>
              : this.state.power === 'thermp' ? <img id="power" alt="" src={require('./builder/Power/thermp.png')}/>
              : <p></p>
              }
              <img id="glass" alt="" src={require('./builder/glass.png')}/>
              { this.state.case === 'white' ? <img id="case2" alt="" src={require('./builder/Case/white.png')}/>
              : this.state.case === 'black' ? <img id="case2" alt="" src={require('./builder/Case/black.png')}/>
              : this.state.case === 'red' ? <img id="case2" alt="" src={require('./builder/Case/red.png')}/>
              : <p></p>
              }
            </div>
          </div>
          }
          </div>
    
        );
      }

}

export default Customize;


