import Layout from "../components/Layout";
import products from "../utils/products.json";

function Category(props) {
    const category = props.match.params.categoryName;
    const data = products[category];
    return <Layout>
       { data ? data.items.map(item => <h1 key={item.id}>{item.name}</h1>) : <h1>No products</h1>}
    </Layout>
}

export default Category;