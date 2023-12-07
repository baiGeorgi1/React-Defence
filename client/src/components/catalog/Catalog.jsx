import { useEffect, useState } from "react";
import * as product from "../../API/itemApi";

import "./Catalog.Module.css";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const [items, setItems] = useState([]);

  // TODO remove OBJECT When migrate
  useEffect(() => {
    product.getAll().then((result) => setItems(result));
  }, []);
  return (
    <section>
      <div className="catalog-main">
        <h2>Видове Пчелен мед и ползите от него!</h2>
        <p>
          Този сладък еликсир, неслучайно е наричан “течно злато”, тъй като той
          е изключително ценен за нашето здраве и може да допринесе нашето
          здравословно състояние, като намира приложения при лечение на различни
          болестни състояния. Полезното действие на меда е добре разпространено,
          изследвано и описано в много научни разработки. Поради тази причина, в
          тази статия ще разгледаме основните свойства и характеристики на
          различни видове мед.
        </p>
      </div>
      <div className="show-items">
        {items.map((item) => (
          <CatalogItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}
