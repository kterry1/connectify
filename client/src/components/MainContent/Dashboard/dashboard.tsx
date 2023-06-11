import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import "./dashboard.css";
import { AddButton } from "../../../assets";

const hexToRGBA = (hex: string, opacity: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

interface CardProps {
  colorScheme: string;
}

const Card = ({ colorScheme }: CardProps) => {
  return (
    <div
      className="Card"
      style={{
        boxShadow: `5px 10px 20px ${hexToRGBA(colorScheme, 0.15)},
    3px 6px 6px  ${hexToRGBA(colorScheme, 0.15)}`,
      }}
    ></div>
  );
};

interface CardColumnProps {
  label: string;
  colorScheme: string;
}

const CardColumn = ({ label, colorScheme }: CardColumnProps) => {
  return (
    <div
      className="CardColumn"
      id="new-card-column"
      style={{ color: colorScheme }}
    >
      <div className="CardColumnHeading">
        <Label.Root className="LabelRoot" htmlFor="new-card-column">
          {label}
        </Label.Root>
        <AddButton />
      </div>
      <div className="CardList">
        <Card colorScheme={colorScheme} />
        <Card colorScheme={colorScheme} />
        <Card colorScheme={colorScheme} />
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
        <CardColumn label="New" colorScheme="#9E6375" />
        <CardColumn label="Open" colorScheme="#FFAB40" />
        <CardColumn label="In Progress" colorScheme="#7784F9" />
        <CardColumn label="Done" colorScheme="#D23C63" />
      </div>
    </div>
  );
};

export default Dashboard;
