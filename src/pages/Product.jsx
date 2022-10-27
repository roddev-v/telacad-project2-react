import Layout from "../components/Layout";
import products from "../utils/products.json";

function Product(props) {
    const productId = props.match.params.productId;
    const category = props.match.params.categoryName;

    const items = products[category].items;
    const product = items.find(p => p.id === +productId);
    return <Layout>
        {product.name}
    </Layout>
}

export default Product;