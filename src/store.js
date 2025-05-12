import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalReducer from "./redux/slices/modalStatusSlice.js"
import filterReducer from "./redux/slices/filterSlice.js"
import sortReducer from "./redux/slices/sortSlice.js"
import motorcyclesReducer from "./redux/slices/motorcyclesSlice.js"
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    // Игнорируем состояние фильтров при сохранении
    blacklist: ['filter']
}

const rootReducer = combineReducers({
    modalStatus: modalReducer,
    filter: filterReducer,
    sort: sortReducer,
    motorcycles: motorcyclesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            }
        })
})

export const persistor = persistStore(store);

export default store;