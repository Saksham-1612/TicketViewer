import { configureStore } from '@reduxjs/toolkit'
import allReducers from './reducer'

export const store = configureStore({
    reducer: allReducers,
})