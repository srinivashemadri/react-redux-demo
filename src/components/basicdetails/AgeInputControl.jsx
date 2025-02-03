import {useDispatch} from "react-redux";
import {updateAge} from "../redux/reducer/formSlice";

export const AgeInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter age"}
            onChange={(e)=>{
                dispatch(updateAge(e.target.value))
            }}
        />
    )
}