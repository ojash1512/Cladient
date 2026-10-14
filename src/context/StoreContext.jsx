import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem("cartItems");
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [appliedPromo, setAppliedPromo] = useState("");

    useEffect(() => {
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch (e) {
            console.error("Failed to save cart to localStorage", e);
        }
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const count = prev[itemId] || 0;
            return { ...prev, [itemId]: count + 1 };
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const count = prev[itemId] || 0;
            if (count <= 1) {
                const updated = { ...prev };
                delete updated[itemId];
                return updated;
            }
            return { ...prev, [itemId]: count - 1 };
        });
    };

    const clearCart = () => {
        setCartItems({});
        setPromoDiscount(0);
        setAppliedPromo("");
    };

    const getTotalCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCount += cartItems[item];
            }
        }
        return totalCount;
    };

    const getSubtotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === String(item));
                if (itemInfo && typeof itemInfo.price === "number") {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartAmount = () => {
        const subtotal = getSubtotalAmount();
        if (subtotal === 0) return 0;
        const total = subtotal - promoDiscount;
        return total > 0 ? total : 0;
    };

    const applyPromoCode = (code) => {
        const clean = code.trim().toUpperCase();
        if (clean === "MENS10" || clean === "FASHION10") {
            const subtotal = getSubtotalAmount();
            const discount = Math.round(subtotal * 0.1);
            setPromoDiscount(discount);
            setAppliedPromo(clean);
            return { success: true, message: "10% discount applied successfully!" };
        } else if (clean === "SAVE20") {
            setPromoDiscount(20);
            setAppliedPromo(clean);
            return { success: true, message: "$20 promo discount applied!" };
        } else {
            return { success: false, message: "Invalid promo code. Try MENS10 or SAVE20" };
        }
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getSubtotalAmount,
        getTotalCartAmount,
        getTotalCartCount,
        searchTerm,
        setSearchTerm,
        promoDiscount,
        appliedPromo,
        applyPromoCode
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;