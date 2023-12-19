import { NCHEFS } from "../Constant"

const intilastate = {
    Users :[]
}

const Chefsreducer =(state = intilastate,action)=>{

    if(action.type === NCHEFS)
    {
        return {...state,Users : action.payload}
    }

    return state
}

export default Chefsreducer