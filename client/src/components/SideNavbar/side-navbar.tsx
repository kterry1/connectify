import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./side-navbar.css";
import {
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SideNavbarItemProps {
  label: string;
  icon: ReactNode;
  route: string;
}

const SideNavbarItem = ({ label, icon, route }: SideNavbarItemProps) => {
  return (
    <NavigationMenu.Item className="SideNavigationMenuItem">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active SideNavigationMenuLink" : "SideNavigationMenuLink"
        }
        to={`/${route}`}
      >
        {icon}
        <div className="SideNavigationMenuLinkLabel">{label}</div>
      </NavLink>
    </NavigationMenu.Item>
  );
};

const SideNavbar = () => {
  return (
    <NavigationMenu.Root className="SideNavigationMenuRoot">
      <NavigationMenu.List className="SideNavigationMenuList">
        <SideNavbarItem label="Dashboard" icon={<DashboardIcon />} route="" />
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
    </NavigationMenu.Root>
  );
};

export default SideNavbar;
