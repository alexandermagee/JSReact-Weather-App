import React from 'react';
import {sevenDayCalculations} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

/*const neutralWeather = "" */

export class SevenDayForecast extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {
            currentLocation: this.props.Location,
            weekdayHeaders: "",
            temperatureData: "",
            precipitationData: "",
            windData: "",
            description: ""
        }
    }
    componentDidMount() {
        this.setState({
            weekdayHeaders: sevenDayCalculations.weekdayTable,
            temperatureData: sevenDayCalculations.dailyData(this.state.currentLocation,"temperature"),
            precipitationData: sevenDayCalculations.dailyData(this.state.currentLocation,"precipitation"),
            windData: sevenDayCalculations.dailyData(this.state.currentLocation,"wind"),
            description: sevenDayCalculations.dailyData(this.state.currentLocation,"description")
        })
    }

    handleChange = e => {
        let newLocation = e.target.value;
        this.setState({
            currentLocation: newLocation,
            weekdayHeaders: sevenDayCalculations.weekdayTable,
            temperatureData: sevenDayCalculations.dailyData(newLocation,"temperature"),
            precipitationData: sevenDayCalculations.dailyData(newLocation,"precipitation"),
            windData: sevenDayCalculations.dailyData(newLocation,"wind"),
            description: sevenDayCalculations.dailyData(newLocation,"description")
        })
    } 

  /*componentDidUpdate(){
        /*if(prevState.currentLocation !== this.state.currentLocation){ */
            /*this.setState({
                weekdayHeaders: sevenDayCalculations.weekdayTable,
                temperatureData: sevenDayCalculations.dailyData(this.state.currentLocation,"temperature"),
                precipitationData: sevenDayCalculations.dailyData(this.state.currentLocation,"precipitation"),
                windData: sevenDayCalculations.dailyData(this.state.currentLocation,"wind"),
                description: sevenDayCalculations.dailyData(this.state.currentLocation,"description")
            })  
} */
    
    render() {
       let currentLocation = this.props.Location;
        let weekdayHeaders = sevenDayCalculations.weekdayTable;
        let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let description = sevenDayCalculations.dailyData(currentLocation,"description"); 
        return (
              <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2 /*onChange={this.handleChange} */>{this.props.Location}</h2>
                  <table>
                      <tr>
                          {weekdayHeaders}
                      </tr>  
                      <tr>
                          {temperatureData}
                      </tr>
                      <tr>
                          {precipitationData}
                      </tr>
                      <tr>
                          {windData}
                      </tr>
                      <tr>
                          {description}
                      </tr> 
                  </table>
              </div>
        )
    }
}
