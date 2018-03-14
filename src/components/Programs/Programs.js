import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import ProgramDetails from '../Programs/ProgramDetails';
import TrainingInputs from '../TrainingInputs/TrainingInputs';

import './Programs.css';

import ProgramData from '../../data/programs.json';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programList: [],
            currentProgramDetails: {},
            inputs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTrainingChange = this.handleTrainingChange.bind(this);
    }

    componentDidMount() {
        const programList = ProgramData.map(program => {
            return {
                program: program.program,
                label: program.label
            }
        });
        this.setState({programList: programList});
        this.handleChange(programList[0].program);
    }

    shouldComponentUpdate() {
        return true;
    }

    handleChange(selectedProgram) {
        const currentProgram = ProgramData.find(program => {
            return program.program === selectedProgram;
        });
        const inputValues = this.setupInputValues(currentProgram.inputs);
        this.setState({
            currentProgramDetails: currentProgram,
            inputs: inputValues
        });
    }

    handleTrainingChange(type, trainingNum) {
        const inputs = this.state.inputs;
        inputs.set(type, trainingNum);
        this.setState({
            inputs: inputs
        });
    }

    setupInputValues(inputs) {
        const stateInputs = this.state.inputs;
        console.log(stateInputs);
        return inputs.reduce((map, obj) => {
            const val = stateInputs.length ? stateInputs.get(obj) : 0;
            map.set(obj, val);
            return map;
        }, new Map());
    }

    render() {
        return (
            <div>
                <div id="user-input-container">
                    <Dropdown 
                        programList={this.state.programList} 
                        onChange={this.handleChange}
                    />
                    <TrainingInputs 
                        inputs={this.state.inputs} 
                        onChange={this.handleTrainingChange}
                    />
                </div>
                <ProgramDetails 
                    details={this.state.currentProgramDetails} 
                    inputs={this.state.inputs}
                />
            </div>    
        );
    }
}

export default Programs;