import { createStore ,applyMiddleware,compose} from "redux";
import Rootreducer from "./Redux/Reduce/Index";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { persistStore ,persistReducer } from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import RootSaga from './Redux/Saga/RootSaga'


    const persistConfig = {
        key : 'root',
        storage : storage,
        // blacklist : ['product']
    }   

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig , Rootreducer) 
const Store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(Store)

sagaMiddleware.run(RootSaga)

export default Store
export {persistor}