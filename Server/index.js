const express = require('express')
const App = express();
const Port = process.env.PORT || 5000
const axios = require('axios');
const cors = require('cors');

App.use(cors());
App.use('/:productId', express.static('./Public'))

App.get('/product/:productID', (req, res) => {
  axios.get(`http://localhost:5004/product/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/title/:productID', (req, res) => {
  axios.get(`http://localhost:5005/title/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/reviews/:productID', (req, res) => {
  axios.get(`http://localhost:5005/reviews/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/inventory/:productID', (req, res) => {
  axios.get(`http://localhost:5004/inventory/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/photos/:productID', (req, res) => {
  axios.get(`http://localhost:5001/photos/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/photos', (req, res) => {
  axios.get(`http://localhost:5001/photos/`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/overview/:productID', (req, res) => {
  axios.get(`http://3.16.235.27:5007/overview/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/overview', (req, res) => {
  axios.get(`http://3.16.235.27:5007`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/similar', (req, res) => {
  axios.get(`http://3.16.235.27:5008/similar`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/similar/:productID', (req, res) => {
  axios.get(`http://3.16.235.27:5008/similar/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/images/:productID', (req, res) => {
  axios.get(`http://localhost:5003/images/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/images', (req, res) => {
  axios.get(`http://localhost:5003`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/images/thumbnailImages/:productID', function (req, res) {
  axios.get(`http://localhost:5003/images/thumbnailImages/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/images/mainImages/:productID', function (req, res) {
  axios.get(`http://localhost:5003/images/mainImages/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/images/detailedImages/:productID', function (req, res) {
  axios.get(`http://localhost:5003/images/detailedImages/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/locations/:productID', function (req, res) {
  axios.get(` http://3.136.32.206:5002/locations/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.get('/materials/:productID', function (req, res) {
  axios.get(` http://3.136.32.206:5002/materials/${req.params.productID}`)
    .then(response => {
      res.send(response.data);
    })
    .catch((err) => console.log(err))
})
App.listen(Port, () => console.log(`Server is listening on port ${Port}`))