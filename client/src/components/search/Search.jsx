import "./Search.Module.css";
import CatalogItem from "../catalog/CatalogItem";
import { useEffect, useState } from "react";
import * as product from "../../API/itemApi";

const searchValue = {
  searching: "",
};

export default function Search() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(searchValue);

  useEffect(() => {
    product
      .getAll()
      .then((result) =>
        setItems(
          result.filter((item) =>
            item.name.toLowerCase().includes(search.searching.toLowerCase()),
          ),
        ),
      )
      .catch((err) => console.log(err));
  }, [search]);
  const onSearch = (e) => {
    let value = "";

    if (e.target.type) {
      value = e.target.value;
    }
    setSearch((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  return (
    <>
      <section className="search">
        <h1>Search</h1>

        <form className="search-form" action="post">
          <input
            type="text"
            className="search-name"
            name="searching"
            value={items.name}
            onChange={onSearch}
            placeholder="Търсене по име..."
          />
          {/* 
          <button type="submit" className="btn-search">
            Търси
          </button> */}
        </form>
        {items.length > 0 ? (
          <div className="show-items">
            {items.map((item) => (
              <CatalogItem key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <div className="show-items">
            <h1>Няма намерени резултати!</h1>
          </div>
        )}
      </section>
    </>
  );
}
