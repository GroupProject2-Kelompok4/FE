import React from "react";

interface SearchbarProps {
  searchTerm: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  handleFilterChange,
  searchTerm,
}: SearchbarProps) => {
  return (
    <div className="flex gap-2">
      <form className="text-left">
        <label>
          <span className="text-@19345E">Search</span>
        </label>
        <div>
          <input
            className="border border-@19345E"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleFilterChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
