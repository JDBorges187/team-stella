//Contants
const ADD_REVIEW = 'reviews/ADD_REVIEW'
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
            return {...state, detail: [payload,...state.detail] }

        default:
            return state
    }
}
