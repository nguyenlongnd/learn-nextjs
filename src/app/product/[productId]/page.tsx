import { Metadata } from "next";
import Link from "next/link";
import React from "react";
type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `hot new ${params.productId}`,
  };
};
const ProductDetail = ({ params }: Props) => {
  return (
    <div>
      <h2>Product Detail {params.productId}</h2>
      <button>
        <Link href="../product" >
          product
        </Link>
      </button>
    </div>
  );
};

export default ProductDetail;
