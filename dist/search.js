"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Search {
    //private index: Map<string, SearchResult[]>;
    constructor(restaurants) {
        this.restaurants = restaurants;
        this.performSearch = (keyword) => {
            const searchKey = keyword.toString().toLowerCase();
            const results = [];
            this.restaurants.forEach(restaurant => {
                if (this.objectContainsKeyword(restaurant, searchKey)) {
                    results.push({ type: 'Restaurant', data: restaurant.Name });
                }
                const menuResults = restaurant.menus.map(menu => {
                    const menuResults = this.objectContainsKeyword(menu, searchKey)
                        ? [{ type: 'Menu', data: menu.menuName }]
                        : [];
                    const menuItemResults = menu.menuItems.filter(menuItem => this.objectContainsKeyword(menuItem, searchKey)).map(menuItem => ({
                        type: 'MenuItem',
                        data: menuItem.name
                    }));
                    return [...menuResults, ...menuItemResults];
                });
                results.push(...menuResults);
            });
            return results;
        };
        //this.index = new Map();
    }
    objectContainsKeyword(data, keyword) {
        const jsonString = JSON.stringify(data).toLowerCase();
        return jsonString.includes(keyword);
    }
}
// public performSearch = (keyword: string | number) => {
//     const searchKey = keyword.toString().toLowerCase();
//     const restaurantResults = [];
//     const results: SearchResult[] = [];
//     this.restaurants.flatMap(restaurant => {
//         if (this.objectContainsKeyword(restaurant, searchKey)) {
//             restaurantResults.push({ type: 'Restaurant', data: restaurant.Name });
//         }
//         // const menuResults = restaurant.menus.map(menu => {
//         //     const menuResults = this.objectContainsKeyword(menu, searchKey)
//         //         ? [{ type: 'Menu', data: menu.menuName }]
//         //         : [];
//         //     const menuItemResults = menu.menuItems.filter(menuItem => this.objectContainsKeyword(menuItem, searchKey)).map(menuItem => ({
//         //         type: 'MenuItem',
//         //         data: menuItem.name
//         //     }));
//         //     return [...menuResults, ...menuItemResults];
//         // });
//         // results.push(...menuResults);
//     });
//     return results;
//}
// constructor() {
//     this.index = new Map();
// }
// addToIndex(type: any, data: any) {
//     const jsonString = JSON.stringify(data).toLowerCase();
//     //return jsonString.includes(keyword);
//     const words = jsonString.match(/\b(\w+)\b/g); // Tokenize text into words
//     if (words) {
//         words.forEach(word => {
//             if (!this.index.has(word)) {
//                 this.index.set(word, []);
//                 console.log(this.index.set(word, []));
//             }
//             this.index.get(word)!.push({ type, data });
//             //console.log(this.index.get(word)!.push({ type, data }));
//         });
//     }
// }
// public performSearch = (keyword: string | number) => {
//     //const results: SearchResult[] = [];
//     const lowerKeyword = keyword.toString().toLowerCase();
//     console.log(this.index.get(lowerKeyword));
//     return this.index.get(lowerKeyword) || [];
// }
//working code - without DS 
// public performSearch = (keyword: string | number) => {
//     const searchKey = keyword.toString().toLowerCase();
//     const results: any[] = [];
//     this.restaurants.forEach(restaurant => {
//         if (this.objectContainsKeyword(restaurant, searchKey)) {
//             results.push({ type: 'Restaurant', data: restaurant.Name });
//         }
//         const menuResults = restaurant.menus.map(menu => {
//             const menuResults = this.objectContainsKeyword(menu, searchKey)
//                 ? [{ type: 'Menu', data: menu.menuName }]
//                 : [];
//             const menuItemResults = menu.menuItems.filter(menuItem => this.objectContainsKeyword(menuItem, searchKey)).map(menuItem => ({
//                 type: 'MenuItem',
//                 data: menuItem.name
//             }));
//             return [...menuResults, ...menuItemResults];
//         });
//         results.push(...menuResults);
//     });
//     return results;
// }
exports.default = Search;
