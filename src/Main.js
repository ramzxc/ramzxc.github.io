import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className="content">
            <h3 className='title'>Introduce Myself</h3>
			<br></br>
			<br></br>
			<p>윤아람</p>
			<p>한양대학교 컴퓨터소프트웨어학부 23학번</p>
			<p>react로 블로그 제작중</p>
			<br></br>
			<br></br>
			<h4>앞으로 해야 할 일</h4>
			<input type='checkbox' checked></input>
			sidebar 만들기
			<br></br>
			<br></br>
			<input type='checkbox'></input>
			db 연결
			<br></br>
			<br></br>
			<input type='checkbox'></input>
			search 기능 구현
        </div>
    )
};

export default Main;