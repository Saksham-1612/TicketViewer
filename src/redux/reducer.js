import { combineReducers } from "@reduxjs/toolkit"
import checkReducer from "./slice/checkSlice"
import ticketReducer from "./slice/ticketSlice"
import searchReducer from "./slice/searchSlice"
import statusReducer from "./slice/statusSlice"

const allReducers = combineReducers({
    check: checkReducer,
    tickets: ticketReducer,
    search: searchReducer,
    status: statusReducer
})
export default allReducers