import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import "./main-content.css";

const MainContent = () => {
  return (
    <div className="MainContent">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<div>Statistics</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </div>
  );
};

export default MainContent;
