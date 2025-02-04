/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Ceramics from "./components/ceramics";
import brand from "./components/brand";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import ProductListing from "./productlisting/page";
import Brand from "./components/brand";



export default function Home() {
  return (
   <>
   <Hero />
   <Ceramics />
   <Brand />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>


   </>
  );
}
