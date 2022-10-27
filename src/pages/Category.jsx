import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import products from "../utils/products.json";

function Category(props) {
    const category = props.match.params.categoryName;
    const data = products[category];
    return <Layout>
        <div className="container">
            <div className="row">
                {data ? data.items.map(item => <ProductItem
                    key={item.id}
                    product={item}
                    category={category} />) : <h1>No products</h1>}
            </div>
        </div>
    </Layout>
}

export default Category;