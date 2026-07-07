interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 30000, quantity: 10 },
  { id: 2, name: "Mouse", price: 500, quantity: 50 },
  { id: 3, name: "Keyboard", price: 1200, quantity: 20 }
];

function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find((item) => item.id === productId);

  if (!product) {
    console.log("Product not found");
    return;
  }

  if (amountSold > product.quantity) {
    console.log("Not enough stock");
  } else {
    product.quantity -= amountSold;
    console.log("Updated! " + product.name + " remaining: " + product.quantity);
  }
}

updateStock(1, 2);
updateStock(2, 60);
console.log(myInventory);