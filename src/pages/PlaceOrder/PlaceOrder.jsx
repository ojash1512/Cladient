import React, { useContext, useState } from "react";
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
    const { 
        getSubtotalAmount, 
        promoDiscount, 
        appliedPromo, 
        clearCart 
    } = useContext(StoreContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India',
        phone: ''
    });

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState("");

    const subtotal = getSubtotalAmount();
    const deliveryFee = subtotal > 0 ? 2 : 0;
    const finalTotal = subtotal > 0 ? Math.max(0, subtotal - promoDiscount + deliveryFee) : 0;

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (subtotal === 0) {
            alert("Your cart is empty! Please add items before placing an order.");
            return;
        }

        const generatedOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
        setOrderId(generatedOrderId);
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <div className="order-success-screen">
                <div className="order-success-card">
                    <div className="success-icon">🎉</div>
                    <h2>Order Confirmed!</h2>
                    <p className="order-id-badge">Order ID: #{orderId}</p>
                    <p className="success-msg">
                        Thank you, <strong>{formData.firstName} {formData.lastName}</strong>! Your order for men's fashion essentials has been placed successfully.
                    </p>
                    <div className="order-summary-pill">
                        <div>
                            <span>Payment Method:</span>
                            <strong>{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'card' ? 'Credit/Debit Card' : 'UPI Payment'}</strong>
                        </div>
                        <div>
                            <span>Total Paid:</span>
                            <strong>${finalTotal.toFixed(2)}</strong>
                        </div>
                        <div>
                            <span>Delivery To:</span>
                            <strong>{formData.city}, {formData.state} - {formData.zipCode}</strong>
                        </div>
                    </div>
                    <button className="back-home-btn" onClick={() => navigate('/')}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    if (subtotal === 0) {
        return (
            <div className="order-empty-cart">
                <h2>No items in cart to checkout</h2>
                <p>Please browse our men's collection and add products to proceed with delivery.</p>
                <button onClick={() => navigate('/')} className="empty-browse-btn">
                    Browse Collection
                </button>
            </div>
        );
    }

    return (
        <form className='place-order' onSubmit={handlePlaceOrder}>
            <div className="place-order-left">
                <h2 className="title">Delivery Information</h2> 
                <div className="multi-fields">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder='First name' 
                        value={formData.firstName} 
                        onChange={onChangeHandler} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder='Last name' 
                        value={formData.lastName} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </div>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='Email address' 
                    value={formData.email} 
                    onChange={onChangeHandler} 
                    required 
                />
                <input 
                    type="text" 
                    name="street" 
                    placeholder='Street Address' 
                    value={formData.street} 
                    onChange={onChangeHandler} 
                    required 
                /> 

                <div className="multi-fields">
                    <input 
                        type="text" 
                        name="city" 
                        placeholder='City' 
                        value={formData.city} 
                        onChange={onChangeHandler} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="state" 
                        placeholder='State / Province' 
                        value={formData.state} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </div>
                <div className="multi-fields">
                    <input 
                        type="text" 
                        name="zipCode" 
                        placeholder='Zip / Postal Code' 
                        value={formData.zipCode} 
                        onChange={onChangeHandler} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="country" 
                        placeholder='Country' 
                        value={formData.country} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </div>
                <input 
                    type="tel" 
                    name="phone" 
                    placeholder='Phone Number' 
                    value={formData.phone} 
                    onChange={onChangeHandler} 
                    required 
                />
            </div>

            <div className="place-order-right">
                <div className="cart-total checkout-box">
                    <h2>Order Summary</h2>
                    <div className="order-price-lines">
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
                            <p>Delivery Fee</p>
                            <p>${deliveryFee.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details total-row">
                            <b>Total Amount</b>
                            <b>${finalTotal.toFixed(2)}</b>
                        </div> 
                    </div>

                    <div className="payment-method-section">
                        <h3>Payment Method</h3>
                        <div className="payment-options">
                            <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="cod" 
                                    checked={paymentMethod === 'cod'} 
                                    onChange={(e) => setPaymentMethod(e.target.value)} 
                                />
                                <span>Cash on Delivery (COD)</span>
                            </label>
                            <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="card" 
                                    checked={paymentMethod === 'card'} 
                                    onChange={(e) => setPaymentMethod(e.target.value)} 
                                />
                                <span>Credit / Debit Card</span>
                            </label>
                            <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="upi" 
                                    checked={paymentMethod === 'upi'} 
                                    onChange={(e) => setPaymentMethod(e.target.value)} 
                                />
                                <span>UPI / Instant NetBanking</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="place-order-btn">
                        CONFIRM & PLACE ORDER (${finalTotal.toFixed(2)})
                    </button>
                </div> 
            </div>
        </form>
    );
};

export default PlaceOrder;