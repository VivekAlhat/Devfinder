import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const FormInput = ({ searchFilter, handleClick }: IFormInputProps) => {
  const [search, setSearchFilter] = useState<string>(() => searchFilter);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="text-blue-400 h-6 w-6" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-16 text-sm text-zinc-100 rounded-lg bg-gray-5 bg-slate-800 focus:border-none focus:outline-none"
          placeholder="Search Github User..."
          value={search}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          disabled={!search.length}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FormInput;
