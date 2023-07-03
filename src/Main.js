import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "/"

const Main = () => {
    return (
        <div className="content">
			<h2 className="category">About me</h2>

            <h3 className='title'>Introduce Myself</h3>
			<p>한양대학교 컴퓨터소프트웨어학부 23학번, 윤아람</p>
			<p>react로 블로그 제작중</p>
			<br></br>
			<br></br>
        </div>
    )
};

export default Main;