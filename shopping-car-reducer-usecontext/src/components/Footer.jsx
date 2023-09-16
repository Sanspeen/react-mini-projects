import PropTypes from "prop-types";
import "./Footer.css";

export function Footer({ filters }) {
  Footer.propTypes = {
    filters: PropTypes.any,
  };
  // const { filters } = useFilters()

  return (
    <footer className="footer">
      
      {
        JSON.stringify(filters, null, 2)
      }
      
      
      {/*<h4>
            Prueba técnica de React ⚛️ － <span>@Frank0</span>
        </h4>
        <h5>Shopping Cart con useContext & useReducer</h5>*/}
    </footer>
  );
}
