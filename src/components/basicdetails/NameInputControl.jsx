import {useDispatch} from "react-redux";
import {updateName} from "../../redux/reducer/formSlice";

export const NameInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter name"}
            onChange={(e)=>{
                dispatch(updateName(e.target.value))
            }}
        />
    )
}