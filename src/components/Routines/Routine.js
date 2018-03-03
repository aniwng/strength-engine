import React, { Component } from 'react';
import Sets from './Sets';

class Routine extends Component {
    render() {
        const routines = this.props.routines;

        const listItems = routines.map(routine =>
            <div key={routine.type}>
                {routine.label}
                <Sets day={this.props.day} type={routine.type} sets={routine.sets}/>
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