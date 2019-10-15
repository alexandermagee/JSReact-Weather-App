import React from 'react';

export class ForecastType extends React.Component {

    handleChange = e => {
        const newSelection = e.target.value;
        this.props.selectForecastType(newSelection);
    }

    render() {
        return (
                <form onChange={this.handleChange}>
                    <input type="radio" name="ForecastType" value="Seven Day Forecast" />Seven Day Forecast
                    <input type="radio" name="ForecastType" value="24 Hour Forecast" />24 Hour Forecast
                </form>
        )
    }
}