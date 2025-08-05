// [advice from AI] 상단 고정 네비게이션 바 컴포넌트
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // [advice from AI] 스크롤 이벤트 리스너로 네비게이션 배경 변경
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // [advice from AI] 스크롤 스파이 기능
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ["hero", "work", "about", "contact"];
    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // [advice from AI] 스무스 스크롤 함수
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Jerry Kim
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              // [advice from AI] 홈페이지에서는 스크롤 네비게이션
              navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                    />
                  )}
                </button>
              ))
            ) : (
              // [advice from AI] 다른 페이지에서는 홈으로 돌아가는 버튼
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                ← Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
