import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Fallback from "./components/Fallback";
import UserInfo from "./components/UserInfo";
import { useThemeMode } from "./utils/hooks";

function App() {
  const theme = useThemeMode("theme");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleClick = (newSearchFilter: string) => {
    setSearchFilter(newSearchFilter);
  };

  return (
    <div
      className={`font-mono h-screen grid place-content-center ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="flex flex-col gap-5 w-screen h-fit p-4 sm:w-[30rem] md:w-[40rem] lg:w-[50rem]">
        <Header />
        <FormInput searchFilter={searchFilter} handleClick={handleClick} />
        <ErrorBoundary
          FallbackComponent={Fallback}
          onReset={() => setSearchFilter("")}
          resetKeys={[searchFilter]}
        >
          <UserInfo username={searchFilter} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
