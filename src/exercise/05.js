// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

function Box({size, style, className = '', children = ''}) {
	const sizeClassName = size ? `box--${size}` : ``;
  
	return (
		<div
			className={`box ${sizeClassName} ${className}`}
			style={{fontStyle: 'italic', ...style}}
		>{children}</div>
	);
}

function App() {
	return (
		<div>
			<Box size='small' style={{backgroundColor: 'lightblue'}}>
				small lightblue box
			</Box>
			<Box size='medium' style={{backgroundColor: 'pink'}}>
				medium pink box
			</Box>
			<Box size='large' style={{backgroundColor: 'orange'}}>
				large orange box
			</Box>
			<Box>sizeless box</Box>
		</div>
	);
}

export default App;
