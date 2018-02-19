import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentProgram: this.props.programs[0]
        }
    }

    changeProgram(e) {
        this.setState({currentProgram: e.target.value});
        this.props.onChange(e.target.value);
    }

    render() {
        const programs = this.props.programs;
        const listItems = programs.map(program =>
            <option value={program} key={program}>
                {program}
            </option>
        );
        return (
            <select onChange={this.changeProgram.bind(this)}>{listItems}</select> 
        );   
    }
}

export default Dropdown;