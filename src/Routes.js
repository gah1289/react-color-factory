import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './Home';

import ColorPage from './ColorPage';
import AddColorForm from './AddColorForm';
function MyRoutes() {
	const initialColors = JSON.parse(
		localStorage.getItem('colors') || [
			{ name: 'red', value: 'rgb(255,0,0)' },
			{ name: 'green', value: 'rgb(0,255,0)' },
			{ name: 'blue', value: 'rgb(0,0,255)' }
		]
	);
	const [
		colors,
		setColors
	] = useState([
		...initialColors
	]);

	useEffect(() => localStorage.setItem('colors', JSON.stringify(colors)), [
		colors
	]);

	const addColor = (newColor) => {
		setColors((colors) => [
			...colors,
			newColor
		]);
		localStorage.setItem('colors', JSON.stringify(colors));
	};

	return (
		<Routes>
			<Route path="/colors" exact="true" element={<Home />} />
			<Route path="colors/add" exact="true" element={<AddColorForm addColor={addColor} />} />
			<Route path="colors/:color" exact="true" element={<ColorPage />} />
		</Routes>
	);
}

export default MyRoutes;
