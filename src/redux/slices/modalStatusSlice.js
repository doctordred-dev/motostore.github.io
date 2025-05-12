import {createSlice} from "@reduxjs/toolkit";

const modalStatusSlice = createSlice({
    name: "modalStatus",
    initialState: {
        firstValue: false,
        secondValue: false
    },

    reducers: {
        setFirstModalOpen: (state) => {
            state.firstValue = true;
        },
        setSecondModalOpen: (state) => {
            state.secondValue = true;
        },
        closeModal: (state) => {
            state.firstValue = false;
            state.secondValue = false;
        }


    }


})

export const {setFirstModalOpen, setSecondModalOpen, closeModal} = modalStatusSlice.actions;
export default modalStatusSlice.reducer;