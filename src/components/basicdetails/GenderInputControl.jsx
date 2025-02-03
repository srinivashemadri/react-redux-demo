import {useDispatch} from "react-redux";
import {updateGender} from "../redux/reducer/formSlice";

export const GenderInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter gender"}
            onChange={(e)=>{
                dispatch(updateGender(e.target.value))
            }}
        />
    )
}