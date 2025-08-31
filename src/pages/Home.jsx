// [advice from AI] 메인 홈 페이지 컴포넌트
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import About from "../sections/About";
import Archiving from "../sections/Archiving";

function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      <Archiving />
    </div>
  );
}

export default Home;
