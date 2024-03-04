import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section>
        <h1>맵노트 여행간 곳을 기록하세요~</h1>
        <h2>
          맵노트를 통해 세계를 기록하세요! 여행 기록, 정리, 회상까지 할 수
          있습니다. 이 앱 통해 여행 경험을 문서화하여 여행을 잊지 못할 추억으로
          만드세요.
        </h2>
        <Link to="/login">기록하러 가기</Link>
      </section>
    </main>
  );
}

export default Home;
