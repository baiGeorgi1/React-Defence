import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";

import Spinner from "./components/spinner/Spinner";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UserPaths from "./components/UsersPaths";
import Catalog from "./components/catalog/Catalog";
import More from "./components/more/More";
//import ContactUs from "./components/contactUs/ContactUs";
import CreateItem from "./components/createItem/CreateItem";
import Footer from "./components/footer/Footer";
import ErrorPage from "./components/404/404";

function App() {
  return (
    <AuthProvider>
      <div>
        {/* <Spinner /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<UserPaths />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/more/:itemId" element={<More />} />
          <Route path="/add" element={<CreateItem />} />
          <Route path="/*" element={<ErrorPage />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
