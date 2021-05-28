import React from 'react'
import StarSpan from './StarSpan'

const ReviewCard = ({title, user, desc, rating}) => {
    return (
        <div className='pdt-dtl_review-card'>
            <h3>{user.firstname}</h3>
            <StarSpan mutable={false} rating={rating}/>
            {/* <span>{username}</span> */}
            <p>{desc}
            <button style={{marginLeft: "100px"}}>Edit</button>
            <button>Delete</button></p>
        </div>
    )
}

export default ReviewCard;
