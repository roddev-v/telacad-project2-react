import { connect } from "react-redux";
import {addToCart} from '../redux/actions/product.actions';

import Layout from "../components/Layout";
import products from "../utils/products.json";

function Product(props) {
    const productId = props.match.params.productId;
    const category = props.match.params.categoryName;

    const items = products[category].items;
    const product = items.find(p => p.id === +productId);
    return <Layout>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <img src={product.image} alt="" />
                </div>
                <div className="col-12 col-sm-6">
                    <h1>{product.name}</h1>
                    <h4>{product.brand}</h4>
                    <br></br>
                    <p>{product.description}</p>
                    <p>Marime: {product.size}</p>
                    <p>Culoare: {product.colour}</p>
                    <p>Material: {product.material}</p>
                    <br></br>
                    <button onClick={() => props.addItemToCart(product)} className="btn btn-secondary">Add to cart</button>
                </div>
            </div>
        </div>
    </Layout>
}


function dispatchToProps(dispatch) {
    return {
        addItemToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(null, dispatchToProps)(Product);