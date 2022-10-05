import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div>React Exam Day 01</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
