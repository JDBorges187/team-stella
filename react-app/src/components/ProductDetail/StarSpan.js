import React from 'react';


const StarSpan = ({mutable, rating, setRating}) => {
    let starArray = [false, false, false, false, false];
    starArray.fill(true, 0, rating);
    if(!mutable){
        return (
            <span>
                {starArray.map((filled, idx) => {
                    console.log(filled);
                    if(filled){
                        return <i key={idx} className="fas fa-star" />;
                    }
                    return <i key={idx} className="far fa-star" />;
                })}
            </span>
        )
    }

    // //For add review section
    return (
        <span className='review-rating-picker'>
            {starArray.map((filled, idx) => {
                    if(filled){
                        return <i key={idx} className="fas fa-star" onClick={() => setRating(idx + 1)}></i>;
                    }
                    return <i key={idx} className="far fa-star" onClick={() => setRating(idx + 1)}></i>
                })}
        </span>
    )
}

export default StarSpan;
