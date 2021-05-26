import React from 'react'
import StarSpan from './StarSpan'

const ReviewCard = ({title, username, desc, rating}) => {
    return (
        <div className='pdt-dtl_review-card'>
            <h3>{username}</h3>
            <StarSpan mutable={false} rating={rating}/>
            {/* <span>{username}</span> */}
            <p>{desc}</p>
        </div>
    )
}

export default ReviewCard;
