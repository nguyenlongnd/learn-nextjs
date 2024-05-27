import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <ul>
        <h2>Product</h2>
      </ul>
      <li>
        <Link href="product/1"> Product 1</Link>
      </li>
      <li>
        <Link href="product/2"> Product 2</Link>
      </li>
      <li>
        <Link href="product/3" replace>
          Product 3
        </Link>
      </li>
    </div>
  );
};

export default Product;
