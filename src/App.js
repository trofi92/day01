import { Home } from "./pages/Home";
import JoinValid from "./components/JoinValid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>React Exam Day 01</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinValid />} />
      </Routes>
    </>
  );
}

export default App;
