import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '7ce43c31605c981d0a926c93cb1e6a02';

 class App extends React.Component{
    state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      description: undefined,
      wind: undefined,
      error: undefined
    }

  gettingWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      

      if(city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        var sunrise = data.sys.sunrise;
        var date = new Date();
        date.setTime(sunrise);
        var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(data);
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunrise_date,
          description: data.weather[0].description,
          wind: data.wind.speed,
          error: undefined
        });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          description: undefined,
          wind: undefined,
          error: "Input your city name"
        })
      }
      
  }

  render(){
    return(
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
            <Info> </Info>
            </div>
            <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather.bind(this)}></Form>
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              description={this.state.description}
              wind={this.state.wind}
              error={this.state.error}
            ></Weather>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default App;