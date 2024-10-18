import './RecipeCard.css';
import { Link } from 'react-router-dom';
import { FaClock, FaHeart, FaShareAlt } from 'react-icons/fa'; // Import icons for UI enhancements

const RecipeCard = ({ data, onFavorite }) => {
    return (
        <Link to={'recipe/' + data.id} className="recipe-card-link">
            <div className="recipe-card-container">
                <img src={data.image} alt={data.title} className="recipe-img" />
                <div className="recipe-info">
                    <h2 className="recipe-title">{data.title}</h2>
                    <p className="recipe-description">{data.description}</p>
                    <div className="recipe-meta">
                        <span className="recipe-time">
                            <FaClock /> {data.cookingTime} min
                        </span>
                        <span className="recipe-serving">
                            Serves: {data.servings}
                        </span>
                        <span className="recipe-rating">{data.rating} ★</span>
                    </div>
                    <div className="dietary-badges">
                        {Array.isArray(data.dietaryLabels) && data.dietaryLabels.length > 0 ? (
                            data.dietaryLabels.map((label, index) => (
                                <span key={index} className="badge">{label}</span>
                            ))
                        ) : (
                            <span className="badge">No dietary labels</span>
                        )}
                    </div>
                    <div className="recipe-actions">
                        <button className="favorite-btn" onClick={() => onFavorite(data.id)}>
                            <FaHeart /> Favorite
                        </button>
                        <button className="share-btn">
                            <FaShareAlt /> Share
                        </button>
                    </div>
                </div>
                <div className="recipe-gradient"></div>
            </div>
        </Link>
    );
}

export default RecipeCard;
