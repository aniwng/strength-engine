import React, { Component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.changeProgram = this.changeProgram.bind(this);
    }

    changeProgram(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const programList = this.props.programList;
        const listItems = programList.map(program =>
            <option value={program.program} key={program.program}>
                {program.label}
            </option>
        );
        return (
            <select className="program-dropdown" onChange={this.changeProgram}>{listItems}</select> 
        );   
    }
}

export default Dropdown;