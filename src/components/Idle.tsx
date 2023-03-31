import { useThemeMode } from "../utils/hooks";

const Idle = () => {
  const theme = useThemeMode("theme");

  return (
    <div
      className={`p-8 rounded-xl text-center ${theme === "dark" ? "dark" : ""}`}
    >
      <p>Find any GitHub user's public profile information with ease.</p>
      <p>Start by typing profile name in search bar above.</p>
    </div>
  );
};

export default Idle;
