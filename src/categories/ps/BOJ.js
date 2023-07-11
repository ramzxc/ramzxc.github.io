import '../../Content.css';

const BOJ = () => {
	return (
		<div className='content'>
			<h2 className='category'>BOJ</h2>
			<br></br>
			
			<h1 id='11049' className='title'>11049번: 행렬 곱셈 순서</h1>
			<a onClick={() => window.open("https://www.acmicpc.net/problem/11049")}>https://www.acmicpc.net/problem/11049</a>
			<p>노린 건 아니었지만 밑의 11066번과 풀이 방법이 완전히 똑같다고 볼 수 있는 문제였다.</p>
			<img src='/img/11049.png'/>
			<p>마찬가지로 동적계획법, DP를 이용해 문제들을 잘게 쪼갠 뒤 합치는 방법으로 풀 수 있으며 등장하는 s, e, k의 역할이 11066번과 완전히 동일히다.</p>
			<p>시작지점 s, 끝지점 e와 행렬을 합칠 때는 무조건 두개씩 합친다는 점, 그리고 행렬이 결국 하나로 합쳐진다는 점을 이용해서 k번째에서 행렬이 둘로 나뉘어 합쳐질 때의 값을 저장해나간다.</p>
			<p>작은 것부터 시작하기 때문에 합치는 행렬의 수가 2개일 때부터 3개, 4개, 결국 하나로 합쳐질 때까지 반복해준다. </p>

			<h1 id='11066' className='title'>11066번: 파일 합치기</h1>
			<a onClick={() => window.open("https://www.acmicpc.net/problem/11066")}>https://www.acmicpc.net/problem/11066</a>
			<p>이번 문제도 전형적인 DP 문제였는데, 워낙 오랜만이다보니 조금 해맸다. <a onClick={() => window.open("https://tjdahr25.tistory.com/m/45")}>이 블로그</a>를 참고해서 문제 풀이에 성공할 수 있었다.</p>
			<img src='/img/11066.png'/>
			<p>우선 이 문제는 큰 문제를 작은 문제들로 쪼개는 DP 기법을 통해 풀 수 있는데, 결국 합쳐지는 파일이 항상 두개씩이고 모든 파일을 합쳐 하나로 만들어야 하기 때문이다.</p>
			<p>그렇다면 주어진 파일들의 시작점과 끝점을 s, e로 잡고 배열 dp[s][e]는 시작점 s부터 e까지의 파일 크기로 정해 문제를 풀 수 있다.</p>
			<p>지금 합치고자 하는 파일이 s부터 e까지라면, 그 파일들은 s부터 k까지, 또 k + 1부터 e까지 합친 파일들의 합으로 정의할 수 있다.</p>
			<p>k값에 따라 파일의 크기가 달라지기 때문에 우리는 k값을 변화시켜가며 최솟값을 취하면 된다.</p>
			
			<h1 id='2616' className='title'>2616번: 소형기관차</h1>
			<a onClick={() => window.open("https://www.acmicpc.net/problem/2616")}>https://www.acmicpc.net/problem/2616</a>
			<p>배열이 주어질 때, 이 배열 안에서 연속된 세 개의 부분합이 최대가 될 경우를 구하는 문제이다. 부분합의 길이는 입력으로 주어진다.</p>
			<p>우선 누적합을 통해 특정 길이의 부분합을 구해놓고, DP 알고리즘을 사용해 문제를 어렵지 않게 해결할 수 있다. DP의 정석 같은 느낌을 받았달까.</p>
			<img src="/img/2616.png"/>
			<p>DP를 통해 지금까지의 최댓값 (dp[i][j - 1]) 과 현재 위치를 선택해 계산한 값 (dp[i - 1][j - t] + s) 을 비교하여 더 큰 값을 dp[i][j]에 저장한다.</p>
			<p>이렇게 되면 항상 현재 값은 현재까지의 계산 중 최댓값이 되며 그렇기에 가장 마지막 값이 모든 배열을 고려했을 때의 최댓값이 되게 된다.</p>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	)
};

export default BOJ;