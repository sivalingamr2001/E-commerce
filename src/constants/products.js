const products = [
  {
    id: 21,
    title: "Apple iPhone 13 Mini - 128GB",
    price: 699.99,
    description:
      "Compact smartphone with a powerful A15 Bionic chip and Super Retina XDR display.",
    category: "Electronics",
    subcategory: "Smartphones",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 300,
    },
  },
  {
    id: 22,
    title: "Samsung Galaxy Z Flip 4",
    price: 999.99,
    description:
      "Innovative foldable smartphone with a sleek design and powerful performance.",
    category: "Electronics",
    subcategory: "Smartphones",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 250,
    },
  },
  {
    id: 23,
    title: "Dell XPS 13 Laptop",
    price: 1199.99,
    description:
      "Ultra-thin laptop with a 13-inch InfinityEdge display and 11th Gen Intel Core processor.",
    category: "Electronics",
    subcategory: "Laptops",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 24,
    title: "Apple MacBook Air M2",
    price: 1249.99,
    description:
      "Lightweight laptop with M2 chip, Retina display, and exceptional battery life.",
    category: "Electronics",
    subcategory: "Laptops",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 350,
    },
  },
  {
    id: 25,
    title: "Amazon Fire HD 10 Tablet",
    price: 149.99,
    description:
      "Affordable tablet with a 10-inch display, perfect for entertainment and browsing.",
    category: "Electronics",
    subcategory: "Tablets",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 220,
    },
  },
  {
    id: 26,
    title: "Apple iPad Air 10.9-inch",
    price: 599.99,
    description:
      "Versatile tablet with A14 Bionic chip and support for Apple Pencil.",
    category: "Electronics",
    subcategory: "Tablets",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 300,
    },
  },
  {
    id: 27,
    title: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    description:
      "Top-tier noise-canceling headphones with exceptional sound quality.",
    category: "Electronics",
    subcategory: "Accessories",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 180,
    },
  },
  {
    id: 28,
    title: "Logitech MX Master 3 Mouse",
    price: 99.99,
    description:
      "Ergonomic wireless mouse with precision control and customizable buttons.",
    category: "Electronics",
    subcategory: "Accessories",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 150,
    },
  },
  {
    id: 29,
    title: "Men's Denim Jacket",
    price: 59.99,
    description: "Classic denim jacket for a casual yet stylish look.",
    category: "Clothing",
    subcategory: "Men's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: 30,
    title: "Women's Winter Coat",
    price: 129.99,
    description: "Cozy and warm winter coat with a faux fur-lined hood.",
    category: "Clothing",
    subcategory: "Women's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 200,
    },
  },
  {
    id: 31,
    title: "Kids' Rain Boots",
    price: 24.99,
    description:
      "Durable and waterproof rain boots with colorful patterns for kids.",
    category: "Clothing",
    subcategory: "Kids",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 150,
    },
  },
  {
    id: 32,
    title: "Men's Running Shoes",
    price: 79.99,
    description:
      "Lightweight running shoes with excellent grip and cushioning.",
    category: "Clothing",
    subcategory: "Shoes",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 300,
    },
  },
  {
    id: 33,
    title: "Modern Sofa Set",
    price: 899.99,
    description: "Spacious and comfortable sofa set for your living room.",
    category: "Home & Kitchen",
    subcategory: "Furniture",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 120,
    },
  },
  {
    id: 34,
    title: "Air Fryer 6 Quart",
    price: 119.99,
    description: "Efficient air fryer for healthy cooking with minimal oil.",
    category: "Home & Kitchen",
    subcategory: "Appliances",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 90,
    },
  },
  {
    id: 35,
    title: "Decorative Wall Clock",
    price: 49.99,
    description: "Stylish wall clock to enhance your home decor.",
    category: "Home & Kitchen",
    subcategory: "Decor",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 80,
    },
  },
  {
    id: 36,
    title: "Non-stick Cookware Set",
    price: 89.99,
    description: "Durable non-stick pots and pans for everyday cooking.",
    category: "Home & Kitchen",
    subcategory: "Kitchenware",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 200,
    },
  },
  {
    id: 37,
    title: "Men's Formal Suit",
    price: 199.99,
    description: "Premium formal suit for weddings or business events.",
    category: "Clothing",
    subcategory: "Men's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 120,
    },
  },
  {
    id: 38,
    title: "Women's Floral Blouse",
    price: 39.99,
    description: "Chic and comfortable blouse for everyday wear.",
    category: "Clothing",
    subcategory: "Women's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 80,
    },
  },
  {
    id: 39,
    title: "Boys' Graphic T-shirt",
    price: 19.99,
    description: "Cool and colorful T-shirt for boys.",
    category: "Clothing",
    subcategory: "Kids",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.4,
      count: 60,
    },
  },
  {
    id: 40,
    title: "Women's Running Shoes",
    price: 79.99,
    description: "Breathable and durable running shoes for women.",
    category: "Clothing",
    subcategory: "Shoes",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 140,
    },
  },
  {
    id: 41,
    title: "Recliner Chair",
    price: 299.99,
    description: "Comfortable recliner chair for your living room.",
    category: "Home & Kitchen",
    subcategory: "Furniture",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 150,
    },
  },
  {
    id: 42,
    title: "Smart Wi-Fi Thermostat",
    price: 179.99,
    description: "Energy-efficient smart thermostat compatible with Alexa.",
    category: "Home & Kitchen",
    subcategory: "Appliances",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 110,
    },
  },
  {
    id: 43,
    title: "Canvas Wall Art",
    price: 89.99,
    description: "Beautiful canvas wall art for your bedroom or living room.",
    category: "Home & Kitchen",
    subcategory: "Decor",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 70,
    },
  },
  {
    id: 44,
    title: "Ceramic Dinnerware Set",
    price: 59.99,
    description: "Elegant ceramic dinnerware set for everyday meals.",
    category: "Home & Kitchen",
    subcategory: "Kitchenware",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 90,
    },
  },
  {
    id: 45,
    title: "The Great Gatsby",
    price: 14.99,
    description: "Classic novel by F. Scott Fitzgerald.",
    category: "Books",
    subcategory: "Books Fiction",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 200,
    },
  },
  {
    id: 46,
    title: "Sapiens: A Brief History of Humankind",
    price: 19.99,
    description: "Best-selling non-fiction book by Yuval Noah Harari.",
    category: "Books",
    subcategory: "Books Non-fiction",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 300,
    },
  },
  {
    id: 47,
    title: "Introduction to Algorithms",
    price: 49.99,
    description: "Comprehensive textbook on algorithms for students.",
    category: "Books",
    subcategory: "Books Educational",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 100,
    },
  },
  {
    id: 48,
    title: "Marvel Avengers Comic Book",
    price: 12.99,
    description: "Action-packed comic book featuring the Avengers.",
    category: "Books",
    subcategory: "Books Comics",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 90,
    },
  },
  {
    id: 49,
    title: "Yoga Mat - Extra Thick",
    price: 39.99,
    description: "Non-slip yoga mat forFitness enthusiasts.",
    category: "Sports & Outdoors",
    subcategory: "Fitness",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 150,
    },
  },
  {
    id: 50,
    title: "Camping Tent - 4 Person",
    price: 99.99,
    description: "Spacious and durable camping tent for outdoor adventures.",
    category: "Sports & Outdoors",
    subcategory: "Camping",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 51,
    title: "Basketball",
    price: 29.99,
    description: "Durable basketball for indoor and outdoor use.",
    category: "Sports & Outdoors",
    subcategory: "Team Sports",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 52,
    title: "Snorkeling Gear Set",
    price: 59.99,
    description: "Complete snorkeling gear with mask, snorkel, and fins.",
    category: "Sports & Outdoors",
    subcategory: "Water Sports",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 80,
    },
  },
  {
    id: 53,
    title: "Vitamin C Tablets",
    price: 19.99,
    description: "High-quality vitamin C tablets for immune support.",
    category: "Health & Household",
    subcategory: "Vitamins",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 300,
    },
  },
  {
    id: 54,
    title: "First Aid Kit",
    price: 29.99,
    description: "Comprehensive first aid kit for emergencies.",
    category: "Health & Household",
    subcategory: "First Aid",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 180,
    },
  },
  {
    id: 55,
    title: "Laundry Detergent - 64 Loads",
    price: 15.99,
    description: "Powerful and eco-friendly laundry detergent.",
    category: "Health & Household",
    subcategory: "Supplies",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 150,
    },
  },
  {
    id: 56,
    title: "Baby Diapers - Size 3",
    price: 29.99,
    description: "Soft and absorbent diapers for babies.",
    category: "Health & Household",
    subcategory: "Baby & Child Care",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 200,
    },
  },
  {
    id: 57,
    title: "iPhone 14 Pro Max",
    price: 1199.99,
    description:
      "Latest Apple iPhone with A16 Bionic chip and advanced camera.",
    category: "Electronics",
    subcategory: "Smartphones",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 500,
    },
  },
  {
    id: 58,
    title: "Gaming Laptop - Alienware X17",
    price: 2499.99,
    description: "High-performance gaming laptop with RTX 4080 GPU.",
    category: "Electronics",
    subcategory: "Laptops",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 300,
    },
  },
  {
    id: 59,
    title: "Samsung Galaxy Tab S9",
    price: 799.99,
    description:
      "Lightweight and powerful tablet with a vibrant AMOLED display.",
    category: "Electronics",
    subcategory: "Tablets",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 250,
    },
  },
  {
    id: 60,
    title: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    description: "Premium headphones with industry-leading noise cancellation.",
    category: "Electronics",
    subcategory: "Accessories",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 61,
    title: "Men's Leather Jacket",
    price: 249.99,
    description: "Stylish and durable leather jacket for a rugged look.",
    category: "Clothing",
    subcategory: "Men's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 180,
    },
  },
  {
    id: 62,
    title: "Women's Maxi Dress",
    price: 79.99,
    description: "Elegant maxi dress for formal occasions.",
    category: "Clothing",
    subcategory: "Women's",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 130,
    },
  },
  {
    id: 63,
    title: "Kids' Sneakers",
    price: 49.99,
    description: "Comfortable and durable sneakers for kids.",
    category: "Clothing",
    subcategory: "Kids",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.5,
      count: 90,
    },
  },
  {
    id: 64,
    title: "Men's Running Shoes",
    price: 129.99,
    description: "High-performance running shoes for men.",
    category: "Clothing",
    subcategory: "Shoes",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 160,
    },
  },
  {
    id: 65,
    title: "Wooden Coffee Table",
    price: 199.99,
    description: "Classic wooden coffee table with a modern touch.",
    category: "Home & Kitchen",
    subcategory: "Furniture",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 66,
    title: "Air Fryer - 5 Quart",
    price: 119.99,
    description: "Healthier frying with a large-capacity air fryer.",
    category: "Home & Kitchen",
    subcategory: "Appliances",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 140,
    },
  },
  {
    id: 67,
    title: "Luxury Throw Pillows",
    price: 39.99,
    description: "Soft and stylish throw pillows for your living room.",
    category: "Home & Kitchen",
    subcategory: "Decor",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 110,
    },
  },
  {
    id: 68,
    title: "Non-Stick Cookware Set",
    price: 129.99,
    description: "Complete non-stick cookware set for every kitchen.",
    category: "Home & Kitchen",
    subcategory: "Kitchenware",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 150,
    },
  },
  {
    id: 69,
    title: "1984 by George Orwell",
    price: 14.99,
    description: "Dystopian classic novel by George Orwell.",
    category: "Books",
    subcategory: "Books Fiction",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 220,
    },
  },
  {
    id: 70,
    title: "Atomic Habits",
    price: 16.99,
    description: "Bestselling self-improvement book by James Clear.",
    category: "Books",
    subcategory: "Books Non-fiction",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 320,
    },
  },
  {
    id: 71,
    title: "Calculus for Beginners",
    price: 34.99,
    description: "Introductory calculus book for students.",
    category: "Books",
    subcategory: "Books Educational",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 100,
    },
  },
  {
    id: 72,
    title: "Batman Graphic Novel",
    price: 24.99,
    description: "Dark and thrilling graphic novel featuring Batman.",
    category: "Books",
    subcategory: "Books Comics",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 80,
    },
  },
  {
    id: 73,
    title: "Adjustable Dumbbell Set",
    price: 159.99,
    description: "Adjustable weights for versatile strength training.",
    category: "Sports & Outdoors ",
    subcategory: "Fitness",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 200,
    },
  },
  {
    id: 74,
    title: "Portable Camping Stove",
    price: 49.99,
    description: "Compact and efficient camping stove for outdoor cooking.",
    category: "Sports & Outdoors ",
    subcategory: "Camping",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 120,
    },
  },
  {
    id: 75,
    title: "Soccer Ball - Official Size",
    price: 29.99,
    description: "Durable and high-quality soccer ball.",
    category: "Sports & Outdoors ",
    subcategory: "Team Sports",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 140,
    },
  },
  {
    id: 76,
    title: "Paddleboard - Inflatable",
    price: 299.99,
    description: "Lightweight and durable inflatable paddleboard.",
    category: "Sports & Outdoors ",
    subcategory: "Water Sports",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 77,
    title: "Advanced Skincare Serum",
    price: 49.99,
    description: "Nourishing serum for glowing and hydrated skin.",
    category: "Beauty & Personal Care",
    subcategory: "Skincare",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 180,
    },
  },
  {
    id: 78,
    title: "Waterproof Mascara",
    price: 19.99,
    description: "Smudge-proof mascara for bold and beautiful lashes.",
    category: "Beauty & Personal Care",
    subcategory: "Makeup",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 210,
    },
  },
  {
    id: 79,
    title: "Organic Shampoo",
    price: 14.99,
    description: "Gentle shampoo with natural ingredients for healthy hair.",
    category: "Beauty & Personal Care",
    subcategory: "Hair Care",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 160,
    },
  },
  {
    id: 80,
    title: "Luxury Perfume",
    price: 89.99,
    description: "Premium fragrance with long-lasting notes.",
    category: "Beauty & Personal Care",
    subcategory: "Fragrances",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 300,
    },
  },
  {
    id: 81,
    title: "Board Game - Strategy Edition",
    price: 39.99,
    description: "Fun and engaging board game for all ages.",
    category: "Toys & Games",
    subcategory: "Board Games",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 220,
    },
  },
  {
    id: 82,
    title: "3D Puzzle - Famous Landmark",
    price: 24.99,
    description: "Intricate 3D puzzle to recreate iconic landmarks.",
    category: "Toys & Games",
    subcategory: "Puzzles",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 170,
    },
  },
  {
    id: 83,
    title: "Action Figure - Superhero Series",
    price: 19.99,
    description: "Detailed action figure from the popular superhero franchise.",
    category: "Toys & Games",
    subcategory: "Action Figures",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 190,
    },
  },
  {
    id: 84,
    title: "STEM Learning Robot",
    price: 79.99,
    description: "Educational robot toy for kids to learn coding and robotics.",
    category: "Toys & Games",
    subcategory: "Educational Toys",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 250,
    },
  },
  {
    id: 85,
    title: "Car Vacuum Cleaner",
    price: 49.99,
    description: "Compact and powerful vacuum cleaner for cars.",
    category: "Automotive",
    subcategory: "Car Accessories",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 140,
    },
  },
  {
    id: 86,
    title: "Multi-Tool Kit",
    price: 79.99,
    description: "All-in-one tool kit for automotive and household repairs.",
    category: "Automotive",
    subcategory: "Tools",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 200,
    },
  },
  {
    id: 87,
    title: "All-Season Tires",
    price: 129.99,
    description: "Durable and reliable tires for all weather conditions.",
    category: "Automotive",
    subcategory: "Tires",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.6,
      count: 90,
    },
  },
  {
    id: 88,
    title: "Dash Cam - HD Recording",
    price: 99.99,
    description:
      "High-quality dash cam with night vision and motion detection.",
    category: "Automotive",
    subcategory: "Car Electronics",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 180,
    },
  },
  {
    id: 89,
    title: "Dog Bed - Orthopedic",
    price: 79.99,
    description: "Comfortable and supportive bed for your furry friend.",
    category: "Pet Supplies ",
    subcategory: "Dog",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 130,
    },
  },
  {
    id: 90,
    title: "Cat Scratching Post",
    price: 49.99,
    description: "Durable scratching post to keep your cat entertained.",
    category: "Pet Supplies ",
    subcategory: "Cat",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.7,
      count: 100,
    },
  },
  {
    id: 91,
    title: "Aquarium Starter Kit",
    price: 99.99,
    description: "Complete aquarium setup for beginner fish enthusiasts.",
    category: "Pet Supplies ",
    subcategory: "Fish",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.9,
      count: 80,
    },
  },
  {
    id: 92,
    title: "Small Animal Cage",
    price: 149.99,
    description:
      "Spacious and secure cage for small pets like hamsters or guinea pigs.",
    category: "Pet Supplies ",
    subcategory: "Small Animals",
    image: "https://placehold.co/40x60",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
];

export default products;
