import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {

    constructor() {
    super()
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    let cities = [["warszawa", 6695624], ["wroclaw", 3081368], ["new_york", 5128581], ["san_francisco", 5391959], 
                ["berlin", 2950159], ["frankfurt", 2925533], ["madrid", 6359304], ["barcelona", 6356055], 
                ["paris", 2968815], ["lyon", 2996944]];
    for (let i = 0; i < cities.length; i++){
      let link = `http://api.openweathermap.org/data/2.5/weather?id=${cities[i][1]}&units=metric&APPID=a0ff2702b3ece8220050aa9f20228089`
      fetch(link)
        .then(response => response.json())
        .then(response => { 
            const city = {
              name: cities[i][0],
              weather: response
            };

            this.setState( {cities: [...this.state.cities, city] } );
        });
    }
}

  render() {
    const cards = this.state.cities.map(city => (
      <Card key={city.name} name={city.name} weather={city.weather}/>
    ))
    return (
      <div className='app'>
        <h1 className='app__header'>Current weather around the world</h1>
        <div className='app__cards-container'>
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
