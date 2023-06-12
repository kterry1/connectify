import * as Avatar from "@radix-ui/react-avatar";
import "./avatar.css";

interface UserAvatarProps {
  avatarSize: number;
  fontSize: number;
}

const UserAvatar = ({ avatarSize, fontSize }: UserAvatarProps) => (
  <Avatar.Root className="AvatarRoot">
    <Avatar.Fallback
      className="AvatarFallback"
      style={{
        width: `${avatarSize}px`,
        height: `${avatarSize}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      DM
    </Avatar.Fallback>
  </Avatar.Root>
);

export default UserAvatar;
