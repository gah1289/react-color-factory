import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import ColorPage from './ColorPage';
import './Home.css';
import AddColorForm from './AddColorForm';

function Home() {
	const colors = JSON.parse(localStorage.getItem('colors'));

	return (
		<div className="Home">
			<Link to={`colors/add`}>Add Color</Link>
			{colors.map((c) => (
				<Link key={c.name} className="color-link" to={`/colors/${c.name}`}>
					{c.name}
				</Link>
			))}
		</div>
	);
}

export default Home;
