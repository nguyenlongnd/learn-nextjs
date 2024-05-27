import React from 'react'
import NotFoundViewDetailPage from './not-found'
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const ReviewsDetail = ({params} : {
    params: {reviewsId: string, productId: string}
}) => {
    if(Number(params.reviewsId) > 1000) {
        return <NotFoundViewDetailPage/>
    }
    const random = getRandomInt(2);
    if(random === 1) {
      throw new Error('error product id');
    }
  return (
    <div>this is ReviewsDetail {params.productId} {params.reviewsId}</div>
  )
}

export default ReviewsDetail