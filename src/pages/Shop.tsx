import { Hero, Collections, Offers } from "../components/index";

import data_product from "../assets/data";
import new_collections from "../assets/new_collections";

const Shop = () => {
  return (
    <section>
      <Hero />
      <Collections title="Popular in Women" collections={data_product} />
      <Offers />
      <Collections title="New Collections" collections={new_collections} />
    </section>
  );
};

export default Shop;
