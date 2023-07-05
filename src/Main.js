import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "/"

const Main = () => {
    return (
        <div className="content">
			<h2 className="category">about me</h2>

            <h3 className='title'>Introduce Myself</h3>
			<p>한양대학교 컴퓨터소프트웨어학부 23학번</p>
			<p>윤아람</p>
			<br></br>
			<br></br>
        </div>
    )
};

export default Main;