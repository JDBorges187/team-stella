import React from 'react'

const StarSpan = ({mutable, rating}) => {
    if(!mutable){
        let starArray = [false, false, false, false, false];
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
        <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
        </span>
    )
}

export default StarSpan;
