



import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [shipping] = useState(5); // Flat rate shipping
  const [discount, setDiscount] = useState(0); // Discount for coupon
  const [coupon, setCoupon] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [billingDetails, setBillingDetails] = useState(() => {
    const savedDetails = localStorage.getItem("billingDetails");
    return savedDetails
      ? JSON.parse(savedDetails)
      : { name: "", email: "", address: "", city: "", postalCode: "" };
  });

  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      setIsCartLoading(true);
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
        setCartTotal(
          cart.reduce(
            (sum: number, item: CartItem) => sum + item.price * item.quantity,
            0
          )
        );
      } catch (error) {
        console.error("Error loading cart:", error);
        setCartItems([]);
        setCartTotal(0);
      } finally {
        setIsCartLoading(false);
      }
    };

    loadCartFromLocalStorage();

    // Listen for cart updates
    const handleCartUpdate = () => loadCartFromLocalStorage();
    window.addEventListener("cartUpdated", handleCartUpdate);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  // Save billing details to localStorage
  useEffect(() => {
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
  }, [billingDetails]);

  // Handle input changes for billing details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Validate billing details
  const validateBillingDetails = (): boolean => {
    if (!billingDetails.name.trim() || !billingDetails.email.trim()) {
      toast.error("Name and email are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(billingDetails.email)) {
      toast.error("Invalid email address.");
      return false;
    }
    if (!billingDetails.postalCode.match(/^\d{5}$/)) {
      toast.error("Postal code must be 5 digits.");
      return false;
    }
    return true;
  };

  // Handle placing an order
  const handlePlaceOrder = async () => {
    if (isSubmitting || cartItems.length === 0) return;

    if (!validateBillingDetails()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call for payment
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and notify success
      localStorage.removeItem("cart");
      setCartItems([]);
      setCartTotal(0);

      toast.success("Order placed successfully!");
      navigate("/success");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Apply coupon code
  const applyCoupon = () => {
    if (coupon.trim() === "SAVE10") {
      setDiscount(cartTotal * 0.1); // 10% discount
      toast.success("Coupon applied successfully!");
    } else {
      toast.error("Invalid coupon code.");
    }
  };

  // Memoized cart items for better performance
  const renderedCartItems = useMemo(() => {
    return cartItems.map((item) => (
      <div key={item.id} className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-12 w-12 rounded-md object-cover"
          />

          <div>
            <h4 className="text-sm font-medium">{item.name}</h4>
            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
          </div>
        </div>
        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    ));
  }, [cartItems]);

  // Final total after applying discount and shipping
  const finalTotal = cartTotal - discount + shipping;

  if (isCartLoading) {
    return <div className="text-center py-10">Loading your cart...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <p>Your cart is empty. Redirecting to products...</p>
        {setTimeout(() => navigate("/products"), 2000)}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  placeholder="123 Main St"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={billingDetails.city}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                    placeholder="New York"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={billingDetails.postalCode}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                    placeholder="10001"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="border-t border-b py-4">{renderedCartItems}</div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Discount:</span>
                <span className="font-medium">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="border rounded-md p-2 flex-grow"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Apply
                </button>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className={`mt-6 w-full py-3 rounded-md text-white font-semibold ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#84cc16] hover:bg-green-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
