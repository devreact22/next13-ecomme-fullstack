import Product from "@/components/product";
import { prisma } from "@/lib/prisma";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default async function Home() {
  const products = await prisma.product.findMany() 
  //console.log(products)

  return (
    <main className="flex flex-col items-center justify-between text-black">
      {/* {products.map((product) => (
        <Product product={product} />
      ))} */}
      <Hero />
      <Pricing products={products} />
    </main>
  );
}
