import './Input.css';

function Input({ placeholder, icon, onChange }) {

	const iconsUrl = {
		search: './search.svg'
	};
	if (iconsUrl[icon]) {
		return (
			<div className='input input-with-icon'>
				<img src={iconsUrl[icon]} alt='icon' className='icon' />
				<input type='text' placeholder={placeholder} />
			</div>
		);
	}
	return (
		<div className='input'>
			<input type='text' placeholder={placeholder} onChange={onChange} />
		</div>
	);
}

export default Input;
