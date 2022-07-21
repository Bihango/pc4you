import React from 'react';
const Proc =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Processor</h2>
			<form>
				<label>AMD Ryzen 7 5800X <input name="proc" type="radio" onClick={() => onMotherChange('processor')('5800x')}/>
				</label><br/>
				<label>AMD Ryzen 5 5600X <input name="proc" type="radio" onClick={() => onMotherChange('processor')('5600x')}/>
				</label><br/>
				<label>AMD Ryzen 5 3600 <input name="proc" type="radio" onClick={() => onMotherChange('processor')('3600')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Proc;