import './Paragraph.css';

function Paragraph({ children, size }) {
	let paragraphClass = size?`paragraph paragraph-${size}`: 'paragraph' ;
	return (
		<p className={paragraphClass}>
			{children}
		</p>
	);
}

export default Paragraph;
