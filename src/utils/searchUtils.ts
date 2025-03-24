
import { Product } from '@/types/product';

export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerms = query.toLowerCase().trim().split(' ');
  
  return products.filter(product => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();
    
    // Check if any search term is in the product name or category
    return searchTerms.some(term => 
      name.includes(term) || category.includes(term)
    );
  });
};
