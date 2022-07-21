import React from 'react';
const PS =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Power Supply</h2>
			<form>
				<label>Asus Rog Thor 850w  <input name="ps" type="radio" onClick={() => onMotherChange('power')('asusp')}/>
				</label><br/>
				<label>EVGA SuperNOVA 650w <input name="ps" type="radio" onClick={() => onMotherChange('power')('evgap')}/>
				</label><br/>
				<label>Thermaltake Toughpower 1200w <input name="ps" type="radio" onClick={() => onMotherChange('power')('thermp')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default PS;