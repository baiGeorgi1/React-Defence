import Quality from "./components/Quality";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Footer from "./components/Footer";
import Honey from "./components/Honey";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <div className="loader_bg">
				<div className="loader">
					<img src="images/loading.gif" alt="#" />
				</div>
			</div> */}
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
