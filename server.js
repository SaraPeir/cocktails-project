const express = require('express');

const app = express();

app.get('/api/rhum', (req, res) => {
  const rhum = [
    {name: 'Tortuga', ingredients: 'El Dorado 8yr Rum (2 oz), cinnamon powder (dash), orange juice (dash), lemon juice (dash), simple syrup (0.5 oz)', recipe: 'Shake ingredients with ice. Strain over fresh ice into a rocks glass. Garnish with candied ginger on a skewer.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rh-tortuga-wagtouicz-04-1505859243.jpg?crop=0.447xw:1.00xh;0.230xw,0&resize=980:*' },
    {name: 'Wiki Wiki', ingredients: 'Blanc Rhum Agricole (1.5 oz), mango brandy (0.5 oz), fresh lime juice (1 oz), fresh pineapple juice (1 oz), petite cane syrup (0.5 oz), 1/2 peeled kiwi', recipe: 'Muddle kiwi in tall glass, add liquid ingredients. Insert swizzle stick, add crushed ice, swizzle. Garnish with pineapple crescent, pineapple fronds, lime wheel, kiwi slice, and orchid.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wikiwiki-threedots-horiz-1501794238.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*' },
    {name: 'The Lamborn', ingredients: 'Mount Gay Silver rum (2 oz), pea juice (2 oz), fresh lime juice (1 oz), jasmine syrup (0.5 oz)', recipe: 'Shake with ice and strain into a highball glass over fresh ice. Garnish with pea shoots and flower.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thelamborn-gk-1493417675.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    {name: 'Caribbean Coco', ingredients: 'El Dorado 3 Year rum (1 oz), Clément Coco rhum (1 oz), coconut milk-based yogurt (0.33 oz), symple syrup (0.5 oz), lime juice (0.5 oz), Angostura Bitters (1 dash)', recipe: 'Shake all ingredients with ice and strain into a coconut over ice. Garnish with a generous sprig of mint.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caribbean-coco-small-1493417458.jpg?crop=0.8153935185185185xw:1xh;center,top&resize=980:*' },
      {name: 'Salvation Burger Rhum Cocktail', ingredients: 'Diplomatico Anejo Rhum (1.5 oz), Ancho Reyes (0.5 oz), demerara syrup (0.125 oz), Scrappy Cardamom Bitters (2 dashes), Angostura Bitters (2 dash)', recipe: 'Add all ingredients to a mixing glass with ice. Stir until perfectly chilled, and strain over fresh ice into a rocks glass with a large ice cube. Garnish with an orange twist.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rum-salvationburger-1493417030.jpeg?crop=0.447xw:1.00xh;0.104xw,0&resize=980:*' },
      {name: 'Walking Far From Home', ingredients: 'Plantation White Rum (2 oz), red currant puree (1.5 oz), fresh lime juice (0.25 oz), maple syrup (1:1) (0.25 oz), 1 pinch of Raw Earl Grey Tea, 1 dehydrated lime wheel (for garnish)', recipe: 'In cocktail shaker, combine all ingredients with ice and shake hard for 25 seconds. Double strain over fresh ice into a double rocks glass and garnish with the dehydrated lime wheel.', imgsrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/walking-far-from-home-1493416642.jpg?crop=0.7832798954993468xw:1xh;center,top&resize=980:*' },
    {name: 'Tropic bowl', ingredients: 'Banks 5 Rum (1.5 oz), spiced pineapple syrup (0.75 oz), honey syrup (0.5 oz), fresh lime juice (0.5 oz), 1 muddled strawberry, 1 mint sprig, 1 pinch Salt', recipe: 'Muddle, shake, fine strain on crushed ice in a tiki mug. Optional: garnish with two pineapple leaves, orchid and tiki straw.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/tropic-bowl2_1.jpg?crop=0.447xw:1.00xh;0.401xw,0&resize=980:*' },
    {name: 'Pirates take Manhattan', ingredients: 'Red Harbor Rum (2 oz), Housemade Spring Vermouth (0.5 oz), Allspice Dram (0.25 oz), House made Papaya-Jerk Spiced Bitters (2 dashes)', recipe: 'Combine all ingredients into mixing glass with ice, stir vigorously, strain into coupe glass, and garnish with skewered brandied cherries.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/the-bar-at-the-spectator-2_1.jpg?crop=0.298xw:0.670xh;0.281xw,0.330xh&resize=980:*' },
    {name: 'Piña Colada', ingredients: 'pineapple-infused rum (1.75 oz), pineapple juice (1 oz), lime juice (0.75 oz), Coco Lopez (1.25 dashes), St. Germain (0.25 oz)', recipe: 'Shake, strain into rocks glass with crushed ice. Garnish with pineapple leaf and vanilla bean, finish with freshly grated nutmeg.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/the-vine_pina-colada.jpg?crop=1.0xw:1xh;center,top&resize=980:*' },
    {name: 'Pinapple Daiquiri', ingredients: 'Flor de Caña 7 Rhum (2 parts), pineapple juice (2 parts), fresh lime juice (1/3 parts), extra-fine sugar (2/3 parts)', recipe: 'Combine the pineapple juice, rum, lime juice, sugar, and ½ cup ice in a cocktail shaker and shake to chill. Strain into a stemmed cocktail glass. Garnish with pineapple wedge.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/fdc-pineapple-daiquiri.jpg?crop=1.0xw:1xh;center,top&resize=980:*' },
    {name: 'Caribbean Queen', ingredients: 'Mount Gay Black Barrel Rhum (1.5 oz), freshly pressed pineapple/coconut water 1:1 (1.5 oz), lemongrass juice (0.75 oz), fresh lime juice (0.75 oz), Garnish with a pineapple coaster', recipe: 'Build all ingredients in shaking tin. Add ice, shake till cold. Double strain over fresh ice. Garnish and love.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/caribbean-queens-moses-laboy.jpg?crop=0.457xw:1.00xh;0.364xw,0&resize=980:*' },
    {name: 'Mai Tai', ingredients: 'Ron Zacapa Rhum (2 oz), fresh lime juice (1 oz), Cointreau (0.5 oz),  walnut syrup (0.25 oz), 2 lime cubes', recipe: 'Add all ingredients into a mixing glass and shake well. Serve over crushed ice in a Collins glass. Garnish with half a lime shell/wheel and mint.', imgsrc: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/33/centerbarny_mai-tai.jpg?crop=1xw:0.9996301775147929xh;center,top&resize=980:*' }
  ];
  res.json(rhum);
});

//https://www.townandcountrymag.com/leisure/drinks/g2737/rum-cocktails/?slide=2


app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 4, firstName: 'Sara', lastName: 'Peirce'},
    {id: 5, firstName: 'Porcellino', lastName: 'Coccolato'}
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



// const rhum = [
//   { name: 'Tortuga', ingredient1: 'El Dorado 8yr Rum (2 oz)', ingredient2: 'cinnamon powder (dash)', ingredient3: 'orange juice (dash)', ingredient4: 'lemon juice (dash)', ingredient5: 'simple syrup (0.5 oz)', recipe: 'Shake ingredients with ice. Strain over fresh ice into a rocks glass. Garnish with candied ginger on a skewer.' },
//   { name: 'WIKI WIKI', ingredient1: 'Blanc Rhum Agricole (1.5 oz)', ingredient2: 'mango brandy (0.5 oz)', ingredient3: 'fresh lime juice (1 oz)', ingredient4: 'fresh pineapple juice (1 oz)', ingredient5: 'petite cane syrup (0.5 oz)', ingredient6: '1/2 peeled kiwi', recipe: 'Muddle kiwi in tall glass, add liquid ingredients. Insert swizzle stick, add crushed ice, swizzle. Garnish with pineapple crescent, pineapple fronds, lime wheel, kiwi slice, and orchid.' }
// ];

//
// const rhum = [
//   [{name: 'Tortuga'}, {ingredients: ['El Dorado 8yr Rum (2 oz)','cinnamon powder (dash)', 'orange juice (dash)', 'lemon juice (dash)', 'simple syrup (0.5 oz)']}, {recipe: 'Shake ingredients with ice. Strain over fresh ice into a rocks glass. Garnish with candied ginger on a skewer.' }],
//   [{name: 'WIKI WIKI'}, {ingredients: ['Blanc Rhum Agricole (1.5 oz)', 'mango brandy (0.5 oz)', 'fresh lime juice (1 oz)', 'fresh pineapple juice (1 oz)', 'petite cane syrup (0.5 oz)', '1/2 peeled kiwi']}, {recipe: 'Muddle kiwi in tall glass, add liquid ingredients. Insert swizzle stick, add crushed ice, swizzle. Garnish with pineapple crescent, pineapple fronds, lime wheel, kiwi slice, and orchid.' }]
// ];



// ];
