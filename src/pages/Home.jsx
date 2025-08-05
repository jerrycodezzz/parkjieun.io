// [advice from AI] 메인 홈 페이지 컴포넌트
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import About from "../sections/About";
import Contact from "../sections/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
