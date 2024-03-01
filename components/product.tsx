"use client";

import { Product as ProductType } from "@prisma/client";
import { Container } from "@/components/container";

interface ProductProps {
  // import già i tipi dal DB (schema.prisma)
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  return (
    <>
  
    <div className="text-left px-6 py-4 transition-colors duration-200 transform rounded-lg ">
      <p className="text-lg font-medium text-gray-800 ">{product.name}</p>
      <h4 className="mt-2 font-bold text-gray-800 ">
        € {product.price.toString()}
      </h4>
      <p className="text-small font-semibold text-gray-800 ">
        {product.description}
      </p>
      <div className="gap-4 mb-4 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
   
    </>
  );
  
}

// export default function Product({ product }: ProductProps) {
//   const { name, description, price, stripePriceId } = product;
//   const featured = name === "Premium";
//   return (
//     // <section
//     //   className={clsx(
//     //     "flex flex-col rounded-3xl px-6 sm:px-8",
//     //     featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8"
//     //   )}
//     // >
//       <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
//     //   <p
//     //     className={clsx(
//     //       "mt-2 text-base",
//     //       featured ? "text-white" : "text-slate-400"
//     //     )}
//     //   >
//         {description}
//       </p>
//       <p className="order-first font-display text-5xl font-light tracking-tight text-white">
//         € {price.toString()}
//       </p>

//       {/* <Button
//         variant={featured ? "solid" : "outline"}
//         color="white"
//         className="mt-8"
//         aria-label={`Get started with the ${name} plan for ${price}`}
//         onClick={() => handlePayment(stripePriceId)}
//       >
//         Get started
//       </Button> */}
//     // </section>
//   );
// }
