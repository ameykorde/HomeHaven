import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/HeroCarosel/HeroCarousel"
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
  return (
    <>
      <NavBar />
      {/* <HeroCarousel /> */}
      <ProductPage/>
    </>
  );
}

export default App;
