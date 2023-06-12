import {
  ChevronDownIcon,
  EnvelopeClosedIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import * as Separator from "@radix-ui/react-separator";
import "./dashboard.css";
import { AddButton } from "../../../assets";
import { hexToRGBA } from "../../../utils";
import UserAvatar from "../../TopNavbar/Avatar/avatar";
import Badge from "../../Badge/badge";

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
    >
      <div className="CardHeading">
        <div className="CardUserAvatar">
          <UserAvatar avatarSize={20} fontSize={8} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label.Root className="CardUserName">Dennis Mitchell</Label.Root>
          <div className="CardUserEmail">
            <EnvelopeClosedIcon />
            <Label.Root>DMitchell22@mail.com</Label.Root>
          </div>
          <div className="CardUserPhone">
            <MobileIcon />
            <Label.Root>555-324-5262</Label.Root>
          </div>
        </div>
      </div>
      <Separator.Root className="CardSeparatorRoot" />
      <Badge text="Product Return" />
      <Badge text="Service Repair" color="red8" />
    </div>
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
        {/* <Card colorScheme={colorScheme} /> */}
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
