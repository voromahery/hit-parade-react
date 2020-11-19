import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header'; 
import SongStyle from './pages/SongStyle';
import AddSong from './pages/AddSong';
import SongsList from './pages/SongsList';

function App() {
    return (
        	<div>
			<Header />
			<h1>Home Page</h1>
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
			</Switch>
		</div>
    )
}

export default App;