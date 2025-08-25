// [advice from AI] 블로그 포스트 목록 아이템 컴포넌트
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Tag } from "@jerrycodezzz/ui-kit";

function BlogListItem({ post, index }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}>
      <Link
        to={`/blog/${post.slug}`}
        className="block border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
        {/* 카테고리, 날짜 */}
        <div className="flex items-center gap-3 mb-1">
          <Tag type="primary" outline size="sm">
            {post.category}
          </Tag>
          <time
            dateTime={post.date}
            className="text-sm text-gray-500 font-light">
            {formatDate(post.date)}
          </time>
        </div>

        {/* 제목과 태그 */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors flex-1">
            {post.title}
          </h3>

          {/* 태그들 */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <Tag
                variant="primary"
                key={tagIndex}
                type="primary"
                outline
                size="sm">
                #{tag}
              </Tag>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default BlogListItem;
