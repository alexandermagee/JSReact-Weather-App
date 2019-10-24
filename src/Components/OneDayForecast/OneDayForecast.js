import React from 'react';
import {oneDayCalculations} from '../../Util/Helpers';

export class OneDayForecast extends React.Component {

    render() {
        let currentLocation = this.props.Location;
        let hoursList = oneDayCalculations.hoursList;
        let data = Object.values(oneDayCalculations.hourlyData(currentLocation,"description","1100"));
        return(
            <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>{this.props.Location}</h2>
                  <table>
                      <tr>
                          {/*hoursList*/}
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