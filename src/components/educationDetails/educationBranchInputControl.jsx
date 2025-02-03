import {useDispatch} from "react-redux";
import {updateBranch} from "../../redux/reducer/educationSlice";

export const EducationBranchInputControl = () =>{
    const dispatch = useDispatch();

    return(
        <input
            placeholder={"enter branch"}
            onChange={(e)=>{
                dispatch(updateBranch(e.target.value))
            }}
        />
    )
}