import { useState } from "react";

import "./InputSelect.css";
import type { DropdownItem } from "../../types/dropdownItem";

interface TimeframeDropdownProps {
  items: DropdownItem[];
  disabled?: boolean;
  initialValue?: DropdownItem;
  onChange: (value: string) => void;
}

export const InputSelect: React.FC<TimeframeDropdownProps> = ({
  items,
  disabled = false,
  initialValue = { text: "Placeholder", value: "" },
  onChange,
}) => {
  const [selectedValue, setSelectedValue] =
    useState<DropdownItem>(initialValue);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function handleSelectItem(item: DropdownItem) {
    setSelectedValue(item);
    setShowDropdown(false);
    onChange(item.value);
  }

  return (
    <div className="input-select-container">
      <button
        className="input-select-button"
        disabled={disabled}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedValue.text}{" "}
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <button
              className="dropdown-item"
              key={item.value}
              onClick={() => handleSelectItem(item)}
            >
              {item.text}{" "}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
