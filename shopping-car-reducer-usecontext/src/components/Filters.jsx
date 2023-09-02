import "./Filters.css";
import { useState } from "react";
import PropTypes from "prop-types";
export default function Filters({ onChange }) {
  Filters.propTypes = {
    onChange: PropTypes.func,
  };

  const [minPrice, setMinPrice] = useState(0);
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryOnChange = (event) => {
    onChange((prevState) => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category" onChange={handleCategoryOnChange}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
