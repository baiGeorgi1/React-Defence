import { Link } from "react-router-dom";
import "./CatalogItem.Module.css";

const CatalogItem = () => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="quality-box ">
        <figure style={{ position: "absolute", textAlign: "center" }}>
          <img src="images/quality1.png" alt="#" />
          <h4>Манов мед</h4>
          <Link className="read_more" to="#">
            Виж
          </Link>
        </figure>
      </div>
    </div>
  );
};
export default CatalogItem;
