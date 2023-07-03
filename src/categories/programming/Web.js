import '../../Content.css';
import { Link } from 'react-router-dom';

const d = <div className="f"></div>

const Web = () => {
	return (
		<div className="content">
			<h2 className="category"><Link exact to='/programming/web'>Web</Link></h2>
			
			<h1 className="title">생애 첫 블로그 만들기</h1>
			<p>깃허브에서 제공하는 기능을 통해 무료로 커스터마이징이 가능한 블로그를 운영할 수 있게 되었다.</p>
			<p>그래서 만들어 보았다!</p>
			<p>그렇게 나는 React도 연습할 겸, React를 통해 그리 어렵지 않게, 단순한 형태의 블로그를 완성할 수 있었다.</p>
			<p>그런데 문제는, 이 깃허브 블로그는 정적 웹 페이지이기 때문에 DB연동 등과 같은 일부 기능을 이용할 수가 없다.</p>
			<p>그래서 채택한 방법이 있다. 글을 쓸 때 직접 vscode를 열어서 마치 코딩하는 것처럼 불편하게 작성하는 것이다!</p>
			<p>깃허브가 1GB가 넘어가면 따로 요금을 청구한다는데 이것도 나름 큰일이다.</p>
			<p>이걸로 좀 쓰다가 워드프레스나 티스토리나 뭐 이런걸로 넘어가야지..</p>
			<a className="date">Jul. 3rd, 2023</a>
			<br></br>
			{d}
		</div>
	)
};

export default Web;