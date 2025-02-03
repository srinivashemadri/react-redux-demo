import {useDispatch} from "react-redux";
import {updateTo} from "../../redux/reducer/educationSlice";

export const EducationToInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter to"}
            onChange={(e)=>{
                dispatch(updateTo(e.target.value))
            }}
        />
    )
}