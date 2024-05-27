'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const OrderProduct = () => {
    const router = useRouter()
    const handleOrderProduct = () => {
        router.replace('/product')
    }
  return (
    <div>
        <h2>To order product, click to button order</h2>
        <button onClick={handleOrderProduct}> Order product now!</button>
    </div>
  )
}

export default OrderProduct