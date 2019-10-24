import React from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ForecastType} from './Components/ForecastType/ForecastType';
import {SevenDayForecast} from './Components/SevenDayForecast/SevenDayForecast';
import {OneDayForecast} from './Components/OneDayForecast/OneDayForecast';
import {oneDayCalculations} from './Util/Helpers';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ForecastType: "",
            Location: "London",
            OneDayForecastData: {
                "temperature" : {},
                "precipitation" : [],
                "wind" : [],
                "description" : []
            }
        }
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
            <SevenDayForecast Location={this.state.Location} ForecastType={this.state.ForecastType} />
            <OneDayForecast Location={this.state.Location} ForecastType={this.state.ForecastType} />
            </div>
        )
    }
}