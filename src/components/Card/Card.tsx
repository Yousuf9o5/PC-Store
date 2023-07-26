import { useEffect } from "react";
import img from "../../assets/imgs/5ef8fff54e2cb54e4806bc8a6d19417b.jpg";
import Observer from "../../observer";

function Card({ delay }: any) {
  useEffect(() => {
    Observer("app-card", "translate-card");
  }, []);

  return (
    <div className="app-card" style={{ transitionDelay: `${delay || null}` }}>
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <div className="content">
        <p className="header m-0">Brown Keyboard</p>
        <p className="description m-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi
          mollitia cumque dolore porro culpa
        </p>
        <p className="price m-0">50, 000 IQD</p>
        <button>View Product</button>
      </div>
    </div>
  );
}

export default Card;
