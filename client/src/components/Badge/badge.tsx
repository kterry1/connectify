import { FC, HTMLAttributes } from "react";
import "./Badge.css";
// @param color - https://www.radix-ui.com/docs/colors/palette-composition/the-scales

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  color?: string;
}

const Badge: FC<BadgeProps> = ({ text, color = "blue8", ...rest }) => {
  const badgeStyle = {
    backgroundColor: `var(--${color})`,
  };

  return (
    <span className="Badge" style={badgeStyle} {...rest}>
      {text}
    </span>
  );
};

export default Badge;
