import { Link } from "react-router-dom";

function HomeCategory({ name, description, image, category }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <Link to={`/category/${category}`}>
        <img className="w-100" src={image}></img>
        <h1>{name}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default HomeCategory;
