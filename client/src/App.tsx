import TopNavbar from "./components/TopNavbar/top-navbar";
import SideNavbar from "./components/SideNavbar/side-navbar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopNavbar />
      <div style={{ height: "100%", paddingTop: "32px" }}>
        <SideNavbar />
      </div>
    </div>
  );
}

export default App;
