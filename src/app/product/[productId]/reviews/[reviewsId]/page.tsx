import React from 'react'
import NotFoundViewDetailPage from './not-found'

const ReviewsDetail = ({params} : {
    params: {reviewsId: string, productId: string}
}) => {
    if(Number(params.reviewsId) > 1000) {
        return <NotFoundViewDetailPage/>
    }
  return (
    <div>this is ReviewsDetail {params.productId} {params.reviewsId}</div>
  )
}

export default ReviewsDetail