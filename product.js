class Product {
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
}

let product = new Product(12323, "Apple drink", "$2");
console.log(product.price);