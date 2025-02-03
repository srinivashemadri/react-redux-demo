
import React from "react";
import {CollegeNameInputControl} from "./collegeInputControl";
import {EducationBranchInputControl} from "./educationBranchInputControl";
import {EducationFromInputControl} from "./educationFrom";
import {EducationToInputControl} from "./educationTo";
import {Wrapper} from "../common/wrapper";

export const EducationDetailsControl = () => {
    return(
        <div className={"mt-5 d-grid justify-content-center"}>
            <h4>Education Details: </h4>
            <Wrapper>
                <CollegeNameInputControl/>
            </Wrapper>

            <Wrapper>
                <EducationBranchInputControl/>
            </Wrapper>

            <Wrapper>
                <EducationFromInputControl/>
            </Wrapper>

            <Wrapper>
                <EducationToInputControl/>
            </Wrapper>


        </div>
    )
}