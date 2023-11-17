import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import About from "./components/about/About";
import ContactUs from "./components/contactUs/ContactUs";
import Recipes from "./components/recipe/Recipes";
import Home from "./components/home/Home";

// import Login from "./components/users/login/Login";

function App() {
  return (
    <div>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
