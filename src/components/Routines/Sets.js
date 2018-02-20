import React, { Component } from 'react';

import './Sets.css';

class Sets extends Component {
    render() {
        const sets = this.props.sets;

        const listItems = sets.map((set, i) =>
            <div key={`${this.props.day}-${this.props.type}-${i}`}>
                <span>{set.reps} x {set.multiplier}</span>
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