import React, { Component } from 'react';

import './Sets.css';

class Sets extends Component {
    render() {
        const sets = this.props.sets;

        const listItems = sets.map((set, i) =>
            <div className="set" key={`${this.props.day}-${this.props.type}-${i}`}>
                {set.reps}x{Math.round(this.props.input * set.multiplier)}
            </div>
        );

        return (
            <div className="sets-container">
                {listItems}
            </div>
        )
    }
}

export default Sets;