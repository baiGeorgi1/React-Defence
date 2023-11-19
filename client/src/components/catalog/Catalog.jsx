import "./Catalog.Module.css";
import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <div className="quality">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="catalog-main">
              <h2>Видове Пчелен мед и ползите от него!</h2>
              <p>
                Този сладък еликсир, неслучайно е наричан “течно злато”, тъй
                като той е изключително ценен за нашето здраве и може да
                допринесе нашето здравословно състояние, като намира приложения
                при лечение на различни болестни състояния. Полезното действие
                на меда е добре разпространено, изследвано и описано в много
                научни разработки. Поради тази причина, в тази статия ще
                разгледаме основните свойства и характеристики на различни
                видове мед.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <CatalogItem />
          <div className="col-sm-12">
            <Link className="read_more" to="#">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
