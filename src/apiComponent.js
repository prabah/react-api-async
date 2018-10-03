import React, {Component} from 'react';

class ApiComponent extends Component {
    render() {
        return <h1>VAT Percentage {this.props.vatPercentage} </h1>;
    }
}

export default ApiComponent;