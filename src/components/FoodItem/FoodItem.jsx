import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image, category }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const quantity = cartItems[id] || 0;

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} loading="lazy" />
                {category && <span className="food-item-category-tag">{category}</span>}
                {quantity === 0 ? (
                    <button 
                        type="button" 
                        className='add-btn' 
                        onClick={() => addToCart(id)}
                        title="Add to cart"
                    >
                        <img src={assets.add_icon_white} alt="Add" />
                    </button>
                ) : (
                    <div className='food-item-counter'>
                        <button 
                            type="button" 
                            className="counter-btn"
                            onClick={() => removeFromCart(id)}
                            title="Remove one"
                        >
                            <img src={assets.remove_icon_red} alt="Minus" />
                        </button>
                        <span className="counter-number">{quantity}</span>
                        <button 
                            type="button" 
                            className="counter-btn"
                            onClick={() => addToCart(id)}
                            title="Add one more"
                        >
                            <img src={assets.add_icon_green} alt="Plus" />
                        </button>
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <h3 className="food-item-title">{name}</h3>
                    <img src={assets.rating_starts} alt="Rating" className="rating-img" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div className="food-item-bottom">
                    <span className="food-item-price">${price.toFixed(2)}</span>
                    <span className="food-item-stock">In Stock</span>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;