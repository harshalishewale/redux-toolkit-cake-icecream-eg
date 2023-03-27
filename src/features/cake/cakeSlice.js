import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    noofcakes: 20
})
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered(state, action) {
            state.noofcakes--
        },
        restocked: (state, action) => {
            state.noofcakes += action.payload
        }
    },

})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;