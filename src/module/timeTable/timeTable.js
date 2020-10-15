import React, { Component } from "react";
import { connect } from "react-redux";
import { DemoWrapper } from "./timeTableWrapper";
import { Redirect } from "react-router-dom";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const {  } = this.state;
        return (
            <DemoWrapper>
            </DemoWrapper>
        )
    }
}

export default Demo;
