const express =require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./categories.json');

app.get('/', (req, res) => {
  res.send('News API Running')
})

app.get('/product-categories', (req, res) => {
  res.send(categories)
})

app.get('/product-categories/:id', (req, res) => {
  const id = req.params.id;
  const selectedProduct = categories.find(cat => cat._id == id)
  res.send(selectedProduct)
})

app.listen(port, () => {
  console.log('Server running', port)
})