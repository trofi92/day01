import { Home } from "./pages/Home";
import JoinValid from "./components/JoinValid";
import { Routes, Route } from "react-router-dom";
import JoinEmail from "./components/JoinEmail";

function App() {
  return (
    <>
      <div>React Exam Day 01</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinValid />} />
        <Route path="/joinEmail" element={<JoinEmail />} />
      </Routes>
    </>
  );
}

export default App;
