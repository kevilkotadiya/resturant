import {combineReducers} from 'redux'
import BookOrderr from './BookOrder.reduce'
// import Chefsreducer from './Chefs.reducer'
// import UsersReducer from './Users.reduce'

const Rootreducer = combineReducers({
    BookOrderr,
    // Chefsreducer,
    // UsersReducer
})

export default Rootreducer