import {all} from 'redux-saga/effects'
import UserTrigger from './index'

function* RootSaga(){
    yield all([UserTrigger()])
}

export default RootSaga