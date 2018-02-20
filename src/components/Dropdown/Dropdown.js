import React, { Component } from 'react';

class Dropdown extends Component {
    changeProgram(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const programList = this.props.programList;
        const listItems = programList.map(program =>
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