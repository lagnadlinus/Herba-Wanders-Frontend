




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  closeCart: () => void;
  setCartCount: (count: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, closeCart, setCartCount }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
  const loadCartFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
    setCartTotal(cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0));
    setCartCount(cart.reduce((count: number, item: CartItem) => count + item.quantity, 0));
  };

    loadCartFromLocalStorage();
    
    const handleCartUpdate = () => loadCartFromLocalStorage();
    window.addEventListener("cartUpdated", handleCartUpdate);
    
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [setCartCount]);

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return isOpen ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[60]"
      onClick={closeCart}
    >
      <div
        className="w-96 h-full bg-white shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        {/* Notification Bar Color */}
        <div className="h-9 bg-[#84cc16]"></div>
        {/* Header Color with Shopping Title and Close Button */}
        <div className="h-16 bg-[#042f2e] flex items-center justify-between px-4 text-white">
          <h2 className="text-lg font-semibold">Shopping 🛍️</h2>
          <button
            className="text-2xl text-white hover:text-gray-300"
            onClick={closeCart}
            aria-label="Close Cart"
          >
            ✗
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 border rounded-md text-center"
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Your cart is empty 🛒 </p>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Total:</h3>
              <p className="text-2xl font-bold">${cartTotal.toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                navigate("/checkout");
                closeCart();
              }}
              className="w-full bg-[#84cc16] text-white py-3 rounded-md font-semibold hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Cart;
