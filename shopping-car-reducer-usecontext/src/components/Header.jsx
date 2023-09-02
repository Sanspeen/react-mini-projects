import Filters from "./Filters";
import PropTypes from "prop-types";

export function Header({ changeFilters }) {
  Header.propTypes = {
    changeFilters: PropTypes.func,
  };

  return (
    <header>
      <h1>React shop 🛒</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
}
