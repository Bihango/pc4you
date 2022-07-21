import React from 'react';
const SSD =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Storage</h2>
			<form>
				<label>Samsung 970 Evo 1TB  <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('sam')}/>
				</label><br/>
				<label>WD Black SN750 500GB <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('wd')}/>
				</label><br/>
				<label>Cruial P2 1TB <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('mus')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default SSD;