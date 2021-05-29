import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StarSpan from './StarSpan'
import { deleteReview } from '../../store/reviews'

const ReviewCard = ({ rvwId, showEdit, user, desc,
    rating, setEditReview, editReview, setAddReview,
    setReviewId, setReview, setRating }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteReview(id))
    }


    if (showEdit && editReview) return null

    return (
        <div className='pdt-dtl_review-card'>
            <div>
                <h3>{user.firstname}</h3>
                {showEdit && (
                    <button style={{ marginLeft: "auto" }}
                        onClick={() => {
                            setAddReview(true)
                            setEditReview(true);
                            setReview(desc);
                            setRating(rating);
                            setReviewId(rvwId);
                        }}><i className="fas fa-edit"></i></button>
                )}
                {showEdit && (
                    <button onClick={() => handleDelete(rvwId)}><i className="fas fa-trash"></i></button>
                )}
            </div>

            <StarSpan mutable={false} rating={rating} />
            {/* <span>{username}</span> */}
            <p>
                {desc}

            </p>
        </div>
    )
}

export default ReviewCard;
