// [advice from AI] 프로젝트 작업 섹션 컴포넌트
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 구현한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
