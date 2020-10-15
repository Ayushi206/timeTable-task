import React, { Component } from "react";
import { connect } from "react-redux";
import { TimetableWrapper } from "./timeTableWrapper";
import { Redirect } from "react-router-dom";

class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfSub:0
        }
    }

    componentDidMount() {
    }
    setData = (e) =>{
        this.setState({ numberOfSub :e});
    }
    render() {
        const { numberOfSub } = this.state;
        return (
            <TimetableWrapper>
                <input type="number" label="Number of Subject" placeholder="Enter number" onChange={(e) => this.setData(e.target.value)} value={numberOfSub ? numberOfSub : ""} />
            </TimetableWrapper>
        )
    }
}

export default Timetable;
