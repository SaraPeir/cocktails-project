import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg'
import './App.css';
import Hero from './components/Hero/hero';
import Alcolic from './components/Alcolic/alcolic';
//import Analcolic from './components/Analcolic/analcolic';


//import Alcolic from './components/alcolic';
import Analcolic from './components/analcolic';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],

    idGin: [],
    idVodka: [],

    ginDrinksDetails: [],
    vodkaDrinksDetails: [],

    ginFilteredArray: [],
    vodkaFilteredArray: [],
    rhumFilteredArray: [],

    ginSelectValue: 'Gin cocktails',
    vodkaSelectValue: 'Vodka cocktails',
    rhumSelectValue: 'Rhum cocktails',

    gHidden: 'hidden',
    ginDrinkName: '',
    ginDrinkPhoto: '',
    ginDrinkRecipe: '',
    ginDrinkIngredients: '',
    ginDrinkMeasures: '',



    vHidden: 'hidden',
    vodkaDrinkName: '',
    vodkaDrinkPhoto: '',
    vodkaDrinkRecipe: '',
    vodkaDrinkIngredients: '',
    vodkaDrinkMeasures: '',

    rHidden: 'hidden',
    rhumDrinkName: '',
    rhumDrinkPhoto: '',
    rhumDrinkRecipe: '',
    rhumDrinkIngredients: ''
  }
    this.requestInfoGinDrinks = this.requestInfoGinDrinks.bind(this);
    this.requestInfoVodkaDrinks = this.requestInfoVodkaDrinks.bind(this);

    this.resetGinSelect = this.resetGinSelect.bind(this);
    this.resetVodkaSelect = this.resetVodkaSelect.bind(this);
    this.resetRhumSelect = this.resetRhumSelect.bind(this);

    this.changeGinSelectValue = this.changeGinSelectValue.bind(this);
    this.changeVodkaSelectValue = this.changeVodkaSelectValue.bind(this);
    this.changeRhumSelectValue = this.changeRhumSelectValue.bind(this);
  }

