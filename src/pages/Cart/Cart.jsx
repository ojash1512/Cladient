import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { 
        cartItems, 
        food_list, 
        addToCart, 
        removeFromCart, 
        getSubtotalAmount, 
        getTotalCartAmount, 
        promoDiscount, 
        appliedPromo, 
        applyPromoCode 
    } = useContext(StoreContext);

    const [promoInput, setPromoInput] = useState("");
    const [promoFeedback, setPromoFeedback] = useState(null);
    const navigate = useNavigate();

    const subtotal = getSubtotalAmount();
    const deliveryFee = subtotal > 0 ? 2 : 0;
    const finalTotal = subtotal > 0 ? Math.max(0, subtotal - promoDiscount + deliveryFee) : 0;

    const handleApplyPromo = (e) => {
        e.preventDefault();
        if (!promoInput.trim()) return;
        const res = applyPromoCode(promoInput);
        setPromoFeedback(res);
    };

    const hasItems = food_list.some((item) => cartItems[item._id] > 0);

    return (
        <div className='cart'>
            <div className="cart-header">
                <h1>Your Shopping Cart</h1>
                <p>Review your selected men's style essentials</p>
            </div>

            {!hasItems ? (
                <div className="cart-empty-view">
                    <div className="cart-empty-icon">🛍️</div>
                    <h2>Your cart is currently empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <button className="cart-shop-now-btn" onClick={() => navigate('/')}>
                        Explore Men's Collection
                    </button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        <div className="cart-items-title">
                            <p>Product</p>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                        <hr className="cart-divider" />
                        {food_list.map((item) => {
                            const qty = cartItems[item._id] || 0;
                            if (qty > 0) {
                                return (
                                    <div key={item._id} className="cart-item-row">
                                        <div className='cart-items-title cart-items-item'>
                                            <div className="cart-img-wrap">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <p className="cart-item-name">{item.name}</p>
                                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                            <div className="cart-qty-controls">
                                                <button 
                                                    type="button" 
                                                    onClick={() => removeFromCart(item._id)}
                                                    className="qty-btn"
                                                    title="Decrease"
                                                >
                                                    -
                                                </button>
                                                <span className="qty-val">{qty}</span>
                                                <button 
                                                    type="button" 
                                                    onClick={() => addToCart(item._id)}
                                                    className="qty-btn"
                                                    title="Increase"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p className="cart-item-total">${(item.price * qty).toFixed(2)}</p>
                                            <button 
                                                type="button"
                                                onClick={() => {
                                                    // Remove all quantity of this item
                                                    for (let i = 0; i < qty; i++) {
                                                        removeFromCart(item._id);
                                                    }
                                                }} 
                                                className='cart-remove-cross'
                                                title="Remove all"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <hr className="cart-divider-subtle" />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <div className='cart-bottom'>
                        <div className="cart-total">
                            <h2>Order Summary</h2>
                            <div className="cart-summary-box">
                                <div className="cart-total-details">
                                    <p>Subtotal</p>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                {promoDiscount > 0 && (
                                    <div className="cart-total-details discount-row">
                                        <p>Promo Discount ({appliedPromo})</p>
                                        <p>-${promoDiscount.toFixed(2)}</p>
                                    </div>
                                )}
                                <div className="cart-total-details">
                                    <p>Standard Delivery</p>
                                    <p>${deliveryFee.toFixed(2)}</p>
                                </div>
                                <hr />
                                <div className="cart-total-details total-row">
                                    <b>Final Total</b>
                                    <b>${finalTotal.toFixed(2)}</b>
                                </div>
                            </div>
                            <Link to="/order">
                                <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                            </Link>
                        </div>

                        <div className="cart-promocode">
                            <div className="promo-container">
                                <h3>Have a Promo Code?</h3>
                                <p>Use <strong>MENS10</strong> for 10% off or <strong>SAVE20</strong> for $20 off</p>
                                <form onSubmit={handleApplyPromo} className='cart-promocode-input'>
                                    <input 
                                        type="text" 
                                        placeholder='Enter promo code...' 
                                        value={promoInput}
                                        onChange={(e) => setPromoInput(e.target.value)}
                                    />
                                    <button type="submit">Apply</button>
                                </form>
                                {promoFeedback && (
                                    <p className={`promo-feedback ${promoFeedback.success ? 'success' : 'error'}`}>
                                        {promoFeedback.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;