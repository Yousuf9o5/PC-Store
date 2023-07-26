import { useEffect } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import brownKeyboard from "../../assets/imgs/5ef8fff54e2cb54e4806bc8a6d19417b.jpg";
import { useState } from "react";
import Observer from "../../observer";

function ProductsCard({ delay }: any) {
  useEffect(() => {
    Observer("products-card", "show");
  }, []);

  return (
    <div className="products-card" style={{ transitionDelay: `${delay}ms` }}>
      <button>See All</button>
      <img src={brownKeyboard} alt="brownKeyboard" />
      <div className="card-cover"></div>
    </div>
  );
}

function ProductsType() {
  const [data, setData] = useState<number[]>([]);
  var delay = 100;

  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    setData([...numbers]);
  }, []);

  return (
    <section className="product-type container my-5">
      <SectionHeader title={"Product"} />
      <div className="row">
        {data.map((item) => {
          return <ProductsCard delay={`${delay * item}`} key={item} />;
        })}
      </div>
    </section>
  );
}

export default ProductsType;
