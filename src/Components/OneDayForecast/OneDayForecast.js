import React from 'react';
import {oneDayCalculations} from '../../Util/Helpers';

export class OneDayForecast extends React.Component {

    componentDidMount() {
        let newData = oneDayCalculations.hourlyDataArray(this.props.Location,"description").map(a => a);
        this.props.updateOneDayData(newData);
    }

    componentDidUpdate(prevProps) {
        if(this.props.Location !== prevProps.Location){
        let newData = oneDayCalculations.hourlyDataArray(this.props.Location,"description").map(a => a);
        this.props.updateOneDayData(newData);
        }
    }

    render() {
        /* let currentLocation = this.props.Location; */
        let hoursList = oneDayCalculations.hoursList;
        /*let data = Object.values(oneDayCalculations.hourlyData(currentLocation,"description","1100")); */
        /* let data = oneDayCalculations.hourlyDataArray(currentLocation,"description"); */
        /* let data = this.props.oneDayForecastData; */
        let data = this.props.OneDayForecastData;
        return(
            <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>{this.props.Location}</h2>
                  <table>
                      <tr>
                          {hoursList}
                      </tr>  
                      <tr>
                          {data}
                      </tr>
                      <tr>
                         
                      </tr>
                      <tr>
                         
                      </tr>
                      <tr>
                          
                      </tr> 
                  </table>
              </div>
        )
    }
}