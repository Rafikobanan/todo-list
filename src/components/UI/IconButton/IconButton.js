import React from 'react';

function IconButton({className, icon, onClick}) {
	return (
		<svg onClick={onClick} className={className}>
			<use xlinkHref={`#${icon}`}/>
		</svg>
	);
}

export default IconButton;