import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState ={
    value: false
}

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        Close: (state)=>{
            state.value= false
        },
        Open: (state)=>{
            state.value = true
        }
    }
})

export const {Open,Close} = menu.actions
export default menu.reducer
