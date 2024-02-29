import Product from "@/components/product";
import { prisma } from "@/lib/prisma";


export default async function Home() {
  const products = await prisma.product.findMany() 
  //console.log(products)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      {products.map((products) => (
        <Product name={products.name} />
      ))}
    </main>
  );
}
