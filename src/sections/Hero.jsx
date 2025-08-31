// [advice from AI] 히어로 섹션 컴포넌트
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { personalInfo } from "../data/projects";
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center from-white to-primary-30 bg-gradient-to-t">
      <div className="w-full max-w-none mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-extralight text-gray-900 mb-6">
            안녕하세요, <br />
            <span className="text-primary-80 font-light">
              {personalInfo.name}
            </span>
            입니다
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-light text-gray-600 mb-8 max-w-3xl mx-auto">
            {personalInfo.title}로서 {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button
              type="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) {
                  // 네비게이션 바 높이를 동적으로 계산 (폴백 포함)
                  const navbar = document.querySelector("nav");
                  const navHeight = navbar ? navbar.offsetHeight + 30 : 120;
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({ top: elementPosition, behavior: "smooth" });
                }
              }}>
              프로젝트 보러가기
            </Button> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
