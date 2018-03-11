import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
    inputChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="training-input">
                <span>{this.props.label}</span>
                <input type="text" onChange={this.inputChange.bind(this)}/>
            </div>
        );
    }
}

export default Input;