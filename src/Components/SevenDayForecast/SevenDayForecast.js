import React from 'react';
import {sevenDayCalculations} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

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

    render() {

        return (
              <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>Location: {this.props.Location}</h2>
                  <table>
                      <tbody>
                      <tr>
                         <th>Day:</th>{this.props.SDFDayOfWeekData}
                      </tr>  
                      <tr>
                         <td>Temperature:</td>{this.props.SDFTemperatureData}
                      </tr>
                      <tr>
                          <td>Precipitation:</td>{this.props.SDFPrecipitationData}
                      </tr>
                      <tr>
                          <td>Wind:</td>{this.props.SDFWindData}
                      </tr>
                      <tr>
                         <td>Weather:</td>{this.props.SDFDescriptionData}
                      </tr> 
                      </tbody>
                  </table>
              </div>
        )
    }
}
