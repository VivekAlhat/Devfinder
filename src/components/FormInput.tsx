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
          className="block w-full p-4 pl-16 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Github User..."
          value={search}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          disabled={!search.length}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FormInput;
