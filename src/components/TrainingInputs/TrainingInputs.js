import React, { Component } from 'react';
import Input from './Input';

import './TrainingInputs.css';

class TrainingInputs extends Component {
    trainingNumChange(type, trainingNum) {
        this.props.onChange(type, trainingNum);
    }

    render() {
        const inputs = Array.from(this.props.inputs.keys());
        const listItems = inputs.map(input =>
            <Input label={input} key={input} onChange={this.trainingNumChange.bind(this)}/>
        );
        return (
            <div className="training-input-container">
                {listItems}
            </div>
        );
    }
}

export default TrainingInputs;