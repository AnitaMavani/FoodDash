import Menu from "./menu";
import MenuItem from "./menuItem";
class Restaurants {
    menus: Menu[];
    constructor(
        public id: number,
        public Name: string,
        public location: string,
        public phone: number,
        public openingHours: string) {
        this.menus = [];
    }
    display = () => {
        console.log(`ID: ${this.id}, Name: ${this.Name}, Location: ${this.location}, Phone: ${this.phone}, Opening Hours: ${this.openingHours}`);
    }
    //operations Menu
    addMenu = (menu: Menu) => {
        this.menus.push(menu);
        console.log(`${this.Name} added menu ${menu.menuName}`);
    }
    updateMenu = (menu: Menu, updateMenuData: Partial<Menu>) => {
        this.menus = this.menus.map((m) => (m.id === menu.id ? { ...m, ...updateMenuData } : m));
        console.log(`${this.Name} updated menu ${menu.menuName}`);
    }
    deleteMenu = (menu: Menu) => {
        menu.menuItems.forEach(menuItem => menu.deleteItem(menuItem));
        this.menus = this.menus.filter(f => f.id !== menu.id);
        console.log(`${this.Name} deleted menu ${menu.menuName}`);
    }
    displayMenu() {
        this.menus.forEach(menu => console.log(menu.menuName));
    }

    //operations Menu Item
    addMenuItem = (menu: Menu, menuItem: MenuItem) => {
        menu.addItem(menuItem);
    }
    updateMenuItem = (menu: Menu, menuItem: MenuItem, updatedData: Partial<MenuItem>) => {
        menu.updateItem(menuItem, updatedData);
    }
    deleteMenuItem = (menu: Menu, menuItem: MenuItem) => {
        menu.deleteItem(menuItem);
    }
    displayMenuItems = (menu: Menu) => {
        return menu.menuItems.forEach(menuItem => menu.displayItem(menuItem));
    }
    // search = (serachText: string) => {
    //     this.menus.forEach(menu => console.log(menu.menuName));
    //     console.log(serachText);
    //     const result = this.menus.filter(menu => menu.menuName.toLowerCase().includes(serachText.toLowerCase()));
    //     console.log("following items have search keywards");
    //     result.forEach(r => console.log(r.menuName));
    // }

    // search = (keyword: string) => {
    //     const results = [];

    //     // Search in restaurant fields
    //     if (this.Name.toLowerCase().includes(keyword.toLowerCase()) ||
    //         this.location.toLowerCase().includes(keyword.toLowerCase())) {
    //         results.push({ type: 'Restaurant', data: this });
    //     }

    //     // Search in menus
    //     this.menus.forEach(menu => {
    //         if (menu.menuName.toLowerCase().includes(keyword.toLowerCase())) {
    //             results.push({ type: 'Menu', data: menu });
    //         }

    //         // Search in menu items
    //         menu.menuItems.forEach(menuItem => {
    //             if (menuItem.name.toLowerCase().includes(keyword.toLowerCase()) ||
    //                 menuItem.description.toLowerCase().includes(keyword.toLowerCase())) {
    //                 results.push({ type: 'MenuItem', data: menuItem });
    //             }
    //         });
    //     });

    //     return results;
    // }


}
export default Restaurants;



