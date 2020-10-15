import React, { Component } from "react";
import { connect } from "react-redux";
import { TimetableWrapper } from "./timeTableWrapper";
import { Redirect } from "react-router-dom";

class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfSub:0,
            subjects:[],
            subjectShow:false,
            tableShow:false,
            totalSubjects:[],
            submitted:false
        }
    }

    componentDidMount() {
    }
    setData = (type,e,i) =>{
        const { subjects } = this.state;
        if(type === "number"){
            const r = /^[0-9.,]+$/;
            if ((r.test(e))) {
                let a =[]
                for(let i=0;i< e;i++){
                    a.push({subjectName:""});        
                }
                this.setState({ numberOfSub :e , subjects : a});            }
        }
        else {
            subjects[i].subjectName = e;
            this.setState({subjects})
        }
    }
    addNumber = (e) => {
        this.setState({submitted : true});
        const { numberOfSub } = this.state;
        if(!numberOfSub){
            return;
        }
        this.setState({ subjectShow : true})
    }
    generate = () => {
        this.setState({tableShow:true})
        const { totalSubjects } = this.state;
        this.state.subjects.map((a,i) => 
            totalSubjects.push({subjectName:a.subjectName})
        )
        this.setState({totalSubjects})
    }
    render() {
        console.log(this.state.subjects,this.state.totalSubjects)
        const { numberOfSub , subjectShow , subjects,tableShow,totalSubjects,submitted} = this.state;
        return (
            <TimetableWrapper>
                {!subjectShow ? 
                <>
                    <div className="spacing">
                    <div className="title">Numer of Subject</div>
                        <input label="Number of Subject" placeholder="Enter number" onChange={(e) => this.setData("number",e.target.value)} value={numberOfSub ? numberOfSub : ""} />
                        {submitted && !numberOfSub && (
                            <div className="errorText">
                            Number required<sup>*</sup>
                            </div>
                        )}

                    </div>
                    <div className="spacing">
                        <button className="buttonStyle" onClick={(e) => this.addNumber(e)}>Submit</button>
                    </div>
                </>
                :   
                <>
                    {subjects.map((a,i) => 
                    <div className="spacing">
                        <input label="Number of Subject" placeholder="Enter subject name" onChange={(e) => this.setData("name",e.target.value,i)} value={a.subjectName ? a.subjectName : ""} />
                    </div>
                    )}
                    <div className="spacing">
                    <button className="buttonStyle" onClick={(e) => this.generate(e)}>Generate</button>
                    </div>
                </>
                }
                {tableShow ? 
                    <table>
                        {totalSubjects.map((a,i) => 
                        <>  
                            <thead>
                            <th>Subject Name</th>
                            </thead>
                            <tbody>
                            <td>{a.subjectName}</td>
                            </tbody>
                        </>
                        )}
                    </table>
                :""}
            </TimetableWrapper>
        )
    }
}

export default Timetable;
