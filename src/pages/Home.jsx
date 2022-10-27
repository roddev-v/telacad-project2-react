import React from "react";
import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";
import products from "../utils/products.json";

function Home({}) {
  const categoriesKeys = Object.keys(products);
  const categories = Object.values(products);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {categories.map((category, index) => (
            <HomeCategory
              key={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
              category={categoriesKeys[index]}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
