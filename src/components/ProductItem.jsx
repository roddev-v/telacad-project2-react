import { Link } from "react-router-dom";
import './ProductItem.css';

function ProductItem({ product, category }) {
    return <div className="product-item col-4 d-flex flex-column align-items-center mb-3">
        <img src={product.image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center">{product.name}</p>
        <p className="text-center">{product.price + product.currency}</p>
        <div className="d-flex justify-content-center align-items-center">
            <Link to={`/products/${category}/${product.id}`}>
                <button className="btn btn-link ">Cumpara!</button>
            </Link>
        </div>
    </div>
}

export default ProductItem;