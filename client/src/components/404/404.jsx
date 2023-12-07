import { useNavigate } from "react-router-dom";
import "./404.Module.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/catalog");
  };
  return (
    <div className="error_container">
      <div className="">
        <button onClick={goBack} className="error_btn">
          Назад
        </button>
      </div>
    </div>
  );
};
export default ErrorPage;
