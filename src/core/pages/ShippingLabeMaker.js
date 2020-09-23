import React, { Component } from 'react';
import Wizard from '../components/wizard/wizard';
import shippingObj from '../components/shippingObj';
import Header from '../components/header';
import steps from '../../features/steps/index';
import ShippingLabel from '../../features/shpping-label';
import { Card } from '../components/authform/AuthForm';


export class ShippingLabelMaker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            labelReady: false,
            wizardContext: shippingObj
        };
        this.createLabel = this.createLabel.bind(this);
    }

    createLabel(val) {
        this.setState({
            labelReady: true,
            wizardContext: val
        });
    }

    render() {
        return (
            <Card>
                {this.state.labelReady ? (<ShippingLabel info={this.state.wizardContext} />)
                                       : (<Wizard
                                            header={Header}
                                            steps={steps}
                                            wizardContext={this.state.wizardContext}
                                            onComplete={this.createLabel} />)}
            </Card>
        );
    }
}