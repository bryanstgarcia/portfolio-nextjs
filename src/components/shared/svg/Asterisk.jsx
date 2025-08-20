export function Asterisk({ color = '#FDFDFD' }) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M23.85 8.55L20.85 3.45L15 6.75V0H9V6.75L3 3.45L0 8.55L5.85 12L0 15.45L3 20.55L9 17.25V24H15V17.25L20.85 20.55L23.85 15.45L17.85 12L23.85 8.55Z'
				fill={color}
			/>
		</svg>
	);
}
