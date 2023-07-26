import { Link } from "react-router-dom";
import LightSearch from "../../assets/icons/search.svg";
import backgroundImg from "../../assets/imgs/noonite-wavez-mechanical-keyboard 1.png";
import { useEffect } from "react";
import Observer from "../../observer";

function HomeHeader() {
  useEffect(() => {
    Observer("search-section", "show-search");
  }, []);

  return (
    <section className="home-header">
      <div className="dark-blue"></div>
      <div className="img-container">
        <img src={backgroundImg} alt="bg" className="bg-img" />
      </div>
      <div className="search-section">
        <h1 className="header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          error!
        </h1>
        <div className="search-container">
          <Link to="/" className="search-button">
            <img src={LightSearch} alt="search" />
          </Link>
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
