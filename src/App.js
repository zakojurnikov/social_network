import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

function App() {
	return (
		<div className="main-wrapper">
			<Header />
			<Navbar />
			<Content />
		</div>
	);
}

export default App;
