import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.props.onChange(this.props.label, e.target.value);
    }

    render() {
        return (
            <div className="training-input">
                <span>{this.props.label}</span>
                <input 
                    type="text" 
                    onChange={this.inputChange}
                />
            </div>
        );
    }
}

export default Input;