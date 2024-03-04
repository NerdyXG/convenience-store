productsList = {};
employeesList = [];

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        // productsList[name] = `$${price}`;
    }
}


// this is the parent to the AdminEmployee
class RegularEmployee {
    constructor(employeeID, name, email, role, salary) {
        this.employeeID = employeeID;
        this.name = name;
        this.email = email;
        this.role = role;
        this.salary = salary;
        this.type = "Regular Employee";
    }

    
    saveToDB() {
        let obj = {}
        obj["Employee ID"] = this.employeeID;
        obj["Name"] = this.name;
        obj["Email"] = this.email;
        obj["Role"] = this.role;
        obj["Salary"] = `$${this.salary}`;
        obj["Type"] = this.type;
        employeesList.push(obj);
    }


    viewEmployeeDetails() {
        return `EmployeeID: ${this.employeeID}\nName: ${this.name}\nEmail: ${this.email}\nType: ${this.type}\nRole: ${this.role}`;
    }


    viewAllProducts() {
        return productsList;
    }

}


class AdminEmployee extends RegularEmployee {
    constructor(employeeID, name, email, role, salary) {
        super(employeeID, name, email, role, salary)
        this.type = "Admin Employee";
    }


    saveToDB() {
        let obj = {}
        obj["Employee ID"] = this.employeeID;
        obj["Name"] = this.name;
        obj["Email"] = this.email;
        obj["Role"] = this.role;
        obj["Salary"] = `$${this.salary}`;
        obj["Type"] = this.type;
        employeesList.push(obj);
    }

    viewAllEmployees() {
        return employeesList;
    }

    // product is an instance of the class Product 
    addProducts(product) {
        productsList[product.name] = `$${product.price}`;
        console.log(`${product.name} has been added successfully.`);
    }

    changePrice(product, newPrice) {
        product.price = newPrice; // updates the object
        productsList[product.name] = `$${newPrice}`; // updates the productsList
        console.log(`The price for ${product.name} has been updated to $${product.price}`)
    }
}


// a customer is a client that interacts with the store for the main purpose of buying products
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewAllProducts() {
        return productsList;
    }

    // this method returns the total price of the goods ordered
    orderProducts(product, qty) {
        let totalCost =  `$${product.price * qty}`;
        if (qty == 1) {
            console.log(`1 piece of ${product.name} has been ordered successfully for a total cost of ${totalCost}.`);
        }
        else {
            console.log(`${qty} pieces of ${product.name} has been ordered successfully for a total cost of ${totalCost}.`);
        }
        return `$${product.price * qty}`;
    }
}


let john = new RegularEmployee(343, "John", "john@gmail.com", "Seller", 150)
john.saveToDB();
let jane = new RegularEmployee(243, "Jane", "jane@gmail.com", "Janitor", 120);
jane.saveToDB();
let jade = new AdminEmployee(342, "Jade", "jade@outlook.com", "HR Manager", 350)
jade.saveToDB();


let appleDrink = new Product("Apple drink", 5)
let orangeDrink = new Product("Orange juice", 7);
jade.addProducts(appleDrink) // adds products to the database -> productsList
jade.addProducts(orangeDrink)

console.table(productsList);

jade.changePrice(appleDrink, 10)
console.table(productsList)

console.log("\nAll Employees")
console.table(jade.viewAllEmployees())

console.log("\n")
let customerDan = new Customer("Dan", "dan@gmail.com");

let totalCost = customerDan.orderProducts(appleDrink, 5);

console.log(totalCost);

console.log("\n\nAvailable products")
console.log(customerDan.viewAllProducts());