import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="carousel-item active">
      <div className="carousel-caption relative">
        <div className="row d_flex">
          <div className="col-md-7">
            <div className="board">
              <h3>You can Get Pure Hony Here</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
              </p>
              <Link className="read_more" to="contact.html">
                Contact{" "}
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="banner_img">
              <figure>
                <img className="img_responsive" src="images/banner_img.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
