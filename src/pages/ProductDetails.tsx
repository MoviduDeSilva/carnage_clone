
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight, 
  ChevronLeft, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart,
  Share2,
  Check,
  Info,
  ArrowLeft
} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { productsData } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  
  const { addToCart } = useCart();
  
  // Find the product based on the URL path
  const productData = productsData.find(p => p.path === `/product/${productId}`) || productsData[0];
  
  // Get related products (excluding current product)
  const relatedProducts = productsData
    .filter(p => p.category === productData.category && p.id !== productData.id)
    .slice(0, 4);
  
  // Handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    
    // If the current color is not available for this size, reset it
    if (selectedColor && !isColorAvailableForSize(size, selectedColor)) {
      setSelectedColor("");
    }
  };
  
  // Check if color is available for selected size
  const isColorAvailableForSize = (size: string, color: string) => {
    return productData.stock?.[size as keyof typeof productData.stock]?.[color as keyof typeof productData.stock[keyof typeof productData.stock]] > 0;
  };
  
  // Get available colors for selected size
  const getAvailableColors = () => {
    if (!selectedSize || !productData.colors) return productData.colors || [];
    
    return productData.colors.filter(color => 
      isColorAvailableForSize(selectedSize, color)
    );
  };
  
  // Format price
  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  
  // Check if product is in stock
  const isInStock = () => {
    if (!selectedSize || !selectedColor || !productData.stock) return false;
    
    const stock = productData.stock[selectedSize as keyof typeof productData.stock]?.[selectedColor as keyof typeof productData.stock[keyof typeof productData.stock]];
    return stock && stock >= quantity;
  };
  
  // Handle quantity change
  const increaseQuantity = () => {
    if (selectedSize && selectedColor && productData.stock) {
      const stock = productData.stock[selectedSize as keyof typeof productData.stock]?.[selectedColor as keyof typeof productData.stock[keyof typeof productData.stock]];
      if (stock && quantity < stock) {
        setQuantity(prev => prev + 1);
      }
    } else {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (isInStock()) {
      addToCart({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.images[0],
        size: selectedSize,
        color: selectedColor
      }, quantity);
      
      setAddedToCart(true);
      
      toast({
        title: "Added to cart",
        description: `${quantity} × ${productData.name} (${selectedSize}, ${selectedColor}) added to your cart`,
        variant: "default"
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };
  
  // Handle add to wishlist
  const toggleWishlist = () => {
    setWishlistAdded(!wishlistAdded);
    
    toast({
      title: wishlistAdded ? "Removed from wishlist" : "Added to wishlist",
      description: wishlistAdded ? 
        `${productData.name} removed from your wishlist` : 
        `${productData.name} added to your wishlist`,
      variant: "default"
    });
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-fluid">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-8 animate-fade-in">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <Link to={`/shop/${productData.category.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {productData.category}
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <span className="text-foreground font-medium">{productData.name}</span>
          </div>
          
          {/* Back button - Mobile only */}
          <div className="mb-6 md:hidden">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back
            </button>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Images */}
            <div className="animate-fade-in">
              {/* Main image */}
              <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={productData.images[currentImage]} 
                  alt={productData.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                
                {/* Image navigation arrows */}
                {productData.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImage(prev => prev === 0 ? productData.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-black hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setCurrentImage(prev => prev === productData.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-black hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
                
                {/* New badge */}
                {productData.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium">
                    NEW
                  </span>
                )}
              </div>
              
              {/* Thumbnail images */}
              {productData.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {productData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-20 h-20 flex-shrink-0 transition-opacity ${
                        currentImage === index ? "opacity-100 ring-2 ring-black" : "opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={image} 
                        alt={`${productData.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-in animate-delay-100">
              <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
              <p className="text-2xl mb-4">{formatPrice(productData.price)}</p>
              
              {/* Product SKU */}
              {productData.sku && (
                <p className="text-sm text-muted-foreground mb-6">SKU: {productData.sku}</p>
              )}
              
              {/* Size selection */}
              {productData.sizes && productData.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Size</label>
                    <button className="text-xs text-muted-foreground underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productData.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(size)}
                        className={`min-w-[3rem] h-10 px-3 border transition-colors ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400 text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {!selectedSize && (
                    <p className="text-sm text-muted-foreground mt-2">Please select a size</p>
                  )}
                </div>
              )}
              
              {/* Color selection */}
              {productData.colors && productData.colors.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium block mb-2">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {getAvailableColors().map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        disabled={selectedSize && !isColorAvailableForSize(selectedSize, color)}
                        className={`min-w-[4.5rem] h-10 px-3 border transition-colors ${
                          selectedColor === color
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400 text-foreground"
                        } ${
                          selectedSize && !isColorAvailableForSize(selectedSize, color)
                            ? "opacity-40 cursor-not-allowed hover:border-gray-300"
                            : ""
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                  {!selectedColor && selectedSize && (
                    <p className="text-sm text-muted-foreground mt-2">Please select a color</p>
                  )}
                </div>
              )}
              
              {/* Quantity */}
              <div className="mb-8">
                <label className="text-sm font-medium block mb-2">Quantity</label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className={`w-10 h-10 flex items-center justify-center border border-r-0 border-gray-300 ${
                      quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 h-10 border-y border-gray-300 text-center focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-l-0 border-gray-300 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to cart & Wishlist */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!isInStock()}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 font-medium ${
                    addedToCart
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : !isInStock()
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-black hover:bg-gray-800 text-white"
                  } transition-colors`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      {isInStock() ? "Add to Cart" : "Please Select Options"}
                    </>
                  )}
                </button>
                <button
                  onClick={toggleWishlist}
                  className="flex-shrink-0 flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  <Heart 
                    size={18} 
                    className={wishlistAdded ? "text-red-500 fill-red-500" : ""} 
                  />
                  <span className="sm:hidden md:inline">Wishlist</span>
                </button>
              </div>
              
              {/* Stock status */}
              {selectedSize && selectedColor && (
                <div className={`flex items-center gap-2 text-sm mb-6 ${isInStock() ? "text-green-600" : "text-red-500"}`}>
                  {isInStock() ? (
                    <>
                      <Check size={16} />
                      <span>In stock and ready to ship</span>
                    </>
                  ) : (
                    <>
                      <Info size={16} />
                      <span>Out of stock</span>
                    </>
                  )}
                </div>
              )}
              
              {/* Description tabs */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex border-b border-gray-200">
                  {["description", "details", "care"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm py-3 px-4 font-medium capitalize ${
                        activeTab === tab
                          ? "border-b-2 border-black"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  {activeTab === "description" && (
                    <p className="text-muted-foreground">{productData.description}</p>
                  )}
                  {activeTab === "details" && productData.details && (
                    <ul className="text-muted-foreground space-y-2">
                      {productData.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 mt-1 text-black flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "care" && (
                    <p className="text-muted-foreground">{productData.care}</p>
                  )}
                </div>
              </div>
              
              {/* Share */}
              <div className="flex items-center pt-4">
                <button className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 size={16} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8 animate-fade-in">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
