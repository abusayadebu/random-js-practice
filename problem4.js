//Remove stock from the object.


const product = {
  name: "Laptop",
  price: 50000,
  stock: 10
};

delete product.stock;

console.log(product);