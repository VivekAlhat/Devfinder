import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useLocalStorageState } from "../utils/hooks";

const Header = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "dark");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-2xl font-bold">devfinder</p>
      <div className="flex flex-row items-center gap-2">
        {theme === "light" ? (
          <>
            <MoonIcon
              className="h-8 w-8 cursor-pointer"
              onClick={handleThemeChange}
            />
          </>
        ) : (
          <>
            <SunIcon
              className={`h-8 w-8 cursor-pointer ${
                theme === "dark" ? "white" : null
              }`}
              onClick={handleThemeChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
