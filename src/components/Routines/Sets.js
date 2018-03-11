import React, { Component } from 'react';

import './Sets.css';

class Sets extends Component {
    calculateTrainingValue(val, multiplier) {
        // Round to next multiple of 5
        return Math.ceil((val * multiplier)/5) * 5;
    }

    render() {
        const sets = this.props.sets;
        const inputs = this.props.inputs;

        const listItems = sets.map((set, i) =>
            <div className="set" key={`${this.props.day}-${this.props.type}-${i}`}>
                {set.reps}x{this.calculateTrainingValue(inputs.get(set.setValue || this.props.type), set.multiplier)}
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