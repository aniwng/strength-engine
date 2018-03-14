import React, { Component } from 'react';
import Routines from '../Routines/Routines';

import './ProgramDetails.css';

class ProgramDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    
    shouldComponentUpdate() {
        return true;
    }

    render() {
        if(this.props.details.days) {
            return (
                <div className="program-details">
                    <h3>{this.props.details.label}</h3>
                    <div>
                        <Routines 
                            days={this.props.details.days} 
                            inputs={this.props.inputs}
                        />
                    </div>    
                </div>
            );
        } else {
            return <h3>No details!</h3>
        }
    }
}

export default ProgramDetails;