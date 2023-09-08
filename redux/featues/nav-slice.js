import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value:{
        open:false
    },
}

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        Close: ()=>{
            return initialState
        },
        Open: (state, action)=>{
            return{
                value:{
                    open: true
                }
            }
        }
    }
})

export const {Open,Close} = menu.actions
export default menu.reducer
