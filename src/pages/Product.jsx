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
                <div className="col-4">
                    <img src={product.image} alt="" />
                </div>
                <div className="col-8">
                    <h1>{product.name}</h1>
                    <h4>{product.brand}</h4>
                    <br></br>
                    <p>{product.description}</p>
                    <p>Marime: {product.size}</p>
                    <p>Culoare: {product.colour}</p>
                    <p>Material: {product.material}</p>
                    <br></br>
                    <button className="btn btn-secondary">Add to cart</button>
                </div>
            </div>
        </div>
    </Layout>
}

export default Product;