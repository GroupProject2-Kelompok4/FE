import React from "react";

interface FilterProps {
  labelText: string;
  defaultOption: string;
  options: string[];
  selected: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: React.FC<FilterProps> = ({
  labelText,
  defaultOption,
  options,
  selected,
  handleFilterChange,
}) => {
  return (
    <form className="text-left">
      <label>
        <span className="text-@19345E">{labelText}</span>
      </label>
      <div>
        <select
          name={labelText}
          className="text-@19345E border focus:border-@19345E"
          value={selected}
          onChange={handleFilterChange}
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Filter;
