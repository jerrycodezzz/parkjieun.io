// [advice from AI] 메인 홈 페이지 컴포넌트
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import About from "../sections/About";
import Archiving from "../sections/Archiving"; // [advice from AI] Archiving 섹션 추가

function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      <Archiving /> {/* [advice from AI] Archiving 섹션을 맨 마지막에 추가 */}
    </div>
  );
}

export default Home;
