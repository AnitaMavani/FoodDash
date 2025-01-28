"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Menu {
    constructor(id, menuName, isAvailable) {
        this.id = id;
        this.menuName = menuName;
        this.isAvailable = isAvailable;
        // //operations
        this.addItem = (menuItem) => {
            this.menuItems.push(menuItem);
            console.log(`${menuItem.name} added to ${this.menuName}`);
        };
        this.deleteItem = (menuItem) => {
            this.menuItems = this.menuItems.filter(m => m.id !== menuItem.id);
            console.log(`${menuItem.name} deleted from ${this.menuName}`);
        };
        this.updateItem = (item, updatedData) => {
            this.menuItems = this.menuItems.map((i) => (i.id === item.id ? { ...i, ...updatedData } : i));
            console.log(`menu item updated in ${this.menuName}`);
        };
        this.displayItem = (menuItem) => {
            console.log(`ID: ${menuItem.id}, Name: ${menuItem.name}, Description: ${menuItem.description}, Price: ${menuItem.price}, isAvailable: ${menuItem.isAvailable}`);
        };
        this.menuItems = [];
    }
}
exports.default = Menu;
