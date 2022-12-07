import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Home.css';

function Home() {
	const colors = JSON.parse(localStorage.getItem('colors'));

	return (
		<div className="Home">
			<Link to={`/colors/add`}>Add Color</Link>
			{colors.map((c) => (
				<Link key={c.name} className="color-link" to={`/colors/${c.name}`}>
					{c.name}
				</Link>
			))}
		</div>
	);
}

export default Home;
