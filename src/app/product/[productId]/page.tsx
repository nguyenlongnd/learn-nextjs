import React from 'react'

const ProductDetail = ({params} : {
    params : {productId:string}
}) => {
  return (
    <div>Product Detail {params.productId}</div>
  )
}

export default ProductDetail