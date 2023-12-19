const intaialState = {
    Userdata : []
}

const UsersReducer = (state = intaialState,action) =>{

    if(action.type ==='USERS_DATA')
    {
        return{...state, Userdata : action.payload}
    }
    return state
}

export default UsersReducer