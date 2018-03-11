import React, { Component } from 'react';
import Routines from '../Routines/Routines';

import './ProgramDetails.css';

class ProgramDetails extends Component {
    render() {
        if(this.props.details.days) {
            return (
                <div className="program-details">
                    <h3>{this.props.details.label}</h3>
                    <div>
                        <Routines days={this.props.details.days} input={this.props.input}/>
                    </div>    
                </div>
            );
        } else {
            return <h3>No details!</h3>
        }
    }
}

export default ProgramDetails;