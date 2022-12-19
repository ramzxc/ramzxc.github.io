/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/aboutMe';
import { Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="header"> 
                    <div className="ramzxc"><Link exact to="/" >ramzxc</Link></div>
                    <ul class="nav-list">
                        <li className="categories">
                            <Link exact to="/categories">categories</Link>
                        </li>
                        <li className="aboutMe">
                            <Link exact to="/aboutMe">about me</Link>
                        </li>
                        <li className="search">
                            <input 
                            type="search" 
                            placeholder="search"
                            className="searchButton"
                            size={5}
                            />
                        </li>
                    </ul>
                </header>
                <div className="main"/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
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
