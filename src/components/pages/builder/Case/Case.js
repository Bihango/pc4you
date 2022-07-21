import React from 'react';
const Case =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Case</h2>
			<form>
				<label>NZXT H210 White  <input name="case" type="radio" onClick={() => onMotherChange('case')('white')}/>
				</label><br/>
				<label>NZXT H210 Black <input name="case" type="radio" onClick={() => onMotherChange('case')('black')}/>
				</label><br/>
				<label>NZXT H210 Red <input name="case" type="radio" onClick={() => onMotherChange('case')('red')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Case;