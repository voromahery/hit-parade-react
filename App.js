import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SongStyle from './pages/SongStyle';
import AddSong from './pages/AddSong';
import SongsList from './pages/SongsList';
import CartSong from './pages/CartSong';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<SongsList />
				</Route>
				<Route path="/style">
					<SongStyle />
				</Route>
				<Route path="/add">
					<AddSong />
				</Route>
				<Route path="/cart">
					<CartSong />
				</Route>
			</Switch>
		</div>
	)
}

export default App;