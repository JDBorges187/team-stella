import React from 'react'

const StarSpan = ({mutable, rating, setRating}) => {
    let starArray = [false, false, false, false, false];
    if(!mutable){
        starArray.fill(true, 0, rating);
        return (
            <span>
                {starArray.map(filled => {
                    if(filled){
                        return <i className="fas fa-star"></i>;
                    }
                    return <i className="far fa-star"></i>
                })}
            </span>
        )
    }
    //For add review section
    return (
        <span className='review-rating-picker'>
            <input type='radio' name='5' value='5' />
            <label htmlFor='5' className="fas fa-star"></label>
            <input type='radio' name='4' value='4' />
            <label htmlFor='4' className="fas fa-star"></label>
            <input type='radio' name='3' value='3' />
            <label htmlFor='3' className="fas fa-star"></label>
            <input type='radio' name='2' value='2' />
            <label htmlFor='2' className="fas fa-star"></label>
            <input type='radio' name='1' value='1' />
            <label htmlFor='1' className="far fa-star"></label>
        </span>
    )
}

export default StarSpan;
