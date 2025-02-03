import {useDispatch} from "react-redux";
import {updateBio} from "../../redux/reducer/formSlice";

export const BioInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter bio"}
            onChange={(e)=>{
                dispatch(updateBio(e.target.value))
            }}
        />
    )
}