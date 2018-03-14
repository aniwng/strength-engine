import React, { Component } from 'react';
import Input from './Input';

import './TrainingInputs.css';

class TrainingInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
        this.trainingNumChange = this.trainingNumChange.bind(this);
    }

    trainingNumChange(type, trainingNum) {
        this.props.onChange(type, trainingNum);
    }

    render() {
        const inputs = Array.from(this.props.inputs.keys());
        const listItems = inputs.map(input =>
            <Input 
                label={input} 
                key={input} 
                onChange={this.trainingNumChange}
            />
        );
        return (
            <div className="training-input-container">
                {listItems}
            </div>
        );
    }
}

export default TrainingInputs;