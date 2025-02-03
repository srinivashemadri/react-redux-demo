import {useSelector} from "react-redux";
import React from "react";



export const FormDisplay = () => {
    const basicDetails = useSelector((state)=> state.basicDetails);
    const educationDetails = useSelector((state)=> state.education);

    return(
        <div className={"m-5 card"}>
            <div className={"card-header"}>
                <h4>Details</h4>
            </div>
            <div className={"card-body"}>
                <p>Name: {basicDetails.name}</p>
                <p>Age: {basicDetails.age}</p>
                <p>Bio: {basicDetails.bio}</p>
                <p>Gender: {basicDetails.gender}</p>

                <hr/>

                <p>collegeName: {educationDetails.collegeName}</p>
                <p>branch: {educationDetails.branch}</p>
                <p>from: {educationDetails.from}</p>
                <p>to: {educationDetails.to}</p>
            </div>
        </div>
    )

}