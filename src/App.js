/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


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
						<li className='navItem'><div onClick={()=>{window.open(boj)}}>BOJ</div></li>
						<li className='navItem'><div onClick={()=>{window.open(solved)}}>solved.ac</div></li>
						<li className='navItem'><div onClick={()=>{window.open(github)}}>Github</div></li>
					</ul>
				</nav>
				<section>
					<Routes>
						<Route path="/" element={<Main />}/>
					</Routes>
					<Routes>
						<Route path="/" element={<Sidebar />}/>
					</Routes>
				</section>
            </div>
        </BrowserRouter>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
