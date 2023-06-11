import { BrowserRouter } from "react-router-dom";
import TopNavbar from "./components/TopNavbar/top-navbar";
import SideNavbar from "./components/SideNavbar/side-navbar";
import MainContent from "./components/MainContent/main-content";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <TopNavbar />
        <div style={{ height: "100%", paddingTop: "32px", display: "flex" }}>
          <SideNavbar />
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
