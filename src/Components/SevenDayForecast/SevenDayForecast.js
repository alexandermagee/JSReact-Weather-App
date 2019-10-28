import React from 'react';
import {sevenDayCalculations} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

/*const neutralWeather = "" */

export class SevenDayForecast extends React.Component {

    componentDidMount() {
        /* let currentLocation = this.props.Location;
        let collectedData
        let weekdayHeaders = sevenDayCalculations.weekdayTable;
        for(let i=0; i<3; i++){
            let currentDataType = sevenDayCalculations.dataTypeIndex[i];
            let rowOfData = sevenDayCalculations.dailyData(currentLocation,currentDataType);
            collectedData.push(rowOfData) 
        }
        let collectedDataArray = collectedData.map(a=> a); */
        this.props.updateSevenDayData("hello");
    }

        /*let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let description = sevenDayCalculations.dailyData(currentLocation,"description"); */
    
    render() {
       let currentLocation = this.props.Location;
        let weekdayHeaders = sevenDayCalculations.weekdayTable;
        let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let description = sevenDayCalculations.dailyData(currentLocation,"description"); 
        let data = this.props.SevenDayForecastData;
        return (
              <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>{this.props.Location}</h2>
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
                      <tr>
                         <td>{data}</td>
                      </tr>
                  </table>
              </div>
        )
    }
}
