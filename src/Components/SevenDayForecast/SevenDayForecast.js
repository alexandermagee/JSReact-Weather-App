import React from 'react';
import {sevenDayCalculations} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

/*const neutralWeather = "" */

export class SevenDayForecast extends React.Component {

    componentDidMount() {
        let currentLocation = this.props.Location;
        let dayOfWeekData = sevenDayCalculations.weekdayTable;
        let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let descriptionData = sevenDayCalculations.dailyData(currentLocation,"description"); 


        this.props.updateSevenDayData(dayOfWeekData,temperatureData,precipitationData,windData,descriptionData
            ); 
    }

    componentDidUpdate(prevProps){
        if(this.props.Location !== prevProps.Location){
            let currentLocation = this.props.Location;
        let dayOfWeekData = sevenDayCalculations.weekdayTable;
        let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let descriptionData = sevenDayCalculations.dailyData(currentLocation,"description"); 


        this.props.updateSevenDayData(dayOfWeekData,temperatureData,precipitationData,windData,descriptionData
            );
    }
}

        /*let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let description = sevenDayCalculations.dailyData(currentLocation,"description"); */
    
    render() {
        /*let currentLocation = this.props.Location;
        let weekdayHeaders = sevenDayCalculations.weekdayTable;
        let temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        let precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        let windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        let description = sevenDayCalculations.dailyData(currentLocation,"description"); 
        let data = this.props.SevenDayForecastData; */
        return (
              <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>{this.props.Location}</h2>
                  <table>
                      <tr>
                          {this.props.SDFDayOfWeekData}
                      </tr>  
                      <tr>
                          {this.props.SDFTemperatureData}
                      </tr>
                      <tr>
                          {this.props.SDFPrecipitationData}
                      </tr>
                      <tr>
                          {this.props.SDFWindData}
                      </tr>
                      <tr>
                          {this.props.SDFDescriptionData}
                      </tr> 
                      
                  </table>
              </div>
        )
    }
}
