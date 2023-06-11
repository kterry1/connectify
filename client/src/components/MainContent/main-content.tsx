import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";

const MainContent = () => {
  return (
    <div
      style={{
        padding: "32px",
        // background: "blue",
        width: "100%",
        height: "100%",
      }}
    >
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
