
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  
  const { name, price, images, isNew, isBestSeller, path } = product;
  const { addToCart } = useCart();
  
  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Default size and color (first available)
    const defaultSize = product.sizes ? product.sizes[0] : undefined;
    const defaultColor = product.colors ? product.colors[0] : undefined;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: defaultSize,
      color: defaultColor
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
      variant: "default"
    });
  };
  
  return (
    <div 
      className="product-card group"
      onMouseEnter={() => {
        setIsHovering(true);
        setShowQuickAdd(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setTimeout(() => setShowQuickAdd(false), 300);
      }}
    >
      <Link to={path} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
          {/* Product image */}
          <img
            src={images[currentImageIndex]}
            alt={name}
            className="w-full h-full object-cover product-card-img"
          />
          
          {/* Image navigation - only shown on hover */}
          {isHovering && images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-black opacity-0 group-hover:opacity-80 transition-opacity z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-black opacity-0 group-hover:opacity-80 transition-opacity z-10"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
          
          {/* Quick add button */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white p-3 transform transition-transform duration-300 ${
              showQuickAdd ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button 
              className="w-full flex items-center justify-center space-x-2 bg-black text-white p-2 hover:opacity-80 transition-opacity"
              onClick={handleQuickAdd}
            >
              <ShoppingBag size={16} />
              <span>Quick Add</span>
            </button>
          </div>
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="text-xs font-medium bg-black text-white px-2 py-1">
                NEW
              </span>
            )}
            {isBestSeller && (
              <span className="text-xs font-medium bg-[#d4af37] text-white px-2 py-1">
                BEST SELLER
              </span>
            )}
          </div>
        </div>
        
        {/* Product info */}
        <div className="text-left">
          <h3 className="font-medium text-base truncate mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-1">{product.category}</p>
          <p className="font-medium">{formatPrice(price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
