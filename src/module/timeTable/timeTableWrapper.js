import styled from "styled-components";

const TimetableWrapper = styled.div`

.buttonStyle{
    border:1px solid #5179d9;
    color:#fff;
    font-size:20px;
    margin-top: 20px;
    padding-bottom: 5px;
    background-color:#5179d9;
    border-radius:2px;
}
.spacing{
    margin:25px ;
}
.title{
    font-size:12px;
    color:#000;
}
.errorText{
    color: red;
    font-size: 10px;
}
.table {
    font-family: arial, sans-serif;
    width: 100%;
    border:1px solid;
    .tr{
        border: 1px solid #000;  
    }
    .td, .th {
        border: 1px solid #000;
        text-align: left;
        padding: 8px;
      }
}
.tableTitle{
    text-align: center;
    font-size: 28px;
    font-weight: 500;
}  

`;
export { TimetableWrapper };