import './Paragraph.css';

function Paragraph({ children, size }) {
	let paragraphClass = 'paragraph';
	if (size) {
		paragraphClass = `${paragraphClass} ${paragraphClass}-${size}`;
	}
	return (
		<p className={paragraphClass}>
			{children}
		</p>
	);
}

export default Paragraph;
