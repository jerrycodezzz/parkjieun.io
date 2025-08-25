// [advice from AI] 새로운 About 섹션: Profile, Introduction, Timeline, Roadmap으로 구성
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { personalInfo, skills } from "../data/projects";
import { Timeline, Typography } from "@jerrycodezzz/ui-kit";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import ProfileCard from "../components/ProfileCard";

function About() {
  // [advice from AI] 화면 크기 감지를 위한 상태
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      id="about"
      className="w-full from-primary-20 to-primary-30 bg-gradient-to-b min-h-screen px-32">
      <div className="w-full max-w-none mx-auto">
        {/* 1. Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          <div className="max-w-8xl mx-auto">
            <ProfileCard info={personalInfo} skills={skills} />
          </div>
        </motion.div>

        {/* 2. Growth Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="flex justify-center w-full px-80">
            <div className="w-full p-8 ">
              <Timeline
                items={[
                  {
                    id: "1",
                    date: "2015",
                    title: "중국 산동대 유학",
                    subtitle: "통계학 기초 다짐",
                    description:
                      "중국에서 통계학 기초를 다지며 데이터 분석에 대한 관심을 키웠습니다.",
                    location: "중국 산동성",
                    type: "education",
                    tags: ["통계학", "데이터 분석"],
                  },
                  {
                    id: "2",
                    date: "2018",
                    title: "편입 준비",
                    subtitle: "데이터사이언스 관심",
                    description:
                      "데이터사이언스 분야에 관심을 가지며 한국으로의 편입을 준비했습니다.",
                    location: "중국 산동성",
                    type: "education",
                    tags: ["데이터사이언스", "편입"],
                  },
                  {
                    id: "3",
                    date: "2021",
                    title: "숙명여대 통계학과 입학",
                    subtitle: "Python, 머신러닝 수강",
                    description:
                      "통계학과에서 Python 프로그래밍과 머신러닝을 본격적으로 학습했습니다.",
                    location: "서울, 대한민국",
                    type: "education",
                    tags: ["Python", "머신러닝", "통계학"],
                  },
                  {
                    id: "4",
                    date: "2023",
                    title: "AI 솔루션 기업 입사",
                    subtitle: "Vue3, FastAPI 풀스택 개발",
                    description:
                      "AI 솔루션 회사에서 Vue3와 FastAPI를 활용한 풀스택 개발 업무를 담당했습니다.",
                    location: "서울, 대한민국",
                    type: "work",
                    tags: ["Vue3", "FastAPI", "풀스택", "AI"],
                    link: "#portfolio",
                  },
                  {
                    id: "5",
                    date: "2024",
                    title: "Whisper STT 실험 및 파인튜닝",
                    subtitle: "대규모 오디오 학습 및 LoRA 적용",
                    description:
                      "OpenAI Whisper 모델을 활용한 STT 시스템 구축과 LoRA를 통한 파인튜닝 작업을 진행했습니다.",
                    location: "서울, 대한민국",
                    type: "project",
                    tags: ["Whisper", "STT", "LoRA", "AI/ML"],
                    link: "#portfolio",
                  },
                  {
                    id: "6",
                    date: "2025 - 현재",
                    title: "프리랜서를 위한 RAG 기반 백엔드 설계",
                    subtitle: "시스템 설계 중심 포지션 전환",
                    description:
                      "RAG 기반 백엔드 시스템 설계를 통해 시스템 아키텍처 중심의 역할로 전환하고 있습니다.",
                    location: "서울, 대한민국",
                    type: "work",
                    tags: ["RAG", "시스템 설계", "백엔드", "프리랜서"],
                  },
                ]}
                orientation="vertical"
                position={isMobile ? "left" : "center"}
                compact={isMobile}
                animated={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* [advice from AI] Archiving 섹션과의 자연스러운 연결을 위한 영역 */}
    </section>
  );
}

export default About;
