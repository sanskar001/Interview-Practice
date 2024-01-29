interface Item {
  readonly id: string;
}

class Cart<T extends Item> {
  public items: Array<T>;

  public constructor() {
    this.items = [];
  }

  public addItem(newItem: T) {
    this.items.push(newItem);
  }

  public getItem(id: string) {
    return this.items.find((item) => item.id === id);
  }

  public removeItem(id: string) {
    const poppedItem = this.getItem(id);
    this.items = this.items.filter((item) => item.id !== id);
    return poppedItem;
  }

  public hasItem(id: string) {
    return !!this.items.find((item) => item.id === id);
  }

  public getAllItems() {
    return this.items;
  }
}

interface ShoppingItem {
  id: string;
  name: string;
  price: number;
}

const shoppingCart = new Cart<ShoppingItem>();

shoppingCart.addItem({ id: "123", name: "Marker", price: 30 });
shoppingCart.addItem({ id: "234", name: "Mobile", price: 13000 });
shoppingCart.addItem({ id: "345", name: "Headphone", price: 1300 });
shoppingCart.addItem({ id: "456", name: "Book", price: 309 });

// console.log(shoppingCart.getAllItems());

// console.log(shoppingCart.getItem("234"));
console.log(shoppingCart.hasItem("234"));

console.log(shoppingCart.removeItem("234"));

console.log(shoppingCart.hasItem("234"));
