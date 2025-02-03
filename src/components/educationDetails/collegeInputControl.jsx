import {useDispatch} from "react-redux";
import {updateCollegeName} from "../../redux/reducer/educationSlice";

export const CollegeNameInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter college name"}
            onChange={(e)=>{
                dispatch(updateCollegeName(e.target.value))
            }}
        />
    )
}