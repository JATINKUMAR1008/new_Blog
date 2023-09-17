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
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelecto: TypedUseSelectorHook<RootState> = useSelector