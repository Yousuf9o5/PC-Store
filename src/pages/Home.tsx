import HomeHeader from "../components/HomeHeader/HomeHeader";
import KeyboardShowcase from "../components/KeyboardShowcase/KeyboardShowcase";
import NewItems from "../components/NewItems/NewItems";
import ProductsType from "../components/ProductsTypes/ProductsType";

function Home() {
  return (
    <>
      <HomeHeader />

      <NewItems />

      <KeyboardShowcase />

      <ProductsType />
    </>
  );
}

export default Home;
