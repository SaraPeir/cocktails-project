const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 4, firstName: 'Sara', lastName: 'Peirce'}
  ];

  res.json(customers);
});

app.get('/api/analcolic', (req, res) => {
  const analcolic = [
    {strDrink: "Dirty Nipple", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vtyqrt1461866508.jpg", idDrink: "14466"},

    {strDrink: "Downshift", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg", idDrink: "16991"},
    {strDrink: "Dragonfly", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/lnvbip1504389100.jpg", idDrink: "11320"}
  ];

  res.json(analcolic);
});

app.get('/api/alcolic', (req, res) => {
  const alcolic = [
    {strDrink: "Apricot punch", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg", idDrink: "15849"},
    {strDrink: "Archbishop", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xpqwrt1441207307.jpg", idDrink: "11052"},
    {strDrink: "Arctic Fish", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg", idDrink: "14622"}
  ];

  res.json(alcolic);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
