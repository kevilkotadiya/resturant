import { NCHEFS } from "../Constant"

export const Nchefs = () => {
    return async (dispatch)=>{
        const data = await fetch('https://dummyjson.com/users')
        const res = await data.json()
        dispatch({
            type : NCHEFS,
            payload : res.users
        }) 
    }
}

