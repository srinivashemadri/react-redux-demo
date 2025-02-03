import {configureStore} from "@reduxjs/toolkit";

import FormSlice from "./reducer/formSlice";
import EducationSlice from "./reducer/educationSlice";

export const store = configureStore({
    reducer: {
        basicDetails: FormSlice,
        education: EducationSlice
    }
});