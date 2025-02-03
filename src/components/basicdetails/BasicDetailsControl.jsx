import {NameInputControl} from "./NameInputControl";
import {AgeInputControl} from "./AgeInputControl";
import {BioInputControl} from "./BioInputControl";
import {GenderInputControl} from "./GenderInputControl";
import React from "react";
import {Wrapper} from "../common/wrapper";

export const BasicDetailsControl = () => {
    return(
        <div className={"mt-5 d-grid justify-content-center"}>
            <h4>Basic Details: </h4>
            <Wrapper>
                <NameInputControl/>
            </Wrapper>
            <Wrapper>
                <AgeInputControl/>
            </Wrapper>
            <Wrapper>
                <BioInputControl/>
            </Wrapper>
            <Wrapper>
                <GenderInputControl/>
            </Wrapper>

        </div>
    )
}