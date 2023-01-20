import { BiSearch } from "react-icons/bi";

type SearchBarProps = {
  onSearch: (SearchBar: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="flex w-full md:w-80">
      <input
        type="text"
        className="h-10 border border-solid border-gray-400 border-r-0 flex-1 outline-none px-1"
      />
      <button
        type="button"
        className="h-10 w-10 bg-pink-600 flex items-center justify-center text-gray-100"
      >
        <BiSearch size={22} />
      </button>
    </div>
  );
};

export { SearchBar };
