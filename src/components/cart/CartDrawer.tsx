
import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  
  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && target.classList.contains('cart-drawer-overlay')) {
        onClose();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 cart-drawer-overlay bg-black/50">
      <div 
        className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Shopping Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Cart content */}
        <div className="flex flex-col h-[calc(100%-8rem)]">
          {cartCount > 0 ? (
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.map(item => (
                <CartItem 
                  key={`${item.id}-${item.size}-${item.color}`}
                  {...item} 
                />
              ))}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingBag size={48} className="text-gray-300 mb-4" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-muted-foreground text-center mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Link 
                to="/shop"
                className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                onClick={onClose}
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
        
        {/* Cart footer */}
        {cartCount > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">{formatPrice(cartTotal)}</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4">
              Shipping and taxes calculated at checkout
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/checkout"
                className="w-full py-2 bg-black text-white text-center font-medium hover:bg-gray-800 transition-colors"
                onClick={onClose}
              >
                Checkout
              </Link>
              
              <button
                onClick={clearCart}
                className="w-full py-2 border border-gray-300 text-center font-medium hover:bg-gray-100 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
