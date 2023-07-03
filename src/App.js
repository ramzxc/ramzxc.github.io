/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Algorithms from './categories/ps/Algorithms';
import BOJ from './categories/ps/BOJ';
import Codeforces from './categories/ps/Codeforces';
import Contests from './categories/ps/Contests';
import Game from './categories/programming/Game';
import Web from './categories/programming/Web';
import NS from 'categories/games/NS';
import Steam from 'categories/games/Steam';
import Chess from 'categories/games/Chess';
import Cybersecurity from 'categories/cybersecurity/Cybersecurity';


const boj = "https://www.acmicpc.net/user/ramzxc";
const github = "https://github.com/ramzxc";
const solved = "https://solved.ac/profile/ramzxc";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
				<header className='header'>
					<div className="ramzxc">
						<a className='star'>*</a>
						{/* <img className='logo' alt='logo' src='img/logo.png'/> */}
						<Link exact to="/" >ramzxc</Link>
					</div>
				</header>
				<nav>
					<ul className='nav'>
						<li className='navItem'><a href={boj}>BOJ</a></li>
						<li className='navItem'><a href={solved}>solved.ac</a></li>
						<li className='navItem'><a href={github}>Github</a></li>
					</ul>
				</nav>
				<section>
					<Routes>
						<Route path="/" element={<Main />}/>
						<Route path="/ps/algorithms" element={<Algorithms />}/>
						<Route path='/ps/boj' element={<BOJ />}/>
						<Route path="/programming/web" element={<Web />}/>
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
					</Routes>
				</section>
				<Routes>
				</Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
