import { Link } from 'react-router-dom';
import './Home.css';

const boj = "https://www.acmicpc.net/user/ramzxc";
const github = "https://github.com/ramzxc";

const Home = () => {
    return (
        <div className="latest">
            <h3>블로그 만들기</h3>
            <p>react로 github블로그를 만들어보는 중입니다.</p>
            <br></br>
            <h3>하이퍼링크</h3>
            <button onClick={()=>{window.open(boj)}}>BOJ</button>
            <button onClick={()=>{window.open(github)}}>Github</button>
        </div>
    );
};

export default Home;