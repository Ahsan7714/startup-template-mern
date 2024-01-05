import userReducer from "./reducers/userReducer";
import franchiseReducer from "./reducers/franchiseReducer";
import newsLetterReducers from "./reducers/newsLetterReducers";
import adminReducers from "./reducers/adminReducers";

const rootReducers = {
    newsletter : newsLetterReducers,
    user:userReducer,
    franchise:franchiseReducer,
    admin:adminReducers,
}
export default rootReducers