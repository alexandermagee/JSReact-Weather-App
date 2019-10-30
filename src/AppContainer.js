import React from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ForecastType} from './Components/ForecastType/ForecastType';
import {SevenDayForecast} from './Components/SevenDayForecast/SevenDayForecast';
import {OneDayForecast} from './Components/OneDayForecast/OneDayForecast';
import './App.css';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ForecastType: "",
            Location: "London",
            OneDayForecastData: [],
            ODFIcons: [],
            SDFDayOfWeekData: [],
            SDFTemperatureData: [],
            SDFPrecipitationData: [],
            SDFWindData: [],
            SDFDescriptionData: []
            }
    }

    updateOneDayData = (descriptions,icons) => {
        this.setState({
            OneDayForecastData: descriptions,
            ODFIcons: icons
        })
    }

    updateSevenDayData = (dayOfWeekData,temperatureData,precipitationData,windData,description) => {
        this.setState({
            SDFDayOfWeekData: dayOfWeekData,
            SDFTemperatureData: temperatureData,
            SDFPrecipitationData: precipitationData,
            SDFWindData: windData,
            SDFDescriptionData: description,
        })
    }

    selectForecastType = selected => {
        this.setState({
            ForecastType: selected
        })
    }

    selectLocation = selected => {
        this.setState({
            Location: selected
        })
    }

    render() {
        return (
            <div>

            <SearchBar selectLocation={this.selectLocation} />

            <ForecastType selectForecastType={this.selectForecastType} />

            <SevenDayForecast 
            Location={this.state.Location} 
            ForecastType={this.state.ForecastType}
            updateSevenDayData={this.updateSevenDayData} 
            SDFDayOfWeekData={this.state.SDFDayOfWeekData}
            SDFTemperatureData={this.state.SDFTemperatureData}
            SDFPrecipitationData={this.state.SDFPrecipitationData}
            SDFWindData={this.state.SDFWindData}
            SDFDescriptionData={this.state.SDFDescriptionData}
             />

            <OneDayForecast Location={this.state.Location} 
            ForecastType={this.state.ForecastType} 
            updateOneDayData={this.updateOneDayData} 
            OneDayForecastData={this.state.OneDayForecastData}
            ODFIcons={this.state.ODFIcons}/>
            </div>

           
        )
    }
}