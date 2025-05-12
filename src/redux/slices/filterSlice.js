import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: '',
        priceRange: [0, 1000000],
        power: [0, 250],
        maxSpeed: [0, 350],
        engineVolume: [0, 2000]
    },

    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },

        setPower: (state, action) => {
            state.power = action.payload;
        },

        setMaxSpeed: (state, action) => {
            state.maxSpeed = action.payload;
        },

        setEngineVolume: (state, action) => {
            state.engineVolume = action.payload;
        },

        resetFilters: (state) => {
            state.search = '';
            state.priceRange = [0, 1000000];
            state.power = [0, 250];
            state.maxSpeed = [0, 350];
            state.engineVolume = [0, 2000];
        }
    }
});

export const {
    setSearch,
    setPriceRange,
    setPower,
    setMaxSpeed,
    setEngineVolume,
    resetFilters
} = filterSlice.actions;
export default filterSlice.reducer;