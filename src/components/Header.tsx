const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-2xl font-bold">devfinder</p>
      {/* <div className="flex flex-row items-center gap-2">
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
      </div> */}
    </div>
  );
};

export default Header;
