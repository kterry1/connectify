import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import SideNavbarVertLine from "../../assets/side-navbar-vert-line.svg";
import "./side-navbar.css";
import {
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface SideNavbarItemProps {
  label: string;
  icon: ReactNode;
  route: string;
}

const SideNavbarItem = ({ label, icon, route }: SideNavbarItemProps) => {
  return (
    <NavigationMenu.Item className="SideNavigationMenuItem">
      <NavigationMenu.Link
        className="SideNavigationMenuLink"
        href={`/${route}`}
      >
        {icon}
        <div className="SideNavigationMenuLinkLabel">{label}</div>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

const SideNavbar = () => {
  return (
    <NavigationMenu.Root className="SideNavigationMenuRoot">
      <NavigationMenu.List className="SideNavigationMenuList">
        <SideNavbarItem
          label="Dashboard"
          icon={<DashboardIcon />}
          route="dashboard"
        />
        <SideNavbarItem
          label="Statistics"
          icon={<BarChartIcon />}
          route="statistics"
        />
        <SideNavbarItem
          label="Calendar"
          icon={<CalendarIcon />}
          route="calendar"
        />
        <SideNavbarItem label="Settings" icon={<GearIcon />} route="settings" />
      </NavigationMenu.List>
      <img src={SideNavbarVertLine} className="SideNavbarVertLine" />
    </NavigationMenu.Root>
  );
};

export default SideNavbar;
