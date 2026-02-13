function main() {
  class Pizza {
    // 1. Static Properties (The Shop's Dashboard)
    // These belong to the SHOP, not to a specific pepperoni pizza.
    static totalPizzasSold = 0;
    static shopStatus = "Open";

    // 2. Constructor (The Order Slip)
    // These details belong to ONE specific pizza.
    constructor(customerName, topping, size) {
      this.customerName = customerName; // e.g., "John"
      this.topping = topping; // e.g., "Pepperoni"
      this.size = size; // e.g., "Large"
    }

    // 3. Static Method (Manager's Job)
    // The manager updates the shop's total count.
    // They don't need to look at a specific pizza to do this.
    static addToTotalCount() {
      this.totalPizzasSold++;
    }

    static changeShopStatus(newStatus) {
      this.shopStatus = newStatus;
      console.log(`The shop is now: ${this.shopStatus}`);
    }

    // 4. Instance Method (The Chef's Job)
    // This handles ONE specific pizza.
    bakePizza() {
      console.log(
        `Baking a ${this.size} ${this.topping} pizza for ${this.customerName}...`
      );

      // IMPORTANT: After baking this ONE pizza, we update the SHOP'S total count.
      // We call the static method from inside the instance method.
      Pizza.addToTotalCount();
    }

    displayOrderDetails() {
      console.log(`Customer: ${this.customerName}`);
      console.log(`Pizza: ${this.topping}`);
      // It can also show shop-wide info:
      console.log(`Current Shop Status: ${Pizza.shopStatus}`);
      console.log(`Total Pizzas Sold Today: ${Pizza.totalPizzasSold}`);
    }
  }

  return Pizza;
}
