"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurants {
    constructor(id, Name, location, phone, openingHours) {
        this.id = id;
        this.Name = Name;
        this.location = location;
        this.phone = phone;
        this.openingHours = openingHours;
        this.display = () => {
            console.log(`ID: ${this.id}, Name: ${this.Name}, Location: ${this.location}, Phone: ${this.phone}, Opening Hours: ${this.openingHours}`);
        };
        //operations Menu
        this.addMenu = (menu) => {
            this.menus.push(menu);
            console.log(`${this.Name} added menu ${menu.menuName}`);
        };
        this.updateMenu = (menu, updateMenuData) => {
            this.menus = this.menus.map((m) => (m.id === menu.id ? { ...m, ...updateMenuData } : m));
            console.log(`${this.Name} updated menu ${menu.menuName}`);
        };
        this.deleteMenu = (menu) => {
            menu.menuItems.forEach(menuItem => menu.deleteItem(menuItem));
            this.menus = this.menus.filter(f => f.id !== menu.id);
            console.log(`${this.Name} deleted menu ${menu.menuName}`);
        };
        //operations Menu Item
        this.addMenuItem = (menu, menuItem) => {
            menu.addItem(menuItem);
        };
        this.updateMenuItem = (menu, menuItem, updatedData) => {
            menu.updateItem(menuItem, updatedData);
        };
        this.deleteMenuItem = (menu, menuItem) => {
            menu.deleteItem(menuItem);
        };
        this.displayMenuItems = (menu) => {
            return menu.menuItems.forEach(menuItem => menu.displayItem(menuItem));
        };
        this.menus = [];
    }
    displayMenu() {
        this.menus.forEach(menu => console.log(menu.menuName));
    }
}
exports.default = Restaurants;
