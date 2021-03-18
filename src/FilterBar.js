import React from 'react';


const FILTER_VALUES = {
    ALL: 'all',
    WINNERS: 'winner',
    LOSERS: 'loser',
};
class FilterBar extends React.Component {

    isActive = async (filter) => filter === this.props.currentFilter;

    render () {

        const filters = Object.values(FILTER_VALUES);
        return (
            <div>
                {filters.map(filter => <button className={this.isActive(filter) ? 'FilterBar-Filter-active' : ''} onClick={() => this.props.onChange(filter)}>{filter.toUpperCase()}</button> )}
            </div>
        )
    }

}

export default FilterBar;