import React from 'react';
import Card from './Card';
import imageMapper from './imageMapper';

const CardList = ({currentCards}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                currentCards.map((card) => (
                <Card
                    key={card.id}  // Ensure each card has a unique key (card.id is unique)
                    title={card.title}
                    description={card.description}
                    category={card.category}
                    image={imageMapper[card.category]}
                    username={card.username}
                    designation={card.designation}
                    uploadDate={card.uploadDate}
                />
                ))
            }
        </div>
    );
};

export default CardList;