requestInfoGinDrinks(){
  const idGin = this.state.idGin;

  if(idGin !== undefined && idGin.length > 0) {
    var fetchsArray = [];
    for(let i= 0; i < idGin.length; i++){
      fetchsArray.push(fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idGin[i]}`)
                        .then(response => response.json()));
    }

    Promise.all(fetchsArray)
    .then(data => {
      var ginDrinksDetailsArray= this.state.ginDrinksDetails;
      ginDrinksDetailsArray.push(data);
      this.setState({
        ginDrinksDetails : ginDrinksDetailsArray
      });
    });
  } else {
    this.setState({
      ginDrinksDetails : []
    });
  }
}


requestInfoVodkaDrinks(){
  const idVodka = this.state.idVodka;

  if(idVodka !== undefined && idVodka.length > 0) {
    var fetchsArray = [];
    for(let i= 0; i < idVodka.length; i++){
      fetchsArray.push(fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idVodka[i]}`)
                        .then(response => response.json()));
    }

    Promise.all(fetchsArray)
    .then(data => {
      var vodkaDrinksDetailsArray= this.state.vodkaDrinksDetails;
      vodkaDrinksDetailsArray.push(data);
      this.setState({
        vodkaDrinksDetails : vodkaDrinksDetailsArray
      });
    });
  } else {
    this.setState({
      vodkaDrinksDetails : []
    });
  }
}

    resetGinSelect(event){
      this.setState({
        ginSelectValue: 'Gin cocktails',
        gHidden: 'hidden'
      });
    }

      resetVodkaSelect(event){
        this.setState({
        vodkaSelectValue: 'Vodka cocktails',
        vHidden: 'hidden'
        });
      }

      resetRhumSelect(event){
        this.setState({
        rhumSelectValue: 'Rhum cocktails',
        rHidden: 'hidden'
        });
      }

    changeGinSelectValue(event){
      this.setState({
      ginSelectValue: event.target.value
      });
      this.resetVodkaSelect();
      this.resetRhumSelect();

      const ginDrinksDetails = this.state.ginDrinksDetails;
      let selectedDrink = event.target.value;

      if(ginDrinksDetails !== undefined && ginDrinksDetails.length > 0 && selectedDrink !== 'Gin cocktails'){
          let filtered =ginDrinksDetails[0].filter(function(ginDrink, index) {
            return ginDrink.drinks[0].strDrink === selectedDrink;});
                this.setState({
                  ginFilteredArray:filtered,
                  gHidden: '',
                  ginDrinkName: selectedDrink,
                  ginDrinkPhoto: filtered[0].drinks[0].strDrinkThumb,
                  ginDrinkRecipe: filtered[0].drinks[0].strInstructions
                });

            this.generateGinIngredientsArray();

          } else if(selectedDrink == 'Gin cocktails'){
            this.setState({
              ginFilteredArray:[],
              gHidden: 'hidden'
            });
          }
      }

      changeVodkaSelectValue(event){
        this.setState({
        vodkaSelectValue: event.target.value
        });
        this.resetGinSelect();
        this.resetRhumSelect();

        const vodkaDrinksDetails = this.state.vodkaDrinksDetails;
        let selectedDrink = event.target.value;

        if(vodkaDrinksDetails !== undefined && vodkaDrinksDetails.length > 0 && selectedDrink !== 'Vodka cocktails'){
            let filtered =vodkaDrinksDetails[0].filter(function(vodkaDrink, index) {
              return vodkaDrink.drinks[0].strDrink === selectedDrink;});
                  this.setState({
                    vodkaFilteredArray:filtered,
                    vHidden: '',
                    vodkaDrinkName: selectedDrink,
                    vodkaDrinkPhoto: filtered[0].drinks[0].strDrinkThumb,
                    vodkaDrinkRecipe: filtered[0].drinks[0].strInstructions
                  });
            this.generateVodkaIngredientsArray()
            } else if(selectedDrink == 'Vodka cocktails'){
              this.setState({
                vodkaFilteredArray:[],
                vHidden: 'hidden'
              });
            }
        }


        generateGinIngredientsArray(){
          const ginFilteredArray = this.state.ginFilteredArray;
            if(ginFilteredArray !== undefined && ginFilteredArray.length > 0){
              let ingredients15 = [ginFilteredArray[0].drinks[0].strIngredient1, ginFilteredArray[0].drinks[0].strIngredient2,
              ginFilteredArray[0].drinks[0].strIngredient3,
              ginFilteredArray[0].drinks[0].strIngredient4,
              ginFilteredArray[0].drinks[0].strIngredient5,
              ginFilteredArray[0].drinks[0].strIngredient6,
              ginFilteredArray[0].drinks[0].strIngredient7,
              ginFilteredArray[0].drinks[0].strIngredient8,
              ginFilteredArray[0].drinks[0].strIngredient9,
              ginFilteredArray[0].drinks[0].strIngredient10,
              ginFilteredArray[0].drinks[0].strIngredient11,
              ginFilteredArray[0].drinks[0].strIngredient12,
              ginFilteredArray[0].drinks[0].strIngredient13,
              ginFilteredArray[0].drinks[0].strIngredient14,
              ginFilteredArray[0].drinks[0].strIngredient15
            ];

          let actualGinIngredients = ingredients15.filter(function(ingredient, index){
              return ingredient !== ''  && ingredient !== ' ' && ingredient !== null;
            })

          console.log(actualGinIngredients);

          console.log(actualGinIngredients.length);

          let measures15 = [ginFilteredArray[0].drinks[0].strMeasure1,
              ginFilteredArray[0].drinks[0].strMeasure2,
              ginFilteredArray[0].drinks[0].strMeasure3,
              ginFilteredArray[0].drinks[0].strMeasure4,
              ginFilteredArray[0].drinks[0].strMeasure5,
              ginFilteredArray[0].drinks[0].strMeasure6,
              ginFilteredArray[0].drinks[0].strMeasure7,
              ginFilteredArray[0].drinks[0].strMeasure8,
              ginFilteredArray[0].drinks[0].strMeasure9,
              ginFilteredArray[0].drinks[0].strMeasure10,
              ginFilteredArray[0].drinks[0].strMeasure11,
              ginFilteredArray[0].drinks[0].strMeasure12,
              ginFilteredArray[0].drinks[0].strMeasure13,
              ginFilteredArray[0].drinks[0].strMeasure14,
              ginFilteredArray[0].drinks[0].strMeasure15
            ];

          let actualGinMeasures = measures15.filter(function(measure, index){
            return measure !== ''  && measure !== ' ' && measure !== null && measure !== '↵';
          })
          console.log(actualGinMeasures);

          let ingredients = actualGinIngredients.join();
          let measures = actualGinMeasures.join();
          console.log(ingredients);
          console.log(measures);

          this.setState({
            ginDrinkIngredients: ingredients,
            ginDrinkMeasures: measures
          });
        }
        }

      generateVodkaIngredientsArray(){
        const vodkaFilteredArray = this.state.vodkaFilteredArray;
          if(vodkaFilteredArray !== undefined && vodkaFilteredArray.length > 0){
            let ingredients15 = [vodkaFilteredArray[0].drinks[0].strIngredient1, vodkaFilteredArray[0].drinks[0].strIngredient2,
            vodkaFilteredArray[0].drinks[0].strIngredient3,
            vodkaFilteredArray[0].drinks[0].strIngredient4,
            vodkaFilteredArray[0].drinks[0].strIngredient5,
            vodkaFilteredArray[0].drinks[0].strIngredient6,
            vodkaFilteredArray[0].drinks[0].strIngredient7,
            vodkaFilteredArray[0].drinks[0].strIngredient8,
            vodkaFilteredArray[0].drinks[0].strIngredient9,
            vodkaFilteredArray[0].drinks[0].strIngredient10,
            vodkaFilteredArray[0].drinks[0].strIngredient11,
            vodkaFilteredArray[0].drinks[0].strIngredient12,
            vodkaFilteredArray[0].drinks[0].strIngredient13,
            vodkaFilteredArray[0].drinks[0].strIngredient14,
            vodkaFilteredArray[0].drinks[0].strIngredient15
          ];

        let actualVodkaIngredients = ingredients15.filter(function(ingredient, index){
            return ingredient !== ''  && ingredient !== ' ' && ingredient !== null;
          })

        console.log(actualVodkaIngredients);

        console.log(actualVodkaIngredients.length);

        let measures15 = [vodkaFilteredArray[0].drinks[0].strMeasure1,
            vodkaFilteredArray[0].drinks[0].strMeasure2,
            vodkaFilteredArray[0].drinks[0].strMeasure3,
            vodkaFilteredArray[0].drinks[0].strMeasure4,
            vodkaFilteredArray[0].drinks[0].strMeasure5,
            vodkaFilteredArray[0].drinks[0].strMeasure6,
            vodkaFilteredArray[0].drinks[0].strMeasure7,
            vodkaFilteredArray[0].drinks[0].strMeasure8,
            vodkaFilteredArray[0].drinks[0].strMeasure9,
            vodkaFilteredArray[0].drinks[0].strMeasure10,
            vodkaFilteredArray[0].drinks[0].strMeasure11,
            vodkaFilteredArray[0].drinks[0].strMeasure12,
            vodkaFilteredArray[0].drinks[0].strMeasure13,
            vodkaFilteredArray[0].drinks[0].strMeasure14,
            vodkaFilteredArray[0].drinks[0].strMeasure15
          ];

        let actualVodkaMeasures = measures15.filter(function(measure, index){
          return measure !== ''  && measure !== ' ' && measure !== null && measure !== '↵';
        })
        console.log(actualVodkaMeasures);
        let ingredients = actualVodkaIngredients.join();
        let measures = actualVodkaMeasures.join();
        console.log(ingredients);
        console.log(measures);

        this.setState({
          vodkaDrinkIngredients: ingredients,
          vodkaDrinkMeasures: measures
        });
      }
    }

    changeRhumSelectValue(event){
      this.setState({
        rhumSelectValue: event.target.value
      });
      this.resetGinSelect();
      this.resetVodkaSelect();
    const rhumDrinksDetails = this.state.data;
    let selectedDrink = event.target.value;
    if(rhumDrinksDetails !== undefined && rhumDrinksDetails.length > 0 && selectedDrink !== 'Rhum cocktails'){
        let filtered =rhumDrinksDetails[0][3].filter(function(rhumDrink, index) {
          return rhumDrink.name === selectedDrink;});
              this.setState({
                rhumFilteredArray:filtered,
                rHidden: '',
                rhumDrinkName: selectedDrink,
                rhumDrinkRecipe: filtered[0].recipe,
                rhumDrinkIngredients: filtered[0].ingredients,
                rhumDrinkPhoto: filtered[0].imgsrc
              });

        } else if(selectedDrink == 'Rhum cocktails'){
          this.setState({
            rhumFilteredArray:[],
            rHidden: 'hidden'
          });
        }
    }

    requestInfo() {
      var apiAlcoholicCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`).then(response => response.json());
      var apiGinCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`).then(response => response.json());
      var apiVodkaCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`).then(response => response.json());
      var apiRhumCocktails =  fetch('/api/rhum').then(response => response.json());
      var apiNotAlcoholicCocktails = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response => response.json());
      var combinedData = [apiAlcoholicCocktails, apiGinCocktails, apiVodkaCocktails, apiRhumCocktails, apiNotAlcoholicCocktails];
      Promise.all(combinedData).then(c => {
      let allCocktailsData = this.state.data;
      allCocktailsData.push(c);
      this.setState({
        data:allCocktailsData,
        idGin:allCocktailsData[0][1].drinks.map( (g, index) => g.idDrink),
        idVodka:allCocktailsData[0][2].drinks.map( (v, index) => v.idDrink)
     });
        this.requestInfoGinDrinks();
        this.requestInfoVodkaDrinks();
    })
    }

    componentDidMount(){
      this.requestInfo();
    }

    render () {
      return (
        <div className="app">
        <Switch>
        <Route exact path='/' component={ Hero } />
        <Route path='/alcolic' render={(props) => <Alcolic {...props} array={this.state.data} gSelectValue={this.state.ginSelectValue} onChangeGinSelectValue= {this.changeGinSelectValue} vSelectValue={this.state.vodkaSelectValue} onChangeVodkaSelectValue={this.changeVodkaSelectValue}
        rSelectValue={this.state.rhumSelectValue} onChangeRhumSelectValue={this.changeRhumSelectValue}

        gDisplNone = {this.state.gHidden} ginDrinkName={this.state.ginDrinkName}
        gDrinkPhoto = {this.state.ginDrinkPhoto} gDrinkRecipe = {this.state.ginDrinkRecipe}
        gDrinkIngredients={this.state.ginDrinkIngredients} gDrinkMeasures={this.state.ginDrinkMeasures}

        vDisplNone = {this.state.vHidden} vodkaDrinkName={this.state.vodkaDrinkName}
        vDrinkPhoto = {this.state.vodkaDrinkPhoto} vDrinkRecipe = {this.state.vodkaDrinkRecipe}
        vDrinkIngredients={this.state.vodkaDrinkIngredients} vDrinkMeasures={this.state.vodkaDrinkMeasures}


        rDisplNone = {this.state.rHidden} rhumDrinkName={this.state.rhumDrinkName}
        rDrinkPhoto = {this.state.rhumDrinkPhoto} rDrinkRecipe = {this.state.rhumDrinkRecipe}
        rDrinkIngredients={this.state.rhumDrinkIngredients} rDrinkMeasures={this.state.rhumDrinkMeasures}
         />}/>
        <Route path='/analcolic' component={ Analcolic } />
        </Switch>
        </div>
      );
  }
  }

  export default App

  // <Route exact path='/' render={(props) => <Alcolic {...props} array={this.state.data}/>}/>
  // <Route path='/analcolic' render={(props) => <Analcolic {...props} array={this.state.data}/>}/>
  // <Route exact path='/' component={ Alcolic } />
  // <Route path='/analcolic' component={ Analcolic } />
