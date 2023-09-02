import { AddToCartIcon } from "./Icons";
import "./Products.css";
import PropTypes from 'prop-types';

export function Products({ products }) {
    
    //Validate the props that this component required as typo
    Products.propTypes = {
        products : PropTypes.array
    }

    return (
    <mian className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <strong>
                    {product.title}
                </strong> - ${product.price}
            </div>
            <div>
                <button>
                    <AddToCartIcon/>
                </button>
            </div>
          </li>
        ))}
      </ul>
    </mian>
  );
}
