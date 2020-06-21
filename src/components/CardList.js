import React from 'react';
import Card from './Card';

const CardList = ( {heroes} ) => {
    
    return (
        <div>
            {
                heroes.map((hero, i) => {
                    return (
                        <Card
                            key={heroes[i].id}
                            name={heroes[i].name}
                            alias={heroes[i].alias}
                            image={heroes[i].image}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;