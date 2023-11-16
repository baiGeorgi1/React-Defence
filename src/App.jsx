import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Honey from "./components/home/Honey";
import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import About from "./components/about/About";
import ContactUs from "./components/contactUs/ContactUs";
import Quality from "./components/quality/Quality";
import Home from "./components/home/Home";

// import Login from "./components/users/login/Login";

function App() {
  return (
    <div>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Honey />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
