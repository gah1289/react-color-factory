import React from 'react';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import './Home.css';

function AddColorForm({ addColor }) {
	const navigate = useNavigate();
	const [
		formData,
		setFormData
	] = useState([]);

	const [
		isSubmitted,
		setIsSubmitted
	] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ ...formData });
		setFormData([]);
		navigate('/colors', { replace: true });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Add Color:
				<label htmlFor="name" />
				<input onChange={handleChange} id="name" type="text" name="name" />
				<input onChange={handleChange} id="value" type="color" name="value" />
				<button disabled={!formData.name || !formData.value}>Add Color</button>
			</form>
		</div>
	);
}

export default AddColorForm;
