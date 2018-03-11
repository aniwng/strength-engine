import React, { Component } from 'react';
import Sets from './Sets';

import './Routine.css';

class Routine extends Component {
    render() {
        const routines = this.props.routines;

        const listItems = routines.map(routine =>
            <div className="routine" key={routine.type}>
                {routine.label}
                <Sets day={this.props.day} type={routine.type} sets={routine.sets} input={this.props.input}/>
            </div>
        );

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default Routine;