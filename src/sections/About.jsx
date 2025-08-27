// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { personalInfo, skills } from "../data/projects";
import { Timeline, Tag, Button } from "@jerrycodezzz/ui-kit";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import ProfileCard from "../components/ProfileCard";

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllTimeline, setShowAllTimeline] = useState(false); // [advice from AI] 타임라인 전체 보기 상태

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // [advice from AI] 타임라인 데이터 정의
  const timelineItems = [
    {
      id: "1",
      date: "2025.06 ~ 2025.07",
      title: "CCasS 어시스턴트 진입점 & 에러 핸들링",
      subtitle: "상담 어시스턴트 안정성 개선",
      description:
        "전역 에러 핸들링 구조 정비 및 CCasS 진입점 JWT 인증 흐름 설계.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["에러 핸들링", "JWT", "시스템 안정화"],
    },
    {
      id: "2",
      date: "2025.05",
      title: "의도 분류 파이프라인 설계",
      subtitle: "CCasS 콜봇 지능 향상",
      description:
        "의도 분류 앙상블 파이프라인 설계 및 CCasS 모니터링 API 구조 기획.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Intent Classification", "API 설계", "AI/ML"],
    },
    {
      id: "3",
      date: "2025.04",
      title: "대화요약 API 파이프라인 설계",
      subtitle: "한국경제TV 리팩토링 포함",
      description:
        "한국경제TV 챗봇 리팩토링과 함께 대화요약 파이프라인을 설계 및 문서화.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["대화요약", "API", "리팩토링"],
    },
    {
      id: "4",
      date: "2025.03",
      title: "실시간 STT 모듈 개발",
      subtitle: "Figma MCP + Cursor AI 연동",
      description:
        "Figma MCP와 CursorAI 연동 구조 설계 및 STT 스트리밍 모듈 구현.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["STT", "CursorAI", "Figma MCP"],
    },
    {
      id: "5",
      date: "2025.01 ~ 2025.02",
      title: "Whisper Fine-Tuning",
      subtitle: "LoRA 적용 및 학습 파이프라인 구축",
      description:
        "대용량 오디오 데이터 기반 Whisper 모델 학습 및 LoRA 파인튜닝 수행.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Whisper", "Fine-Tuning", "LoRA", "STT"],
    },
    {
      id: "6",
      date: "2024.12",
      title: "CCasS 워크스페이스 UI 개발",
      subtitle: "대화 설계 환경 개선",
      description: "워크스페이스 기반 챗봇 빌더 프론트엔드 구현.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Vue3", "워크스페이스", "챗봇"],
    },
    {
      id: "7",
      date: "2024.11",
      title: "CCasS 대화엔진 UI 개발",
      subtitle: "시나리오 구성 인터페이스 제작",
      description: "조건 분기형 대화 흐름 빌더 프론트엔드 개발.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["Vue3", "챗봇 빌더", "시나리오"],
    },
    {
      id: "8",
      date: "2024.10",
      title: "CCasS 지식저장소 프론트 개발",
      subtitle: "콘텐츠 등록 및 검색 기능 구현",
      description:
        "지식저장소 콘텐츠 등록, 편집, 검색 기능을 담당하는 프론트엔드 개발.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["지식저장소", "Vue3", "검색"],
    },
    {
      id: "9",
      date: "2024.09",
      title: "콜봇 모니터링 UI 및 LLM Provider 설계",
      subtitle: "운영 데이터 시각화 및 퍼블리싱",
      description:
        "콜봇 운영 로그 기반 모니터링 UI 제작, LLM Provider 화면 기획, 지식저장소 퍼블리싱 완료.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["LLM", "모니터링", "퍼블리싱"],
    },
    {
      id: "10",
      date: "2024.08",
      title: "발화 데이터셋 설계 및 챗봇 기획",
      subtitle: "도로공사·휴게소 음성 수집",
      description:
        "한국도로공사, 여주휴게소 발화 데이터 수집·정제 및 초안 챗봇 설계 시작.",
      location: "서울, 대한민국",
      type: "work",
      tags: ["STT", "데이터 수집", "챗봇 설계"],
    },
    {
      id: "11",
      date: "2024.05 ~ 2024.07",
      title: "클라우드 기반 AI 응용개발자 양성과정 수료",
      subtitle: "서울시 지원 교육과정 1위 수상",
      description:
        "프로그래밍 기초, 빅데이터, AI 웹서비스 프로젝트를 수행하며 한국소프트웨어저작권협회장상 수상.",
      location: "서울, 대한민국",
      type: "education",
      tags: ["AI", "웹서비스", "수상"],
    },
    {
      id: "12",
      date: "2024.01 ~ 2024.03",
      title: "SQL 기초 학습",
      subtitle: "PostgreSQL 실습 중심",
      description:
        "조인, 집계, 서브쿼리 등 SQL 기초를 PostgreSQL 환경에서 실습하며 데이터 활용 기초 확보.",
      location: "온라인",
      type: "education",
      tags: ["SQL", "PostgreSQL"],
    },
    {
      id: "13",
      date: "2023.09 ~ 2023.10",
      title: "데이터 분석 온보딩 트랙",
      subtitle: "멋쟁이 사자처럼",
      description:
        "numpy, pandas, seaborn, folium을 활용한 데이터 수집, 분석, 시각화 프로젝트 수행.",
      location: "서울, 대한민국",
      type: "education",
      tags: ["데이터분석", "시각화"],
    },
    {
      id: "14",
      date: "2023.08 ~ 2023.09",
      title: "데이터 분석 심화 해커톤",
      subtitle: "팀 프로젝트 완성",
      description:
        "Python을 활용해 데이터 수집, EDA, 시각화, 인사이트 도출 등 전 과정 수행.",
      location: "서울, 대한민국",
      type: "education",
      tags: ["데이터 분석", "EDA"],
    },
    {
      id: "15",
      date: "2023.05 ~ 2023.09",
      title: "SW 엔지니어 트랙",
      subtitle: "건국대학교 ESG 지원단",
      description:
        "HTML, CSS, Figma를 활용한 웹 개발 기초 및 기획 문서 작성 (API 명세서, WBS 등) 수행.",
      location: "서울, 대한민국",
      type: "education",
      tags: ["웹개발", "기획"],
    },
    {
      id: "16",
      date: "2018.01 ~ 2018.02",
      title: "평창 동계올림픽 조직위",
      subtitle: "강릉 선수촌 근무",
      description: "의류 세탁 접수 및 분배, 고객 응대 및 운영 보조 업무 수행.",
      location: "강릉, 대한민국",
      type: "achievement",
      tags: ["운영지원", "고객응대"],
    },
    {
      id: "17",
      date: "2016.05 ~ 2017.11",
      title: "한국어 교육 재능기부",
      subtitle: "중국 조선족 학생 대상",
      description:
        "중국 현지 조선족 학생 대상 말하기, 쓰기, 듣기, 읽기 수업 및 진도관리 수행.",
      location: "중국",
      type: "project",
      tags: ["교육봉사", "한국어"],
    },
    {
      id: "18",
      date: "2015.09 ~ 2017.12",
      title: "국제 학생회 임원활동",
      subtitle: "산동대학교",
      description: "유학생 행사 기획 및 운영, 예산 조율 및 협상 경험 포함.",
      location: "중국 산동성",
      type: "other",
      tags: ["학생회", "행사기획"],
    },
  ];

  const displayedItems = showAllTimeline
    ? timelineItems
    : timelineItems.slice(0, 3);

  return (
    <section
      id="about"
      className="w-full from-white to-primary-20 bg-gradient-to-b min-h-screen px-32">
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
            <div className="w-full p-8">
              <Timeline
                items={displayedItems}
                orientation="vertical"
                position={isMobile ? "left" : "center"}
                compact={isMobile}
                animated={true}
              />

              {!showAllTimeline && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="flex justify-center mt-20">
                  <Button
                    type="jerrybutton"
                    size="sm"
                    onClick={() => setShowAllTimeline(true)}
                    className="font-extralight px-8 py-2 text-primary-60 border border-primary-40 hover:bg-primary-10 transition-all duration-300">
                    타임라인 더보기 ({timelineItems.length - 3}개)
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
