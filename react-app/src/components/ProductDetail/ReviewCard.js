import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StarSpan from './StarSpan'
import { deleteReview } from '../../store/reviews'

const ReviewCard = ({ rvwId, title, user, desc, rating }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteReview(id))
    }

    return (
        <div className='pdt-dtl_review-card'>
            <h3>{user.firstname}</h3>
            <StarSpan mutable={false} rating={rating} />
            {/* <span>{username}</span> */}
            <p>{desc}
                <button style={{ marginLeft: "100px" }}>Edit</button>
                <button onClick={() => handleDelete(rvwId)}>Delete</button></p>
        </div>
    )
}

export default ReviewCard;
