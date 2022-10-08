import * as React from "react";

import { Routes, Route } from "react-router-dom";

import UtilScrollToTop from "./components/util/UtilScrollToTop";
import NavigationBar from "./components/navigation/NavigationBar";
import FooterNavigationBar from "./components/navigation/FooterNavigationBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Work from "./pages/Work";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Experience from "./pages/Experience";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <main>
      <UtilScrollToTop />
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="work" element={<Works />} />
        <Route path="work/:slug" element={<Work />} />
        <Route path="blog" element={<Articles />} />
        <Route path="blog/:slug" element={<Article />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <FooterNavigationBar />
    </main>
  );
}

export default App;
