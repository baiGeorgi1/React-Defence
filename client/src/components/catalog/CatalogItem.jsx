import { Link } from "react-router-dom";
import "./CatalogItem.Module.css";

const CatalogItem = (item) => {
  return (
    <div className="quality-box ">
      <figure className="item-fig">
        <img className="item-img" src={item.imageUrl} alt={item.name} />
        <h4>{item.name}</h4>
        <Link className="image-btn" to={`more/${item._id}`}>
          Виж
        </Link>
      </figure>
    </div>
  );
};
export default CatalogItem;
