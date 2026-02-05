import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";


function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}

export default App;
