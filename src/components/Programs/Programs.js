import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import ProgramDetails from '../Programs/ProgramDetails';

import ProgramData from '../../data/programs.json';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programList: [],
            currentProgramDetails: {}
        }
    }

    componentDidMount() {
        const programList = ProgramData.map(program => program.program);
        this.setState({programList: programList});
        this.handleChange(programList[0]);
    }

    handleChange(selectedProgram) {
        const currentProgram = ProgramData.find(program => {
            return program.program === selectedProgram;
        });
        this.setState({currentProgramDetails: currentProgram});
    }

    render() {
        return (
            <div>
                <Dropdown programList={this.state.programList} onChange={this.handleChange.bind(this)}/>
                <ProgramDetails details={this.state.currentProgramDetails}/>
            </div>    
        );
    }
}

export default Programs;