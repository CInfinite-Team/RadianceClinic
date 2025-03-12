import {memo} from 'react';
import DeleteCard from './DeleteCard';
import imageMapper from '../Blog/imageMapper';

const BlogDeleteCards = ({ currentCards ,Loading}) => {
    
    if (Loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-gray-200 p-8 rounded-lg shadow-lg">
                        <div className="h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-md"></div>
                        <div className="h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-md"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-md w-3/4"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (currentCards.length === 0 ) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No blogs available</p>
            </div>
        );
        
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 2xl:justify-items-start xl:justify-items-center   gap-8">
            {currentCards.map((card) => (
                <DeleteCard
                    key={card._id} 
                    id={card._id}
                    title={card.title}
                    description={card.introduction} 
                    category={card.category}
                    image={card.image || imageMapper[card.category]}
                    username={card.admin?.name} 
                    designation={card.admin?.speciality} 
                    uploadDate={card.createdAt} 
                    UserPhoto={card.admin?.profileImage}
                   
                />
            ))}
        </div>
    );
};

export default memo(BlogDeleteCards);