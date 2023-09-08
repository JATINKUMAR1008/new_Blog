import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featues/auth-slice'
import { useSelector,TypedUseSelectorHook } from 'react-redux'
export const store = configureStore({
    reducer:{
        authReducer
    }
})
export const useAppSelector = useSelector