
import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

const CartItem: React.FC<CartItemProps> = ({ 
  id, name, price, image, quantity, size, color 
}) => {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    <div className="flex items-start py-4 border-b border-gray-200">
      {/* Product image */}
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium">{name}</h3>
        {size && color && (
          <p className="text-xs text-muted-foreground mt-1">
            {size} / {color}
          </p>
        )}
        <p className="text-sm font-medium mt-1">{formatPrice(price)}</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center ml-4">
        <button 
          onClick={() => updateQuantity(id, quantity - 1)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        
        <span className="mx-2 w-6 text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Remove button */}
      <button 
        onClick={() => removeFromCart(id)}
        className="ml-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
