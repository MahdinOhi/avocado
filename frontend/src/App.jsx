import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/Blogs/BlogPage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/blogs" element={<BlogPage />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}
