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

    handleChange(selectedProgram) {
        const currentProgram = ProgramData.find(program => {
            return program.program === selectedProgram;
        });
        const inputValues = currentProgram.inputs.reduce((map, obj) => {
            map.set(obj, 0);
            return map;
        }, new Map());
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

    render() {
        return (
            <div>
                <div id="user-input-container">
                    <Dropdown programList={this.state.programList} onChange={this.handleChange.bind(this)}/>
                    <TrainingInputs inputs={this.state.inputs} onChange={this.handleTrainingChange.bind(this)}/>
                </div>
                <ProgramDetails details={this.state.currentProgramDetails} inputs={this.state.inputs}/>
            </div>    
        );
    }
}

export default Programs;