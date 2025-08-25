// [advice from AI] 블로그 메인 페이지 컴포넌트
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  blogPosts,
  getAllCategories,
  getPostsByCategory,
} from "../../blog/metadata";
import { Input, Tabs } from "@jerrycodezzz/ui-kit";
import BlogListItem from "../../components/blog/BlogListItem"; // [advice from AI] 목록형 컴포넌트로 변경

function BlogMain() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...getAllCategories()];

  // 필터링된 포스트들
  const getFilteredPosts = () => {
    let filtered = [...blogPosts];

    // 카테고리 필터
    if (selectedCategory !== "All") {
      filtered = getPostsByCategory(selectedCategory);
    }

    // 태그 필터
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    // 검색어 필터
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* 헤더 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개발하면서 배운 것들과 경험을 공유합니다
          </p>
        </motion.div>

        {/* 검색 및 필터 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12">
          {/* 검색바 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Input
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex justify-center mb-6">
            <Tabs
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                setSelectedTag(""); // 카테고리 변경시 태그 초기화
              }}
              items={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              variant="underline"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* 전체 포스트 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory !== "All" || selectedTag || searchTerm
                ? `검색 결과 (${filteredPosts.length}개)`
                : "모든 포스트"}
            </h2>

            {/* 필터 초기화 버튼 */}
            {(selectedCategory !== "All" || selectedTag || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTag("");
                  setSearchTerm("");
                }}
                className="text-sm text-gray-500 hover:text-gray-700 underline">
                필터 초기화
              </button>
            )}
          </div>

          {/* 포스트 목록 */}
          {filteredPosts.length > 0 ? (
            <div className=" ">
              {filteredPosts.map((post, index) => (
                <BlogListItem key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-500">다른 검색어나 필터를 시도해보세요</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default BlogMain;
