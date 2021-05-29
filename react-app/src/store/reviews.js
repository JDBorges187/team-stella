//Contants
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'



//Actions
const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews
})

const addReview = (payload) => ({
    type: ADD_REVIEW,
    payload // payload is a review with id, rating, and review
})

const removeReview = (payload) => ({
    type: REMOVE_REVIEW,
    payload //review is deleted on server but sent back for easy removal
})

//Thunks

export const getProductReviews = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}/reviews`)

    if (!res.ok) throw res;

    const data = await res.json()
    dispatch(loadReviews(data.reviews))

}



export const newReview = (productId, review, rating) => async (dispatch) => {
    const res = await fetch("/api/reviews", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId,
            review,
            rating
        })
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(addReview(data))
    }
}


export const changeReview = (reviewId, review, rating) => async (dispatch) => {
    const res = await fetch("/api/reviews/" + reviewId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reviewId,
            review,
            rating
        })
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(removeReview(data))
        dispatch(addReview(data))
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    // console.log('###################')
    const res = await fetch("/api/reviews/" + reviewId, {
        method: 'DELETE',
    })

    if (res.ok) {
        const deletedReview = await res.json()
        dispatch(removeReview(deletedReview))
        return "success"
    }
}

//State

const initialState = {
    grid: null,
    detail: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case LOAD_REVIEWS:
            return { ...state, detail: payload }

        case ADD_REVIEW:
            return { ...state, detail: [payload, ...state.detail] }

        case REMOVE_REVIEW:
            return {
                ...state,
                detail: state.detail.filter((review) => review.id !== payload.id)
            }

        default:
            return state
    }
}
