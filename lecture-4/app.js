const express = require('express');
const app = express();

app.use(express.json());

let products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '11.99'
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: '14.99'
  }
];


// facebook.com/boban.sugareski
// facebook.com/latas.69
// route parameter
app
  .get('/products', (req, res) => {
    res.send(products);
  })

app
  .get('/products', (req, res) => {
    res.send(products);
  })
  .get('/products/:id', (req, res) => {
    // old timer function
    // const product = products.find(function(product) {
    //   if (product.id == req.params.id) {
    //     return product;
    //   }
    // });

    // new age arrow function
    // const product = products.find(product => {
    //   if (product.id == req.params.id) {
    //     return product;
    //   }
    // });

    // arrow function with short find syntax
    const product = products.find(product => product.id == req.params.id);
 
    res.send(product);
  })
  .post('/products', (req, res) => {
    products.push(req.body);
    res.send(products);
  })
  .patch('/products/:id', (req, res) => {
    products.forEach(product => {
      if (product.id == req.params.id) {
        if (req.body.name) {
          product.name = req.body.name;
        }

        if (req.body.price) {
          product.price = req.body.price;
        }
      }
    });

    res.send(products);
  })
  .delete('/products/:id', (req, res) => {
    const filteredProducts = products.filter(product => product.id != req.params.id);
    products = filteredProducts;

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