import Restaurants from "./restaurants";
import Menu from "./menu";
import MenuItem from "./menuItem";
import Search from "./search";

const menu1 = new Menu(101, "lunch menu search", true);
const menu2 = new Menu(102, "breakfast menu", true);
const menu3 = new Menu(103, "dinner menu search", true);

const menuItem1 = new MenuItem(111, "pizza", "vegetarian pizza", 20.00, true);
const menuItem2 = new MenuItem(112, "chiken tikka masala", "traditional chiken tikka masala with indian tadka", 30.00, true);
const menuItem3 = new MenuItem(112, "burito bowl", "maxican bowl with healthy options", 10.00, true);

const restaurant1 = new Restaurants(1010, "kama", "main street", 567767788, "everyday : 7AM to 7Pm");
const restaurant2 = new Restaurants(2020, "bahubali", "102 avenue", 453453453, "everyday : 7AM to 7Pm");
const restaurant3 = new Restaurants(3030, "iron", "raita road", 45345345, "everyday : 7AM to 7Pm");
restaurant1.display();
restaurant2.display();
restaurant3.display();

restaurant1.addMenu(menu1);
restaurant1.addMenu(menu2);
restaurant1.addMenu(menu3);
restaurant1.displayMenu();
console.log("");

restaurant1.addMenuItem(menu1, menuItem1);
restaurant1.addMenuItem(menu1, menuItem2);
restaurant1.addMenuItem(menu1, menuItem3);

// restaurant1.updateMenu(menu1, { menuName: "Brunch Menu", isAvailable: false });
// restaurant1.displayMenu();

// restaurant1.updateMenuItem(menu1, menuItem1, { name: "Spaghetti", description: "very tasty", isAvailable: false });

// restaurant1.deleteMenuItem(menu1, menuItem1);

// restaurant1.deleteMenu(menu1);
// restaurant1.displayMenu();

//restaurant1.search("menu");

// const keyword = 'lunch';
// const searchData = new Search();
// let searchResults = searchData.search(keyword, restaurant1);
// if (searchResults) {
//     console.log(`Search results for ${keyword}:`);
// }


//const allRestaurants = [restaurant1, restaurant2, restaurant3];
// Create an instance of the Search class
// const searchInstance = new Search(allRestaurants);

// // Perform a search
// console.log("search result for number");
// const searchResults = searchInstance.performSearch(567);
// console.log("Search Results:");
// searchResults.forEach(result => console.log(result));

// console.log("search result for string");
// const searchResults1 = searchInstance.performSearch("lunch");
// console.log("Search Results:");
// searchResults1.forEach(result => console.log(result));


const search = new Search([restaurant1, restaurant2, restaurant3]);

console.log("Search results for 'tikka':");
const resultsString = search.performSearch("tikka");
resultsString.forEach(result => console.log(result));

// const allRestaurants = [restaurant1, restaurant2, restaurant3];

// // Create a Search instance
// const searchInstance = new Search(allRestaurants);

// // Perform a search
// const searchResults = searchInstance.performSearch("bahubali"); // Example search keyword
// console.log(searchResults);


// if (resultsString) {
//     console.log('Search Results:', resultsString);
// } else {
//     console.log('No results found.');
// }

// console.log("\nSearch results for 101:");
// const resultsNumber = search.performSearch(101);
// resultsNumber.forEach(result => console.log(result));

// const allRestaurants = [restaurant1, restaurant2, restaurant3];
// const searchInstance = new Search();

// // //Adding restaurants, menus, and menu items to index
// allRestaurants.forEach(restaurant => {
//     searchInstance.addToIndex('Restaurant', restaurant);
//     restaurant.menus.forEach(menu => {
//         searchInstance.addToIndex('Menu', menu);
//         menu.menuItems.forEach(menuItem => {
//             searchInstance.addToIndex('MenuItem', menuItem);
//         });
//     });
// });

// Example search
// const keyword = "search"; // Try with different keywords to test
// const results = searchInstance.performSearch(keyword);

// console.log("Search results:", results);













