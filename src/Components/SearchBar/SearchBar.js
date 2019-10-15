import React from 'react';

export class SearchBar extends React.Component {

    handleChange = e => {
        const newLocation = e.target.value;
        this.props.selectLocation(newLocation);
    }

    render() {
        return (
                <select name="location" onChange={this.handleChange}>
                    <option name="location" value="London">London</option>
                    <option name="location" value="Paris">Paris</option>
                    <option name="location" value="Prague">Prague</option>
                    <option name="location" value="New York">New York</option>
                </select>
        )
    }
}