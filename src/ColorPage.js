import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useParams, Link } from 'react-router-dom';
import './ColorPage.css';

function ColorPage() {
	const { color } = useParams();
	const colors = JSON.parse(localStorage.getItem('colors'));
	const colorObj = colors.find((c) => c.name === color);

	return (
		<div className="ColorPage" style={{ backgroundColor: colorObj.value }}>
			<h1>This is {color}</h1>
			<div className="go-back">
				<Link to="/colors">Go Back</Link>
			</div>
		</div>
	);
}

export default ColorPage;
