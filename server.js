const express = require('express');

const app = express();

app.get('/api/rhum', (req, res) => {
  const rhum = [
    { name: 'Tortuga', ingredient1: 'El Dorado 8yr Rum (2 oz)', ingredient2: 'cinnamon powder (dash)', ingredient3: 'orange juice (dash)', ingredient4: 'lemon juice (dash)', ingredient5: 'simple syrup (0.5 oz)', recipe: 'Shake ingredients with ice. Strain over fresh ice into a rocks glass. Garnish with candied ginger on a skewer.' },
    { name: 'WIKI WIKI', ingredient1: 'Blanc Rhum Agricole (1.5 oz)', ingredient2: 'mango brandy (0.5 oz)', ingredient3: 'fresh lime juice (1 oz)', ingredient4: 'fresh pineapple juice (1 oz)', ingredient5: 'petite cane syrup (0.5 oz)', ingredient6: '1/2 peeled kiwi', recipe: 'Muddle kiwi in tall glass, add liquid ingredients. Insert swizzle stick, add crushed ice, swizzle. Garnish with pineapple crescent, pineapple fronds, lime wheel, kiwi slice, and orchid.' }
  ];

  res.json(rhum);
});

//https://www.townandcountrymag.com/leisure/drinks/g2737/rum-cocktails/?slide=2


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
