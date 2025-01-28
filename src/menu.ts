import MenuItem from "./menuItem";

class Menu {
    menuItems: MenuItem[];
    constructor(
        public id: number,
        public menuName: string,
        public isAvailable: boolean
    ) {
        this.menuItems = [];
    }
    // //operations
    addItem = (menuItem: MenuItem) => {
        this.menuItems.push(menuItem);
        console.log(`${menuItem.name} added to ${this.menuName}`);
    }
    deleteItem = (menuItem: MenuItem) => {
        this.menuItems = this.menuItems.filter(m => m.id !== menuItem.id);
        console.log(`${menuItem.name} deleted from ${this.menuName}`);
    }
    updateItem = (item: MenuItem, updatedData: Partial<MenuItem>) => {
        this.menuItems = this.menuItems.map((i) => (i.id === item.id ? { ...i, ...updatedData } : i));
        console.log(`menu item updated in ${this.menuName}`);
    }
    displayItem = (menuItem: MenuItem) => {
        console.log(`ID: ${menuItem.id}, Name: ${menuItem.name}, Description: ${menuItem.description}, Price: ${menuItem.price}, isAvailable: ${menuItem.isAvailable}`);
    }
}
export default Menu;



