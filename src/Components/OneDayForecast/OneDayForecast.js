import React from 'react';
import {oneDayCalculations,weatherIcons} from '../../Util/Helpers';


export class OneDayForecast extends React.Component {

    componentDidMount() {
        let descriptionsData = oneDayCalculations.hourlyDataArray(this.props.Location,"description").map(a => a);
        let iconsData = weatherIcons.generateOneDayIcons(this.props.Location);
        this.props.updateOneDayData(descriptionsData,iconsData);

    }

    componentDidUpdate(prevProps) {
        if(this.props.Location !== prevProps.Location || this.props.ForecastType !== prevProps.ForecastType ){
        let newData = oneDayCalculations.hourlyDataArray(this.props.Location,"description")
        let iconsData = weatherIcons.generateOneDayIcons(this.props.Location);
        this.props.updateOneDayData(newData,iconsData);
        console.log(this.props.ForecastType)
        this.props.setODFActive();
        }
    }

    render() {
        let hoursList = oneDayCalculations.hoursList;
        let data = this.props.OneDayForecastData;
        let iconsData = this.props.ODFIcons;
        let isClassActive = this.props.ODFVisibility
        return(
            <div className={isClassActive}>
                  <h1>{this.props.ForecastType}</h1>
                  <h2>Location: {this.props.Location}</h2>
                  <table>
                      <tbody>
                      <tr>
                          <th>Time:</th>
                          {hoursList}
                      </tr>  
                      <tr id="weather">
                          <td>Forecast:</td>
                          {data}
                      </tr> 
                      <tr>
                          {<td></td>}
                          {iconsData}
                        </tr>    
                      </tbody>         
                  </table>
              </div>
        )
    }
}

