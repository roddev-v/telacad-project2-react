import { Link } from "react-router-dom";

function ProductItem({ product, category }) {
    return <div className="col-4">
        <img className="w-100" src={product.image} alt=""></img>
        <h3 className="text-center">{product.name}</h3>
        <h4 className="text-center">{product.price} {product.currency}</h4>
        <div className="d-flex justify-content-center align-items-center">
            <Link to={`/products/${category}/${product.id}`}>
                <button className="btn btn-link ">Cumpara!</button>
            </Link>
        </div>
    </div>
}

export default ProductItem;