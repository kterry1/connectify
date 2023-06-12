import * as Toggle from "@radix-ui/react-toggle";
import { MoonIcon } from "@radix-ui/react-icons";
import "./mood-toggle.css";

const MoodToggle = () => (
  <Toggle.Root className="Toggle" aria-label="Mood Toggle">
    <MoonIcon />
  </Toggle.Root>
);

export default MoodToggle;
