
import { Product } from "@/types/product";

export const productsData: Product[] = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 2900,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/classic-black-tee",
    description: "Our Classic Black Tee is the perfect addition to any wardrobe. Made from premium 100% cotton, this shirt offers both comfort and style.",
    details: [
      "100% premium combed cotton",
      "180 GSM fabric weight",
      "Pre-shrunk to minimize shrinkage",
      "Reinforced collar and shoulders",
      "Ethically manufactured"
    ],
    care: "Machine wash cold with similar colors. Tumble dry low. Do not iron design. Do not bleach.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    stock: {
      "S": { "Black": 10, "White": 8, "Gray": 5 },
      "M": { "Black": 15, "White": 12, "Gray": 7 },
      "L": { "Black": 8, "White": 6, "Gray": 3 },
      "XL": { "Black": 6, "White": 4, "Gray": 2 }
    },
    sku: "BLK-TS-001"
  },
  {
    id: 2,
    name: "Urban Streetwear Hoodie",
    price: 5900,
    category: "Hoodies",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/urban-streetwear-hoodie",
    description: "Stay warm and stylish with our Urban Streetwear Hoodie. Features a modern fit with a contemporary street aesthetic.",
    details: [
      "80% cotton, 20% polyester blend",
      "320 GSM fabric weight",
      "Drawstring hood with metal eyelets",
      "Kangaroo pocket",
      "Ribbed cuffs and hem"
    ],
    care: "Machine wash cold. Tumble dry low. Do not iron directly on print.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Heather Gray"],
    stock: {
      "S": { "Black": 12, "Navy": 8, "Heather Gray": 10 },
      "M": { "Black": 15, "Navy": 12, "Heather Gray": 14 },
      "L": { "Black": 10, "Navy": 9, "Heather Gray": 12 },
      "XL": { "Black": 8, "Navy": 6, "Heather Gray": 7 },
      "XXL": { "Black": 6, "Navy": 4, "Heather Gray": 5 }
    },
    sku: "URB-HD-001"
  },
  {
    id: 3,
    name: "Minimalist Logo Cap",
    price: 2200,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/minimalist-logo-cap",
    description: "Complete your look with our Minimalist Logo Cap. Features a subtle embroidered logo on a classic 6-panel design.",
    details: [
      "100% cotton twill",
      "Adjustable strap with metal buckle",
      "Embroidered logo",
      "Pre-curved visor",
      "One size fits most"
    ],
    care: "Spot clean only. Do not machine wash.",
    sizes: ["One Size"],
    colors: ["Black", "White", "Olive"],
    stock: {
      "One Size": { "Black": 20, "White": 15, "Olive": 12 }
    },
    sku: "MIN-CP-001"
  },
  {
    id: 4,
    name: "Distressed Cargo Pants",
    price: 4900,
    category: "Pants",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/distressed-cargo-pants",
    description: "Our Distressed Cargo Pants combine functionality with style. Multiple pockets and a slightly distressed look create the perfect urban aesthetic.",
    details: [
      "98% cotton, 2% elastane",
      "Relaxed fit",
      "Six pocket design",
      "Adjustable drawstring waist",
      "Reinforced knees"
    ],
    care: "Machine wash cold. Hang dry for best results.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Olive"],
    stock: {
      "28": { "Khaki": 8, "Black": 10, "Olive": 6 },
      "30": { "Khaki": 12, "Black": 15, "Olive": 10 },
      "32": { "Khaki": 15, "Black": 18, "Olive": 12 },
      "34": { "Khaki": 10, "Black": 12, "Olive": 8 },
      "36": { "Khaki": 6, "Black": 8, "Olive": 5 }
    },
    sku: "DST-CG-001"
  },
  {
    id: 5,
    name: "Graphic Print Tee",
    price: 3200,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/graphic-print-tee",
    description: "Express yourself with our Graphic Print Tee. Features a bold, artistic design on premium cotton fabric.",
    details: [
      "100% combed ring-spun cotton",
      "190 GSM fabric weight",
      "Screen printed graphic",
      "Regular fit",
      "Seamless collar"
    ],
    care: "Machine wash cold. Tumble dry low. Do not iron directly on print.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Heather Gray"],
    stock: {
      "S": { "White": 12, "Black": 10, "Heather Gray": 8 },
      "M": { "White": 15, "Black": 18, "Heather Gray": 12 },
      "L": { "White": 10, "Black": 15, "Heather Gray": 10 },
      "XL": { "White": 8, "Black": 10, "Heather Gray": 6 }
    },
    sku: "GPH-TS-001"
  },
  {
    id: 6,
    name: "Leather Biker Jacket",
    price: 12900,
    category: "Jackets",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/leather-biker-jacket",
    description: "Our premium Leather Biker Jacket is a timeless addition to your wardrobe. Crafted from genuine leather with a satin lining for comfort and durability.",
    details: [
      "100% genuine leather",
      "Satin lining",
      "Asymmetric zip fastening",
      "Multiple pockets",
      "Adjustable waist belt"
    ],
    care: "Professional leather clean only. Keep away from water and direct sunlight when not wearing.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    stock: {
      "S": { "Black": 6, "Brown": 4 },
      "M": { "Black": 8, "Brown": 6 },
      "L": { "Black": 8, "Brown": 5 },
      "XL": { "Black": 5, "Brown": 3 }
    },
    sku: "LTH-JK-001"
  },
  {
    id: 7,
    name: "Chain Necklace",
    price: 1800,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1600721391690-0e9a296db29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/chain-necklace",
    description: "Add an edgy touch to your look with our Chain Necklace. Made from durable stainless steel with a matte finish.",
    details: [
      "Stainless steel construction",
      "Lobster clasp closure",
      "18-inch length",
      "5mm chain width",
      "Tarnish-resistant"
    ],
    care: "Wipe with a soft cloth. Store in provided pouch when not wearing.",
    sizes: ["One Size"],
    colors: ["Silver", "Gold"],
    stock: {
      "One Size": { "Silver": 25, "Gold": 20 }
    },
    sku: "CHN-NL-001"
  },
  {
    id: 8,
    name: "Relaxed Fit Shorts",
    price: 3500,
    category: "Shorts",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: false,
    path: "/product/relaxed-fit-shorts",
    description: "Our Relaxed Fit Shorts offer comfort and style for the warmer months. Featuring a comfortable elastic waist and side pockets.",
    details: [
      "100% cotton twill",
      "Relaxed fit",
      "7-inch inseam",
      "Elastic waistband with drawstring",
      "Side and back pockets"
    ],
    care: "Machine wash cold. Tumble dry low.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy"],
    stock: {
      "S": { "Beige": 12, "Black": 15, "Navy": 10 },
      "M": { "Beige": 15, "Black": 18, "Navy": 12 },
      "L": { "Beige": 12, "Black": 15, "Navy": 10 },
      "XL": { "Beige": 8, "Black": 10, "Navy": 6 }
    },
    sku: "RLX-SH-001"
  },
  {
    id: 9,
    name: "Oversized Crewneck Sweatshirt",
    price: 4500,
    category: "Sweatshirts",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      "https://images.unsplash.com/photo-1611708243482-66dfd6f944c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: true,
    path: "/product/oversized-crewneck-sweatshirt",
    description: "Stay cozy with our Oversized Crewneck Sweatshirt. Features a relaxed fit with dropped shoulders for that perfect casual look.",
    details: [
      "80% cotton, 20% polyester",
      "300 GSM brushed fleece",
      "Oversized fit",
      "Ribbed cuffs and waistband",
      "Embroidered logo detail"
    ],
    care: "Machine wash cold. Tumble dry medium.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Black", "Forest Green"],
    stock: {
      "S": { "Cream": 14, "Black": 16, "Forest Green": 12 },
      "M": { "Cream": 18, "Black": 20, "Forest Green": 15 },
      "L": { "Cream": 15, "Black": 18, "Forest Green": 10 },
      "XL": { "Cream": 10, "Black": 12, "Forest Green": 8 }
    },
    sku: "OVS-SW-001"
  },
  {
    id: 10,
    name: "Vintage Wash Denim Jacket",
    price: 6500,
    category: "Jackets",
    images: [
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/vintage-wash-denim-jacket",
    description: "Our Vintage Wash Denim Jacket combines classic style with modern details. Perfectly worn-in look right from the start.",
    details: [
      "100% cotton denim",
      "Medium vintage wash",
      "Button-up front",
      "Chest and side pockets",
      "Adjustable button cuffs"
    ],
    care: "Machine wash cold with like colors. Tumble dry low.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Light Wash", "Medium Wash", "Dark Wash"],
    stock: {
      "S": { "Light Wash": 10, "Medium Wash": 12, "Dark Wash": 8 },
      "M": { "Light Wash": 14, "Medium Wash": 16, "Dark Wash": 12 },
      "L": { "Light Wash": 12, "Medium Wash": 14, "Dark Wash": 10 },
      "XL": { "Light Wash": 8, "Medium Wash": 10, "Dark Wash": 6 }
    },
    sku: "VNT-DJ-001"
  },
  {
    id: 11,
    name: "Ribbed Beanie",
    price: 1800,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1576871337598-4e1c0dcd0f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1516762689852-59167834ba49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80"
    ],
    isNew: false,
    isBestSeller: false,
    path: "/product/ribbed-beanie",
    description: "Stay warm with our classic Ribbed Beanie. Made from soft, warm yarn with a fold-up cuff for adjustable coverage.",
    details: [
      "100% acrylic",
      "Fine rib knit",
      "Fold-up cuff",
      "One size fits most",
      "Embroidered logo tag"
    ],
    care: "Hand wash cold. Lay flat to dry.",
    sizes: ["One Size"],
    colors: ["Black", "Burgundy", "Olive", "Navy"],
    stock: {
      "One Size": { "Black": 25, "Burgundy": 20, "Olive": 18, "Navy": 22 }
    },
    sku: "RIB-BN-001"
  },
  {
    id: 12,
    name: "Canvas Tote Bag",
    price: 2400,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1605091788649-9b999eb60446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
      "https://images.unsplash.com/photo-1579656668353-fc2320580b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/canvas-tote-bag",
    description: "Our Canvas Tote Bag is perfect for everyday use. Spacious enough to carry all your essentials with a minimalist design.",
    details: [
      "12oz heavyweight cotton canvas",
      "Interior pocket",
      "Reinforced stitching",
      "15\" x 16\" x 4\"",
      "Printed logo"
    ],
    care: "Machine wash cold. Air dry.",
    sizes: ["One Size"],
    colors: ["Natural", "Black", "Navy"],
    stock: {
      "One Size": { "Natural": 30, "Black": 25, "Navy": 20 }
    },
    sku: "CNV-TB-001"
  },
  {
    id: 13,
    name: "Slim Fit Chino Pants",
    price: 4200,
    category: "Pants",
    images: [
      "https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/slim-fit-chino-pants",
    description: "Our Slim Fit Chino Pants offer a modern silhouette with classic styling. Perfect for both casual and semi-formal occasions.",
    details: [
      "98% cotton, 2% elastane",
      "Slim fit",
      "Button and zip closure",
      "Front slash pockets",
      "Back welt pockets"
    ],
    care: "Machine wash cold. Tumble dry low. Warm iron if needed.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive", "Black"],
    stock: {
      "30": { "Khaki": 12, "Navy": 10, "Olive": 8, "Black": 10 },
      "32": { "Khaki": 15, "Navy": 14, "Olive": 12, "Black": 14 },
      "34": { "Khaki": 15, "Navy": 12, "Olive": 10, "Black": 12 },
      "36": { "Khaki": 10, "Navy": 8, "Olive": 6, "Black": 8 },
      "38": { "Khaki": 8, "Navy": 6, "Olive": 4, "Black": 6 }
    },
    sku: "SLM-CH-001"
  },
  {
    id: 14,
    name: "Striped Long Sleeve Tee",
    price: 3200,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1608512532288-8f650f4d4777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1604007626107-6ee48296884a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/striped-long-sleeve-tee",
    description: "Our Striped Long Sleeve Tee adds a classic nautical touch to your wardrobe. Made from soft cotton with a comfortable regular fit.",
    details: [
      "100% combed cotton",
      "180 GSM fabric weight",
      "Regular fit",
      "Ribbed crew neckline",
      "Yarn-dyed stripes"
    ],
    care: "Machine wash cold. Tumble dry low.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy/White", "Black/White", "Red/Navy"],
    stock: {
      "S": { "Navy/White": 12, "Black/White": 10, "Red/Navy": 8 },
      "M": { "Navy/White": 15, "Black/White": 12, "Red/Navy": 10 },
      "L": { "Navy/White": 12, "Black/White": 10, "Red/Navy": 8 },
      "XL": { "Navy/White": 8, "Black/White": 6, "Red/Navy": 5 }
    },
    sku: "STR-LS-001"
  },
  {
    id: 15,
    name: "Washed Baseball Cap",
    price: 2500,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      "https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/washed-baseball-cap",
    description: "Our Washed Baseball Cap has a perfectly broken-in look and feel from day one. Features an embroidered logo and adjustable strap.",
    details: [
      "100% cotton twill",
      "Washed finish",
      "Embroidered logo",
      "Adjustable strap",
      "Pre-curved bill"
    ],
    care: "Spot clean only.",
    sizes: ["One Size"],
    colors: ["Washed Black", "Washed Blue", "Washed Red", "Washed Khaki"],
    stock: {
      "One Size": { "Washed Black": 20, "Washed Blue": 18, "Washed Red": 15, "Washed Khaki": 16 }
    },
    sku: "WSH-BC-001"
  },
  {
    id: 16,
    name: "Quarter-Zip Pullover",
    price: 5500,
    category: "Sweatshirts",
    images: [
      "https://images.unsplash.com/photo-1604007724682-4f1767215752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1586738270115-55c9639c183d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/quarter-zip-pullover",
    description: "Our Quarter-Zip Pullover is the perfect layering piece for cooler weather. Features a metal zipper and ribbed cuffs for added comfort.",
    details: [
      "60% cotton, 40% polyester blend",
      "280 GSM fabric weight",
      "Regular fit",
      "Metal quarter-zip closure",
      "Ribbed cuffs and hem"
    ],
    care: "Machine wash cold. Tumble dry low.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Heather Gray", "Black", "Burgundy"],
    stock: {
      "S": { "Navy": 12, "Heather Gray": 10, "Black": 12, "Burgundy": 8 },
      "M": { "Navy": 15, "Heather Gray": 12, "Black": 15, "Burgundy": 10 },
      "L": { "Navy": 12, "Heather Gray": 10, "Black": 12, "Burgundy": 8 },
      "XL": { "Navy": 8, "Heather Gray": 6, "Black": 8, "Burgundy": 5 },
      "XXL": { "Navy": 6, "Heather Gray": 4, "Black": 6, "Burgundy": 3 }
    },
    sku: "QTR-ZP-001"
  }
];
