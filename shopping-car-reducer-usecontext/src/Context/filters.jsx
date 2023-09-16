import { useState } from "react";
import { createContext } from "react";

// Create context.
export const FiltersContext = createContext();

// Create provider.
// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
