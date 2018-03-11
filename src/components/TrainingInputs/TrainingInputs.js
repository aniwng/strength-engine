import React, { Component } from 'react';
import Input from './Input';

import './TrainingInputs.css';

class TrainingInputs extends Component {
    trainingNumChange(trainingNum) {
        this.props.onChange(trainingNum);
    }

    render() {
        return (
            <div className="training-input-container">
                <Input label="Squat" onChange={this.trainingNumChange.bind(this)}/>
                <Input label="Bench" onChange={this.trainingNumChange.bind(this)}/>
                <Input label="Deadlift" onChange={this.trainingNumChange.bind(this)}/>
                <Input label="Press" onChange={this.trainingNumChange.bind(this)}/>
            </div>
        );
    }
}

export default TrainingInputs;