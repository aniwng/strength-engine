import React, { Component } from 'react';
import Routine from './Routine';

class Routines extends Component {
    render() {
        const days = this.props.days;
        const listItems = days.map(day =>
            <div key={day.day}>
                {day.day}
                <Routine day={day.day} routines={day.routines}/>
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