import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
    render() {
        return (
            <div className="training-input">
                <span>{this.props.label}</span>
                <input type="text"/>
            </div>
        );
    }
}

export default Input;