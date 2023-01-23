import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Europa from '../Destinations/Europa';
import Mars from '../Destinations/Mars';
import Moon from '../Destinations/Moon';
import Titan from '../Destinations/Titan';
import NoMatch404 from './NoMatch404';

const Destination = () => {
	return (
		<div>
			<h2>Destination</h2>
			<Routes>
				<Route exact path="/Moon" element={<Moon />} />
				<Route path="/Mars" element={<Mars />} />
				<Route path="/Europa" element={<Europa />} />
				<Route path="/Titan" element={<Titan />} />
				<Route path="*" element={<NoMatch404 />} />
			</Routes>

		</div>
	)
}

export default Destination;