import { stripe } from "@/lib/stripe";
import React from "react";
import ProductDetail from "@/components/ProductDetail";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
};

export default ProductPage;
