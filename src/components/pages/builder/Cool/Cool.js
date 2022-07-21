import React from 'react';
const Cool =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Cooling</h2>
			<form>
				<label>NZXT Kraken Z73 <input name="cool" type="radio" onClick={() => onMotherChange('cool')('z73')}/>
				</label><br/>
				<label>NZXT Kraken Z63 <input name="cool" type="radio" onClick={() => onMotherChange('cool')('z63')}/>
				</label><br/>
				<label>NZXT 120 <input name="cool" type="radio" onClick={() => onMotherChange('cool')('120')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Cool;