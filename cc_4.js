// retail discount engine

// create an array of 5 products
let products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 5 },
  { name: "T-Shirt", category: "apparel", price: 25, inventory: 10 },
  { name: "Apples", category: "groceries", price: 3, inventory: 20 },
  { name: "Vacuum Cleaner", category: "household", price: 150, inventory: 7 },
  { name: "Book", category: "other", price: 15, inventory: 12 }
];

console.log("Initial products:", products);

// apply category-based discount using switch
// switch lets us branch by product category. use break to prevent fallthrough
for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      // No discount
      break;
  }
}
console.log("After category discounts:", products);