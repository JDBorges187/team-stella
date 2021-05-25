import React from 'react'

const ReviewCard = ({title, username, desc, rating}) => {
    return (
        <div className='pdt-dtl_review-card'>
            <h3>{title}</h3>
            <div className='review-card_rating'>{rating}/5</div>
            <span>{username}</span>
            <p>{desc}</p>
        </div>
    )
}

export default ReviewCard;
