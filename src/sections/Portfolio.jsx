// [advice from AI] 프로젝트 작업 섹션 컴포넌트
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { PortfolioModal } from "@jerrycodezzz/ui-kit";
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    console.log("[DEBUG] handleViewDetails called with project:", project);
    console.log("[DEBUG] project.detailed exists:", !!project.detailed);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="w-full pb-32 from-bg-white to-primary-20 bg-gradient-to-b min-h-screen px-32">
      <div className="w-full max-w-none mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 구현한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <ProjectCard
                project={project}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default Portfolio;
