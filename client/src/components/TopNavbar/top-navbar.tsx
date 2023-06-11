import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import CompanyLogo from "../../assets/company-logo.svg";
import "./top-navbar.css";
import UserAvatar from "./Avatar/avatar";
import { BellIcon } from "@radix-ui/react-icons";
import Searchbar from "./Searchbar/searchbar";

const TopNavbar: FC = () => {
  return (
    <NavigationMenu.Root className="TopNavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuLeft">
          <img src={CompanyLogo} alt="company logo" />
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuRight">
          <NavigationMenu.Item>
            <Searchbar />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <BellIcon />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <UserAvatar />
          </NavigationMenu.Item>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default TopNavbar;
