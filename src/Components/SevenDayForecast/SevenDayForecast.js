import React from 'react';
import {sevenDayCalculations} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

/*const neutralWeather = "" */

export class SevenDayForecast extends React.Component {
    render() {
        const currentLocation = this.props.Location;
        const weekdayHeaders = sevenDayCalculations.weekdayTable;
        const temperatureData = sevenDayCalculations.dailyData(currentLocation,"temperature");
        const precipitationData = sevenDayCalculations.dailyData(currentLocation,"precipitation");
        const windData = sevenDayCalculations.dailyData(currentLocation,"wind");
        const description = sevenDayCalculations.dailyData(currentLocation,"description");
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
                  </table>
              </div>
        )
    }
}