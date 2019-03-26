import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Card from '../Card';
import Button from '../Button';

class App extends Component {
  state = {
    drinks: [],
    new: false
  }

  // Fetch the ingredient and measure
  getValueOfKeys(inputArg, regex) {
    return Object.keys(inputArg).filter((key) => {
      return regex.test(key) && inputArg[key]
      }).map((key) => inputArg[key])
  }

  fetchApi = () => {
    const api = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(api)
    .then(res => res.json())
    .then(data => {
      
      this.setState({
        drinks: data.drinks[0],
        new: true
      });
    });
  }
  
  render() {
    console.log(this.state.drinks);
    return (
      <div className="App">
      <Header/>
      {this.state.new && (        
        <Card
          image={this.state.drinks.strDrinkThumb}
          drinkName={this.state.drinks.strDrink}
          glass={this.state.drinks.strGlass}
          need="You need the following: "
          instructions={this.state.drinks.strInstructions}
          ingredients={this.getValueOfKeys(this.state.drinks, /strIngredient/)}
          measure={this.getValueOfKeys(this.state.drinks, /strMeasure/)}        
        />
      )}

      <Button handleButton={this.fetchApi}></Button>
          
      </div>
    );
  }
}

export default App;
