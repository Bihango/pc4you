import React from 'react';
const GC =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Graphic Card</h2>
			<form>
				<label>Nvidia GeForce RTX 3080 <input name="gc" type="radio" onClick={() => onMotherChange('gc')('3080')}/>
				</label><br/>
				<label>Gigabyte GeForce RTX 3070 <input name="gc" type="radio" onClick={() => onMotherChange('gc')('3070')}/>
				</label><br/>
				<label>EVGA GeForce RTX 3060 <input name="gc" type="radio" onClick={() => onMotherChange('gc')('3060')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default GC;