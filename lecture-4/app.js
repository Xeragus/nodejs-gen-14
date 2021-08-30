const express = require('express');
const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '10.99'
  },
  {
    id: 1,
    name: 'T-Shirt',
    price: '10.99'
  }
];

app
  .get('/products', (req, res) => {
    res.send(products);
  })
  .post('/products', (req, res) => {
    products.push(req.body);
    res.send(products);
  })

app.listen('3003', () => {
  console.log('App started on port 3003...');
});

// localhost:3003

// HTTP methods
// 1. GET
// 2. POST
// 3. PUT
// 4. PATCH
// 5. DELETE

// https://time.mk/, URL Uniform Resource Locator
// time.mk -> 192.186.1.4, Domain Name System DNS