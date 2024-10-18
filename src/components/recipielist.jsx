import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    const [favorites, setFavorites] = useState([]); // State to track favorite recipes

    const handleFavorite = (id) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                // If already a favorite, remove it
                return prevFavorites.filter(favoriteId => favoriteId !== id);
            } else {
                // If not a favorite, add it
                return [...prevFavorites, id];
            }
        });
    };

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard 
                    key={recipe.id} 
                    data={recipe} 
                    onFavorite={handleFavorite} 
                    isFavorite={favorites.includes(recipe.id)} // Check if the recipe is a favorite
                />
            ))}
        </div>
    );
};

export default RecipeList;
