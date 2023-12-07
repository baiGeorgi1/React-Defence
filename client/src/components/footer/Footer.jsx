import { Link } from "react-router-dom";
import "./Footer.Module.css";

export default function Footer() {
  return (
    <footer className="footer">
      © 2023 All Rights Reserved. {"Edited by Georgi Georgiev."}
      <Link to="https://html.design/"> Free html Templates</Link>
    </footer>
  );
}
