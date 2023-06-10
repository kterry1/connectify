import * as Avatar from "@radix-ui/react-avatar";
import "./avatar.css";

const UserAvatar = () => (
  <Avatar.Root className="AvatarRoot">
    <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
  </Avatar.Root>
);

export default UserAvatar;
