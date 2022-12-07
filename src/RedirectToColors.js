import React from 'react';
import { Link, Navigate } from 'react-router-dom';

function RedirectToColors() {
	return <Navigate to="/colors" />;
}

export default RedirectToColors;
