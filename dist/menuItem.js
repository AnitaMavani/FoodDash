"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuItem {
    constructor(id, name, description, price, isAvailable) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}
exports.default = MenuItem;
