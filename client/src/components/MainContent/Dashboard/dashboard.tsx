import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./dashboard.css";
import { AddButton } from "../../../assets";

const Card = () => {
  return <div className="Card"></div>;
};

const CardColumn = () => {
  return (
    <div className="CardColumn" id="new-card-column">
      <div className="CardColumnHeading">
        <Label.Root className="LabelRoot" htmlFor="new-card-column">
          New
        </Label.Root>
        <AddButton />
      </div>
      <div className="CardList">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

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
        <CardColumn />
        <CardColumn />
        <CardColumn />
        <CardColumn />
      </div>
    </div>
  );
};

export default Dashboard;
