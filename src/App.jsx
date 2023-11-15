import { Route, Routes } from "react-router-dom";
import Quality from "./components/Quality";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Footer from "./components/Footer";
import Honey from "./components/Honey";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      {/* <Spinner /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Quality />} />
      </Routes>
      {/* <Header /> */}
      {/* Honey for homePage */}

      {/* <Quality /> */}

      {/* <About /> */}

      {/* <ContactUs /> */}

      <Footer />
    </div>
  );
}

export default App;
