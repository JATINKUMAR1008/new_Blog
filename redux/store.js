import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featues/auth-slice'
import menuReducer from './featues/nav-slice'
import { useSelector,TypedUseSelectorHook } from 'react-redux'
export const store = configureStore({
    reducer:{
        authReducer,
        menuReducer
    }
})
export const useAppSelector = useSelector