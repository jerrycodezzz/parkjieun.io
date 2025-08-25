// [advice from AI] Archiving 섹션 - GitHub과 기술블로그로 이동하는 버튼들
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Typography } from "@jerrycodezzz/ui-kit";
function Archiving() {
  const archiveItems = [
    {
      title: "Blog",
      description: "개발 경험과 기술 노하우를 공유합니다",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM8 6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
          <path d="M8 10h8v2H8zM8 14h6v2H8z" />
        </svg>
      ),
      link: "/blog",
      external: false,
      bgColor: "bg-primary-30 border border-blue-500 text-blue-500",
      hoverColor:
        "hover:bg-primary-70 hover:border hover:border-primary-70 hover:text-white",
      textColor: "text-primary-80",
    },

    {
      title: "npm",
      description: "패키지와 라이브러리를 확인해보세요",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none">
          <g fill="none" fillRule="evenodd">
            <rect width="24" height="24" fill="#D40001" />
            <path
              fill="#FFF"
              d="M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z"
            />
          </g>
        </svg>
      ),
      link: "https://www.npmjs.com/~jerrycodezzz", // [advice from AI] 실제 npm 프로필 링크로 교체
      external: true,
      bgColor: "bg-red-400 text-white",
      hoverColor: "hover:bg-red-500",
      textColor: "text-white",
    },
    {
      title: "GitHub",
      description: "소스코드와 프로젝트들을 확인해보세요",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/jerrycodezzz", // [advice from AI] 실제 GitHub 주소로 변경 필요
      external: true,
      bgColor: "bg-gray-500 text-white",
      hoverColor: "hover:bg-gray-700",
      textColor: "text-white",
    },
  ];

  const handleClick = (item) => {
    if (item.external) {
      window.open(item.link, "_blank");
    } else {
      window.location.href = item.link;
    }
  };

  return (
    <section
      id="archiving"
      className="w-full pb-48 min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-30, #e0e7ff), var(--color-primary-40, #c7d2fe))",
      }}>
      <div className="w-full max-w-none mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-16">
          {" "}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Archiving</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개발 여정과 프로젝트들을 기록하고 공유하는 공간입니다
          </p>
        </motion.div>

        <div className="grid md:grid-rows-3 gap-8 max-w-5xl mx-auto justify-center items-center ">
          {archiveItems.map((item, index) => (
            <motion.Card
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleClick(item)}
              className={`${item.bgColor} ${item.hoverColor} rounded-md p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="flex items-center mb-3">
                <div className="mr-4">{item.icon}</div>
                <Typography preset="h3" color={item.textColor}>
                  {item.title}
                </Typography>
              </div>

              <Typography
                preset="body"
                color="white"
                className="font-medium text-lg">
                {item.description}
              </Typography>
            </motion.Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Archiving;
