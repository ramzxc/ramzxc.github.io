import '../../Content.css';
import Highlight from 'react-highlight';

const BOJ = () => {
	return (
		<div className='content'>
			<h2 className='category'>BOJ</h2>
			<br></br>
			
			<h1 className='title'>2616번: 소형기관차</h1>
			<a onClick={() => window.open("https://www.acmicpc.net/problem/2616")}>https://www.acmicpc.net/problem/2616</a>
			<p>배열이 주어질 때, 이 배열 안에서 연속된 세 개의 부분합이 최대가 될 경우를 구하는 문제이다. 부분합의 길이는 입력으로 주어진다.</p>
			<p>우선 누적합을 통해 특정 길이의 부분합을 구해놓고, DP 알고리즘을 사용해 문제를 어렵지 않게 해결할 수 있다. DP의 정석 같은 느낌을 받았달까.</p>
			<img src="/img/2616.png"/>
			<p>DP를 통해 지금까지의 최댓값 (dp[i][j - 1]) 과 현재 위치를 선택해 계산한 값 (dp[i - 1][j - t] + s) 을 비교하여 더 큰 값을 dp[i][j]에 저장한다.</p>
			<p>이렇게 되면 항상 현재 값은 현재까지의 계산 중 최댓값이 되며 그렇기에 가장 마지막 값이 모든 배열을 고려했을 때의 최댓값이 되게 된다. DP의 기본적인 원리이기도 하다.</p>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	)
};

export default BOJ;