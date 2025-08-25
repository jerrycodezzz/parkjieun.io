// [advice from AI] React Router DOM을 사용한 라우터 설정
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BlogMain from "./pages/blog/BlogMain"; // [advice from AI] 블로그 메인 페이지 추가
import BlogPost from "./pages/blog/BlogPost"; // [advice from AI] 블로그 포스트 페이지 추가
import "./App.css";

// [advice from AI] 라우터 구성 정의
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog", // [advice from AI] 블로그 라우트 추가
        element: <BlogMain />,
      },
      {
        path: "blog/:slug", // [advice from AI] 개별 블로그 포스트 라우트 추가
        element: <BlogPost />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
