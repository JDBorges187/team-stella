import React, {useState} from 'react';

const StarSpan = ({mutable, rating, setRating}) => {
    const [tempRating, setTempRating] = useState(rating);
    let starArray = [false, false, false, false, false];
    starArray.fill(true, 0, rating);
    if(!mutable){
        return (
            <span className='review-rating-display'>
                {starArray.map((filled, idx) => {
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
            <span className='review-rating-label'>Rating: </span>
            {starArray.map((filled, idx) => {
                return <i key={idx}
                className={"fa-star "  + (tempRating > idx ? "fas" : "far")}
                onClick={() => {
                    setRating(idx + 1);
                    setTempRating(idx + 1);
                }}
                onMouseEnter={() => {
                    setTempRating(idx + 1);
                }}
                onMouseLeave={() => {
                    setTempRating(rating);
                }}
                />;
            })}
        </span>
    )
}

export default StarSpan;
