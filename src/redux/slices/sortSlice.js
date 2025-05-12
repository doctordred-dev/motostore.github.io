import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "",
    order: "asc" // 'asc' или 'desc'
};

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
            // Если тип сортировки сбрасывается, сбрасываем и порядок
            if (!action.payload) {
                state.order = "asc";
            }
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        resetSort: () => initialState
    }
});

export const { setType, setOrder, resetSort } = sortSlice.actions;

export default sortSlice.reducer;

// Селекторы
export const selectSort = state => state.sort;

// Функция для сортировки массива мотоциклов
// Используется в компоненте Container
// Пример использования:
// const sortedMotorcycles = [...motorcycles].sort(sortMotorcycles(sortType, sortOrder));
export const sortMotorcycles = (type, order) => (a, b) => {
    if (!type) return 0; // Если тип не выбран, не сортируем
    
    let valueA, valueB;
    
    switch (type) {
        case 'price':
            valueA = a.price;
            valueB = b.price;
            break;
        case 'power':
            valueA = a.power;
            valueB = b.power;
            break;
        case 'maxSpeed':
            valueA = a.maxSpeed;
            valueB = b.maxSpeed;
            break;
        case 'engineVolume':
            valueA = a.engineVolume;
            valueB = b.engineVolume;
            break;
        default:
            return 0;
    }
    
    if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
    }
    return 0;
};
