import { useEffect } from "react";

import SectionHeader from "../SectionHeader/SectionHeader";
import brownKeyboard from "../../assets/imgs/5ef8fff54e2cb54e4806bc8a6d19417b.jpg";
import { useState } from "react";

function ProductsType() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const numbers = [1, 2, 3];

    setData([...numbers]);
  }, []);

  return (
    <section className="product-type container my-5">
      <SectionHeader title={"Product"} />
      <div className="row">
        {data.map((item) => {
          return (
            <div className="product-type__card" key={item}>
              <button>See All</button>
              <img src={brownKeyboard} alt="brownKeyboard" />
              <div className="card-cover"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsType;
