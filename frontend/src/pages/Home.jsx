import HeroCarousel from "../components/HeroCarosel/HeroCarousel";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import AppliancesContainer from "../components/AppliancesContainer";
import FurnitureContainer from "../components/FurnitureContainer";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <CategoryCards />
      <FurnitureContainer />
      <Banner
        image="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/conviction_update.jpeg"
        title="Welcome to HomeHaven"
        subtitle="Explore stylish furniture and appliances"
      />
      <AppliancesContainer />

      <Banner
        image="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/why_rent_desktop_banner_may5.jpg"
        title="Welcome to HomeHaven"
        subtitle="Explore stylish furniture and appliances"
      />
    </>
  );
};

export default Home;
