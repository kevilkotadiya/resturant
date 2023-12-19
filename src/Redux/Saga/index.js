import { call, put, takeEvery } from "redux-saga/effects";

const UserFetch = async () => {
    const data = await fetch('https://dummyjson.com/users')
    const res = await data.json()
    return res
}

function* Fetchusers() {
    try {
        const data = yield call(UserFetch)
        yield put({ type: 'USERS_DATA', payload: data }) //PUT = DISPATCH
    } catch (error) {

    }
}

function* UserTrigger() {
    yield takeEvery('FETCH_USERS', Fetchusers)
}

export default UserTrigger