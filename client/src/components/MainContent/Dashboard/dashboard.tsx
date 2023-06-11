import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <div className="DashboardHeading">
        <h1>Dashboard</h1>
      </div>
      <div className="DashboardButtons">
        <button className="ButtonOutline">
          Filter By
          <ChevronDownIcon />
        </button>
        <button className="ButtonOutline">
          Sort By <ChevronDownIcon />
        </button>
        <button className="ButtonGreen">Refresh Columns</button>
      </div>
      <div className="CardColumnsContainer">
        <div className="CardColumns"></div>
        <div className="CardColumns"></div>
        <div className="CardColumns"></div>
        <div className="CardColumns"></div>
      </div>
    </div>
  );
};

export default Dashboard;
