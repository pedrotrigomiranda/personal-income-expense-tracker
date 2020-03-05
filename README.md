# Income and Expense Tracker

This app allows the user to add income and expenses, with their respective description and amount, to a list of transactions and calculate the total balance.

![Screenshot](/resources/screenshot.png)

## Tech and Methodologies

Backend built with Node.js/Express and MongoDB database.

Fronted uses React with hooks (useState, useContext, useReducer).

Npm packages used:

- Express
- Dotenv
- Mongoose
- Morgan
- Path
- Colors

### How to use

Create a cluster with [MongoDB](https://www.mongodb.com/) Atlas

Use your cluster link on the environment variable `MONGO_URI` located in `config\config.env`

```
git clone https://github.com/pedrotrigomiranda/personal-income-expense-tracker.git

cd personal-income-expense-tracker

npm install

cd client npm install

cd ..

 # Run front and backend
 npm run dev

 # Backend only
 npm run server

 # Frontend only
 npm run client

 # Build client
 cd client
 npm run build

 # Prod
 npm start
```

## Authors

- **Pedro Trigo Miranda** (https://github.com/pedrotrigomiranda)
