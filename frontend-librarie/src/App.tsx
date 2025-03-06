import { Route, Routes } from "react-router-dom";

import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import SkillsPage from "./pages/skills.tsx";
import ProjectsPage from "./pages/projects.tsx";
import ContactPage from "./pages/contact.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SkillsPage />} path="/skills" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
