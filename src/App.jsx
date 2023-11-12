import Quality from "./components/Quality";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Footer from "./components/Footer";
import Honey from "./components/Honey";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div>
      <Spinner/>
      <Header />
      {/* Honey for homePage */}
      <Honey />

      <Quality />

      <About />

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
