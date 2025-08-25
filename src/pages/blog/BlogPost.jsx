import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; // [advice from AI] motion import 추가
import ReactMarkdown from "react-markdown";
import { Code } from "@jerrycodezzz/ui-kit"; // [advice from AI] ui-kit의 CodeBlock 사용
import remarkGfm from "remark-gfm";
import { getPostBySlug, blogPosts } from "../../blog/metadata";
import { Tag, Button } from "@jerrycodezzz/ui-kit";
function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      setError("포스트를 찾을 수 없습니다.");
      setLoading(false);
      return;
    }

    // 마크다운 파일 로드
    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/blog/posts/${post.slug}.md`);
        if (!response.ok) {
          throw new Error("마크다운 파일을 찾을 수 없습니다.");
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        console.error("마크다운 로드 오류:", err);
        setError("포스트 내용을 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [post, slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // 관련 포스트 (같은 카테고리 또는 태그)
  const getRelatedPosts = () => {
    if (!post) return [];

    return blogPosts
      .filter(
        (p) =>
          p.id !== post.id &&
          (p.category === post.category ||
            p.tags.some((tag) => post.tags.includes(tag)))
      )
      .slice(0, 3);
  };

  const relatedPosts = getRelatedPosts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        {" "}
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">포스트를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        {" "}
        {/* [advice from AI] pt-20 위치 조정 */}
        <div className="text-center">
          <div className="text-6xl mb-4">😅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error || "포스트를 찾을 수 없습니다"}
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            블로그 홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="container mx-auto px-6 py-12 max-w-5xl">
        {" "}
        {/* 브레드크럼 */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>•</span>
            <Link to="/blog" className="hover:text-gray-700">
              Blog
            </Link>
            <span>•</span>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </motion.nav>
        {/* 포스트 헤더 */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Tag type="primary" outline size="sm">
                {post.category}
              </Tag>
              <time dateTime={post.date} className="text-sm text-gray-500">
                {formatDate(post.date)}
              </time>
            </div>

            {/* 태그들 */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Tag
                  variant="primary"
                  key={index}
                  type="primary"
                  outline
                  size="sm">
                  #{tag}
                </Tag>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center border-b border-gray-200 pb-6">
            <div className="flex items-center text-gray-500 text-sm">
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.header>
        {/* 포스트 내용 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <Code language={match[1]} className="my-4">
                    {String(children).replace(/\n$/, "")}
                  </Code>
                ) : (
                  <code
                    className="bg-gray-100 px-1 py-0.5 rounded text-sm"
                    {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-3xl  text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl  text-gray-900 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl  text-gray-900 mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-900 leading-relaxed mb-4 font-light">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 font-light">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 font-light">
                  {children}
                </ol>
              ),
            }}>
            {markdownContent}
          </ReactMarkdown>
        </motion.div>
        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              관련 포스트
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(relatedPost.date)}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {relatedPost.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
        {/* 네비게이션 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-end mt-12">
          <Button variant="primary" size="md" onClick={() => navigate("/blog")}>
            목록으로 돌아가기
          </Button>
        </motion.div>
      </article>
    </div>
  );
}

export default BlogPost;
