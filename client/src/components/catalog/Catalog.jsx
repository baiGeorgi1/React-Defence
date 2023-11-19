import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <div className="quality">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Quality OF Honey For sale</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but There are many variations of passages of Lorem Ipsum
                available, but
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <CatalogItem />
          <div className="col-sm-12">
            <Link className="read_more" to="Javascript:void(0)">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
