// [advice from AI] 프로젝트 카드 컴포넌트
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Card, Tag } from "@jerrycodezzz/ui-kit";

function ProjectCard({ project, onViewDetails }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        variant="outlined"
        className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
        onClick={() => onViewDetails(project)}>
        <div className="aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-primary-80 font-light">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 ml-2">{project.year}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.slice(0, 6).map((tech) => (
              <Tag
                size="xs"
                key={tech}
                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
