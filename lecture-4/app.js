const express = require('express');
const app = express();

app
  .get('/', (req, res) => {
    res.send({
      x: 'y',
      z: [12, 3, 4, 6],
      t: true
    });
  })
  .post('/hehe', (req, res) => {
    console.log('NA RUTATA /hehe SE ISPRATI POST REQUEST');
    res.send({
      x: 'y',
      z: [12, 3, 4, 6],
      t: true
    });
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