import { Link } from "react-router-dom";
import "./Home.Module.css";

const Home = () => {
  return (
    <div className="carousel-item active">
      <div className="row d_flex">
        <div className="col-md-7">
          <div className="my-css">
            <h2>Пчелен мед от нас и нашите малки работнички за Вас!</h2>
            <br />
            <br />
            <p>Натурални продукти от нашият пчелин!</p>
            <br />
            <br />
            <Link class="our_shop" to="/catalog">
              Към е-магазина
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <figure>
            <img className="image" src="images/100%.png" />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Home;
