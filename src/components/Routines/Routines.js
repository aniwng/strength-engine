import React, { Component } from 'react';
import Routine from './Routine';

import './Routines.css';

class Routines extends Component {
    render() {
        const days = this.props.days;
        const listItems = days.map(day =>
            <div className="routine-container" key={day.day}>
                <div className="day-of-week">{day.day}</div>
                <Routine 
                    day={day.day} 
                    routines={day.routines} 
                    inputs={this.props.inputs}
                />
            </div>
        );

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default Routines;