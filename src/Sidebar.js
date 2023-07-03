import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
			 <div className='divider' id='search'>
				<p>About me</p>
			 </div>
			 <div className='contents'>
				<ul>
					<li><Link exact to='/'>Introduce Myself</Link></li>
				</ul>
			 </div>
			 <div className='divider'>
				<p>recent posts</p>
			 </div>
			 <div className='contents'>
				<ul>
					<li><Link exact to='/programming/web'>생애 첫 블로그 만들기</Link></li>
				</ul>
			 </div>
			 <div className='divider'>
				<p>categories</p>
			 </div>
			 <div className='contents'>
				<ul>
					<li>Problem Solving</li>
					{/* <li><Link exact to='/ps'>Problem Solving</Link></li> */}
					<br></br>
					<ul>
						<li><Link exact to='/ps/algorithms'>Algorithms</Link></li>
						<br></br>
						<li><Link exact to='/ps/BOJ'>BOJ</Link></li>
						<br></br>
						<li><Link exact to='/ps/codeforces'>Codeforces</Link></li>
						<br></br>
						<li><Link exact to='/ps/contests'>Contests</Link></li>
					</ul>
					<br></br>
					<li><Link exact to='/cybersecurity'>Cybersecurity</Link></li>
					<br></br>
					<li>Programming</li>
					{/* <li><Link exact to='/programming'>Programming</Link></li> */}
					<ul>
						<br></br>
						<li><Link exact to='/programming/web'>Web</Link></li>
						<br></br>
						<li><Link exact to='/programming/game'>Game</Link></li>
					</ul>
					<br></br>
					<li>Games</li>
					{/* <li><Link exact to='/games'>Games</Link></li> */}
					<ul>
						<br></br>
						<li><Link exact to='/games/chess'>Chess</Link></li>
						<br></br>
						<li><Link exact to='/games/steam'>Steam</Link></li>
						<br></br>
						<li><Link exact to='/games/ns'>Nintendo Switch</Link></li>
					</ul>
				</ul>
			 </div>
        </div>
    )
};

export default Sidebar;