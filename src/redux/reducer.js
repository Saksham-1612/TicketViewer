import { combineReducers } from "@reduxjs/toolkit"
import checkReducer from "./slice/checkSlice"
import ticketReducer from "./slice/ticketSlice"
import searchReducer from "./slice/searchSlice"
import viewReducer from "./slice/viewSlice"

const allReducers = combineReducers({
    check: checkReducer,
    tickets: ticketReducer,
    search: searchReducer,
    view: viewReducer
})
export default allReducers