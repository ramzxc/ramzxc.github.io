import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
			 <div className='divider' id='search'>
				<p className='section'>about me</p>
			 </div>
			 <div className='contents'>
				<ul className='categories'>
					<li><Link exact to='/'>Introduce Myself</Link></li>
				</ul>
			 </div>
			 <div className='divider'>
				<p className='section'>recent posts</p>
			 </div>
			 <div className='contents'>
				<ul className='categories'>
					<li><Link exact to='/ps/boj'>2169번: 로봇 조종하기</Link></li>
					<br></br>
					<li><Link exact to='/ps/boj'>1915번: 가장 큰 정사각형</Link></li>
					<br></br>
					<li><Link exact to='/ps/boj'>11049번: 행렬 곱셈 순서</Link></li>
				</ul>
			 </div>
			 <div className='divider'>
				<p className='section'>categories</p>
			 </div>
			 <div className='contents'>
				<ul className='categories'>
					<li>Problem Solving</li>
					{/* <li><Link exact to='/ps'>Problem Solving</Link></li> */}
					<br></br>
					<ul className='categories'>
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
					<ul className='categories'>
						<br></br>
						<li><Link exact to='/programming/web'>Web</Link></li>
						<br></br>
						<li><Link exact to='/programming/game'>Game</Link></li>
					</ul>
					<br></br>
					<li>Games</li>
					{/* <li><Link exact to='/games'>Games</Link></li> */}
					<ul className='categories'>
						<br></br>
						<li><Link exact to='/games/chess'>Chess</Link></li>
						<br></br>
						<li><Link exact to='/games/steam'>Steam</Link></li>
						<br></br>
						<li><Link exact to='/games/ns'>Nintendo Switch</Link></li>
					</ul>
				</ul>
			 </div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
        </div>
    )
};

export default Sidebar;