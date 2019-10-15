import React from 'react';
import {todayDate} from '../../Util/Helpers';

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>*/

/*const neutralWeather = "" */

export class SevenDayForecast extends React.Component {
    render() {
        const weekdayHeaders = todayDate.weekdayTable;
        const temperatures = todayDate.dailyTemperature;
        return (
              <div>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>{this.props.Location}</h2>
                  <table>
                      <tr>
                          {weekdayHeaders}
                      </tr>
                      <tr>
                          {temperatures}
                      </tr>
                  </table>
              </div>
        )
    }
}