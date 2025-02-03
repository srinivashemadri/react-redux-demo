
import {BasicDetailsControl} from "./basicdetails/BasicDetailsControl";
import {EducationDetailsControl} from "./educationDetails/EducationDetailsControl";
import React from "react";

export const FormControl = () => {

    return(
        <React.Fragment>
            <div className={"m-5 card"}>
                <div className={"card-body"}>
                    <BasicDetailsControl/>
                    <EducationDetailsControl/>
                </div>
            </div>

        </React.Fragment>
    )
}