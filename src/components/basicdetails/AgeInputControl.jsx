import {useDispatch} from "react-redux";
import {updateAge} from "../../redux/reducer/formSlice";

export const AgeInputControl = () =>{
    const dispatch = useDispatch();

    console.log('AgeInputControl re-rendered');

    return(
        <input
            placeholder={"enter age"}
            onChange={(e)=>{
                dispatch(updateAge(e.target.value))
            }}
        />
    )
}