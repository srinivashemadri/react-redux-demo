import {useDispatch} from "react-redux";
import {updateFrom} from "../../redux/reducer/educationSlice";

export const EducationFromInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter from"}
            onChange={(e)=>{
                dispatch(updateFrom(e.target.value))
            }}
        />
    )
}