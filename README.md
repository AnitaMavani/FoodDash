# FoodDash

A REST API for a food delivery app built with TypeScript and Express.js. Covers user auth, restaurant and menu management, and order placement — the core backend workflows you would find in something like Uber Eats.

Built this to practice TypeScript in a real-world API context, working with relational data and JWT authentication without relying on an ORM.

---

## Stack

- **TypeScript** + **Node.js**
- **Express.js** for routing and middleware
- **JWT** for authentication
- **MySQL** for persistence
- **tsc** for compilation

---

## What it does

- Register and login with JWT — protected routes reject requests without a valid token
- Create and browse restaurants
- Each restaurant has one or more menus, each menu has items with prices
- Logged-in users can place orders tied to specific items and restaurants
- Entities are properly related: User, Order, Restaurant, Menu, MenuItem

---

## Getting started

```bash
git clone https://github.com/AnitaMavani/FoodDash.git
cd FoodDash
yarn install
npx tsc
node ./dist/index.js
```

Requires Node.js v18+

---

## API

### Auth
```
POST /auth/register
POST /auth/login
```

### Restaurants
```
GET  /restaurants
GET  /restaurants/:id
POST /restaurants          (auth required)
```

### Menus
```
GET  /restaurants/:id/menus
POST /restaurants/:id/menus   (auth required)
```

### Menu Items
```
GET  /menus/:id/items
POST /menus/:id/items         (auth required)
```

### Orders
```
POST /orders                  (auth required)
GET  /orders/:userId          (auth required)
```

---

## Planned improvements

- [ ] Add input validation (Zod or express-validator)
- [ ] Order status tracking (placed, preparing, delivered)
- [ ] Pagination on list endpoints
- [ ] Unit tests for controllers
- [ ] Docker setup for easier local development
- [ ] Frontend UI with React

---

## Author

Anita Mavani — [LinkedIn](https://linkedin.com/in/anita-mavani) · [GitHub](https://github.com/AnitaMavani)
