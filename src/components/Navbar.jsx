import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setActiveSection("blog");
    } else if (isHomePage) {
      setActiveSection("hero");
    }
  }, [location.pathname, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "portfolio", "about", "archiving"];
    const observerOptions = {
      rootMargin: "-120px 0px -50% 0px",
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

  const handleNavClick = (item) => {
    if (item.path === "/blog") {
      window.location.href = "/blog";
    } else if (item.path === "/" && !isHomePage) {
      // 다른 페이지에서 홈페이지 섹션으로 이동하는 경우
      window.location.href = `/#${item.id}`;
    } else if (isHomePage) {
      // 홈페이지 내에서 섹션 스크롤
      const element = document.getElementById(item.id);
      if (element) {
        const navHeight = navRef.current
          ? navRef.current.offsetHeight + 30
          : 120;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { id: "hero", label: "Home", path: "/" },
    { id: "portfolio", label: "Portfolio", path: "/" },
    { id: "about", label: "About", path: "/" },
    { id: "archiving", label: "Archiving", path: "/" },
    { id: "blog", label: "Blog", path: "/blog" },
  ];

  return (
    <motion.nav
      ref={navRef}
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
          <div
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => (window.location.href = "/")}>
            parkjieun.io
          </div>

          {/* Navigation Menu */}
          <div className="flex space-x-8 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  activeSection === item.id
                    ? "text-primary-80"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                <span>{item.label}</span>
                {/* [advice from AI] Blog 메뉴에만 링크 아이콘 추가 */}
                {item.id === "blog" && (
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-80"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>

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
