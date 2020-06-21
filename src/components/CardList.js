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
                            username={heroes[i].username}
                            email={heroes[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;