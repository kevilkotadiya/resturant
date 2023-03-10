import { BOOKORDER, DELETEORDER, EDITORDER } from "../Constant"

const intialstate = {
    orderdata: []
}

const BookOrder = (state = intialstate, action) => {

    if (action.type === BOOKORDER) {
        return { ...state, orderdata: [...state.orderdata, action.payload] }
    }

    if (action.type === DELETEORDER) {
        const Filter = state.orderdata.filter((i) => i.id !== action.payload)
        return { ...state, orderdata: Filter }
    }

    if(action.type == EDITORDER)
    {
        const Map = state.orderdata.map((i) =>{
            if(i.id == action.payload.id)
            {
                i = action.payload
            }
            return i;
        })

        return{...state , orderdata : Map}
    }

    return state




}
export default BookOrder