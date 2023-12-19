import { ADDPRODUCT } from "../Constant";

const intialState = {
    Product : []
}

const Addproduct = (state = intialState , action) => {

        if(action.type === ADDPRODUCT )
        {
            return {...state,Product:[...state.Product,action.payload]}
        }

    return state;
} 

export default Addproduct