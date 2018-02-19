import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import ProgramData from '../../data/programs.json';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: []
        }
    }

    componentDidMount() {
        const programList = ProgramData.map(program => program.program);
        this.setState({programs: programList});
    }

    handleChange(e) {
        // Show program details
    }

    render() {
        return (
            <Dropdown programs={this.state.programs} onChange={this.handleChange}/>
        );
    }
}

export default Programs;