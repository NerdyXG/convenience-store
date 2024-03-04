class Employee {
    constructor(employeeID, name, role) {
        this.employeeID = employeeID;
        this.name = name;
        this.role = role;
    }

    // method
    greet() {
        return(`Hello, my name is ${this.name}, I'm a regular employee`);
    }
}

// inheritance
class AdminEmployee extends Employee { // the "extends" keyword shows that it's a child class
    constructor(employeeID, name, role, department) {
        super(employeeID, name, role); // inherits the property of the parent class - Employee
        this.department = department;
    }

    // method overriding
    greet() {
        return(`Hello, my name is ${this.name}, I'm the ${this.role} in the ${this.department} department.\nI'm an admin employee`);
    }

    manageEmployees() {
        return(`${this.name} can manage employees`);
    }
}


let employee = new Employee(232, "John", "Software Engineer");
console.log(employee.greet());


let adminEmployee = new AdminEmployee(3432, "Doe", "Head of Human Resources", "HR");
console.log(adminEmployee.greet());
console.log(adminEmployee.manageEmployees());