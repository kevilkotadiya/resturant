import { createStore } from "redux";
import Rootreducer from "./Redux/Reduce/Index";
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(Rootreducer,composeWithDevTools())

export default Store