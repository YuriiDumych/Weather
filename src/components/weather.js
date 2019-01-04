import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div className="infoWeath">
                {this.props.city &&
                    <div>
                        <p>City: {this.props.city}, {this.props.country}</p>
                        <p>Temperature: {this.props.temp}</p>
                        <p>Sunrise: {this.props.sunrise}</p>
                        <p>Description: {this.props.description}</p>
                        <p>Wind speed: {this.props.wind} m/s</p>
                    </div>
                }
                <p className="error">{this.props.error}</p>
            </div>
           )
        }
    }


export default Weather;