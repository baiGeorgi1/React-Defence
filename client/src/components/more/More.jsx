import "./More.Module.css";

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as itemService from "../../API/itemApi";
import Authentication from "../../contexts/auth";

export default function More() {
  const { isAuthenticated, userId } = useContext(Authentication);
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  const { DeleteItemHandler } = useContext(Authentication);
  const navigate = useNavigate();

  useEffect(() => {
    itemService.getItem(itemId).then(setItem);
  }, [itemId]);

  const goBack = () => {
    navigate("/catalog");
  };

  const isOwner = userId === item._ownerId;

  const editHandler = () => {
    navigate(`/edit/${itemId}`);
  };
  const onDelete = async () => {
    console.log(itemId);
  };

  return (
    <div>
      <div className="about-page">
        <div className="about-text">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <br />
          <div className="about-buttons">
            {isAuthenticated && (
              <>
                {isOwner && (
                  <>
                    <button
                      className="about-btns"
                      id="delete"
                      to="about.html"
                      onClick={onDelete}
                    >
                      Изтрий
                    </button>
                    <button
                      className="about-btns"
                      id="edit"
                      onClick={editHandler}
                    >
                      Промени
                    </button>
                  </>
                )}
              </>
            )}

            <button
              type="button"
              className="about-btns"
              id="back"
              to="/catalog"
              onClick={goBack}
            >
              Назад
            </button>
          </div>
        </div>
        <div className="">
          <div className="about-image">
            <figure>
              <img src={item.imageUrl} alt="#" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
