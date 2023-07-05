import '../../Content.css';
import { Link } from 'react-router-dom';

const d = <div className="f"></div>

const Web = () => {
	return (
		<div className="content">
			<h2 className="category"><Link exact to='/programming/web'>Web</Link></h2>

			<h1 className='title'>깃허브 블로그 새로고침 문제 해결</h1>
			<p>깃허브 블로그는 상술했듯 정적 웹 페이지이기 때문에 React의 SPA(Single Page Application)를 지원하지 않는다.</p> 
			<p>그래서 다른 페이지로 이동 (엄밀히 말해서 이동은 아닐 테지만) 후 새로고침 시 얘가 주소를 찾지 못해 404 에러를 띄우게 된다.</p>
			<p>이 문제를 해결하는 데에는 크게 두 가지 방법이 있다.</p>
			<p>첫째, 검색엔진이 읽지 못하나 #(해쉬값) 이전의 주소를 제외하면 
				에초에 서버에 요청이 가지 않아 백엔드 서버가 없는 정적인 페이지에 주로 사용되는 HashRouter를 사용하기.</p>
			<p>둘째는 404.html을 생성 후 그 안에 스크립트를 만들어 리디렉션하기이다.</p>
			<p>원래는 두번째 것으로 멋지게 새로고침 문제를 해결하려 했으나 해보려다가 조금 귀찮아져서 손쉬운 첫번째 방법을 택했다.</p>
			<p>어차피 옮길 블로그, 검색엔진이 찾을 수 있든 없든 상관없지 않을까?</p>
			<p>뭐, 나중에 웹에 대한 이해도가 더 나아지면 두번째 방법을 다시 시도할 여지도 충분하니 말이다.</p>
			<p>첫 번째 방법은 단순히 BrowswerRouter -&gt; HashRouter 이렇게 바꿔주면 되는거라 복잡한 설명같은 것도 필요 없다.</p>
			<p>이 얼마나 단순하고 아름다운가!</p>
			<a className="date">Jul. 5th, 2023</a>
			<br></br>
			{d}

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
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	)
};

export default Web;