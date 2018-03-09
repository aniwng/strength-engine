import React, { Component } from 'react';
import Input from './Input';

import './TrainingInputs.css';

const TrainingInputs = () => (
    <div className="training-input-container">
        <Input label="Squat"/>
        <Input label="Bench"/>
        <Input label="Deadlift"/>
        <Input label="Press"/>
    </div>
);

export default TrainingInputs;