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
            input: 100
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
        this.setState({currentProgramDetails: currentProgram});
    }

    handleTrainingChange(trainingNum) {
        this.setState({input: trainingNum});
    }

    render() {
        return (
            <div>
                <div id="user-input-container">
                    <Dropdown programList={this.state.programList} onChange={this.handleChange.bind(this)}/>
                    <TrainingInputs onChange={this.handleTrainingChange.bind(this)}/>
                </div>
                <ProgramDetails details={this.state.currentProgramDetails} input={this.state.input}/>
            </div>    
        );
    }
}

export default Programs;