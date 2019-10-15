import React from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ForecastType} from './Components/ForecastType/ForecastType';
import {SevenDayForecast} from './Components/SevenDayForecast/SevenDayForecast';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ForecastType: "",
            Location: "London"
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
            </div>
        )
    }
}