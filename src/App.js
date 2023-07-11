/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Algorithms from './categories/ps/Algorithms';
import BOJ from './categories/ps/BOJ';
import Codeforces from './categories/ps/Codeforces';
import Contests from './categories/ps/Contests';
import Game from './categories/programming/Game';
import Web from './categories/programming/Web';
import NS from './categories/games/NS';
import Steam from './categories/games/Steam';
import Chess from './categories/games/Chess';
import Cybersecurity from './categories/cybersecurity/Cybersecurity';
import BR from './categories/Books/BR';


const boj = "https://www.acmicpc.net/user/ramzxc";
const github = "https://github.com/ramzxc";
const solved = "https://solved.ac/profile/ramzxc";

function App() {
    return (
		<div className="App">
			<header className='header'>
				<Link exact to="/" className='ramzxc'><a className='star'>*</a>ramzxc</Link>
			</header>
			<nav>
				<ul className='nav'>
					<li className='navItem'><img src='/img/boj.png' style={{width: '30px', height: '30px'}}/><a className='nava' href={boj}>&nbsp;BOJ&nbsp;</a></li>
					<li className='navItem'><img src='/img/ac.png' style={{width: '30px', height: '18px'}}/><a className='nava' href={solved}>&nbsp;solved.ac&nbsp;</a></li>
					<li className='navItem'><img src='/img/github.png' style={{width: '30px'}}/><a className='nava' href={github}>&nbsp;Github&nbsp;</a></li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/ps/algorithms" element={<Algorithms />}/>
					<Route path='/ps/boj' element={<BOJ />}/>
					<Route path='/ps/codeforces' element={<Codeforces />}/>
					<Route path='/ps/contests' element={<Contests />}/>
					<Route path='/cybersecurity' element={<Cybersecurity />}/>
					<Route path="/programming/web" element={<Web />}/>
					<Route path='/programming/game' element={<Game />}/>
					<Route path='/games/chess' element={<Chess />}/>
					<Route path='/games/steam' element={<Steam />}/>
					<Route path='/games/ns' element={<NS />}/>
					<Route path="/br" element={<BR />}/>
				</Routes>
				<Routes>
					<Route path="/" element={<Sidebar />}/>
					<Route path="/ps/algorithms" element={<Sidebar />}/>
					<Route path="/ps/boj" element={<Sidebar />}/>
					<Route path="/ps/codeforces" element={<Sidebar />}/>
					<Route path="/ps/contests" element={<Sidebar />}/>
					<Route path="/cybersecurity" element={<Sidebar />}/>
					<Route path="/programming/web" element={<Sidebar />}/>
					<Route path="/programming/game" element={<Sidebar />}/>
					<Route path="/games/chess" element={<Sidebar />}/>
					<Route path="/games/steam" element={<Sidebar />}/>
					<Route path="/games/ns" element={<Sidebar />}/>
					<Route path="/br" element={<Sidebar />}/>
				</Routes>
			</section>
			<Routes>
			</Routes>
		</div>
    );
}


export default App;
