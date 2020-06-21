import React from 'react';

const Card = ({ name, alias, image }) => {
    
    return (
        <div className="tc bg-navy dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`${image}`} alt={`porttrait of ${alias}`}/>
            <div>
                <h2>{alias}</h2>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default Card;