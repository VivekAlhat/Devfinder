import { SunIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-2xl font-bold">devfinder</p>
      <div className="flex flex-row items-center gap-2">
        <p className="text-lg font-semibold tracking-wide">light</p>
        <SunIcon className="text-white h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
