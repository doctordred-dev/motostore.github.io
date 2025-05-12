import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMotoData = createAsyncThunk('motorcycles/fetchMotoData', async () => {
    const {data} = await axios('/motorcycles.json')
    return data
})


export const motorcyclesSlice = createSlice({
    name: "motorcycles",
    initialState: {
        data: [],
        favoritesMoto: [],
        likedMoto: [],
        selectedMotorcycle: null,
    },

    reducers: {
        toggleFavorite: (state, action) => {
            const moto = action.payload
            const exists = state.favoritesMoto.some(item => item.sku === moto.sku)
            
            if (exists) {
                state.favoritesMoto = state.favoritesMoto.filter(item => item.sku !== moto.sku)
            } else {
                state.favoritesMoto.push({...moto, isFavorite: true})
            }

            const motoIndex = state.data.findIndex(item => item.sku === moto.sku)
            if (motoIndex !== -1) {
                state.data[motoIndex].isFavorite = !exists
            }


            if (state.selectedMotorcycle && state.selectedMotorcycle.sku === moto.sku) {
                state.selectedMotorcycle.isFavorite = !exists
            }
        },
        toggleLike: (state, action) => {
            const moto = action.payload
            const exists = state.likedMoto.some(item => item.sku === moto.sku)
            
            if (exists) {
                state.likedMoto = state.likedMoto.filter(item => item.sku !== moto.sku)
            } else {
                state.likedMoto.push({...moto, isLiked: true})
            }
            
            const motoIndex = state.data.findIndex(item => item.sku === moto.sku)
            if (motoIndex !== -1) {
                state.data[motoIndex].isLiked = !exists
            }
            
            if (state.selectedMotorcycle && state.selectedMotorcycle.sku === moto.sku) {
                state.selectedMotorcycle.isLiked = !exists
            }
        },

        updateQuantity: (state, action) => {
            const { sku, quantity } = action.payload
            const item = state.favoritesMoto.find(item => item.sku === sku)
            if (item) {
                item.quantity = quantity
            }
        },

        setSelectedMotorcycle: (state, action) => {
            state.selectedMotorcycle = action.payload
        },
        updateSelectedFavoriteStatus: (state) => {
            if (state.selectedMotorcycle) {
                state.selectedMotorcycle.isFavorite = !state.selectedMotorcycle.isFavorite
            }
        },


    },

    extraReducers: (builder) => {
        builder.addCase(fetchMotoData.fulfilled, (state, action) => {
            state.data = action.payload.map(moto => {
                const isFavorite = state.favoritesMoto.some(item => item.sku === moto.sku)
                const isLiked = state.likedMoto.some(item => item.sku === moto.sku)
                return {
                    ...moto,
                    isFavorite,
                    isLiked
                };
            });
        });
    }


})
export const {toggleFavorite, toggleLike, updateQuantity, setSelectedMotorcycle, updateSelectedFavoriteStatus} = motorcyclesSlice.actions
export default motorcyclesSlice.reducer;