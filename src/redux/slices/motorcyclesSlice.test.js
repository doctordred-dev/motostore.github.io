
import reducer, {
    toggleFavorite,
    toggleLike,
    updateQuantity,
    setSelectedMotorcycle,
    updateSelectedFavoriteStatus,
    fetchMotoData
} from './motorcyclesSlice';

describe('motorcyclesSlice reducer', () => {
    const sampleMoto = { sku: '123', name: 'Yamaha' };

    test('should return initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            data: [],
            favoritesMoto: [],
            likedMoto: [],
            selectedMotorcycle: null,
        });
    });

    test('toggleFavorite should add to favorites', () => {
        const state = reducer(undefined, toggleFavorite(sampleMoto));
        expect(state.favoritesMoto).toHaveLength(1);
        expect(state.favoritesMoto[0]).toMatchObject({ sku: '123', isFavorite: true });
    });

    test('toggleFavorite should remove from favorites if already exists', () => {
        const prevState = {
            data: [],
            favoritesMoto: [{ sku: '123', name: 'Yamaha', isFavorite: true }],
            likedMoto: [],
            selectedMotorcycle: null
        };
        const state = reducer(prevState, toggleFavorite(sampleMoto));
        expect(state.favoritesMoto).toHaveLength(0);
    });

    test('toggleLike should add to likedMoto', () => {
        const state = reducer(undefined, toggleLike(sampleMoto));
        expect(state.likedMoto).toHaveLength(1);
        expect(state.likedMoto[0]).toMatchObject({ sku: '123', isLiked: true });
    });

    test('updateQuantity should update quantity of moto', () => {
        const prevState = {
            data: [],
            favoritesMoto: [{ sku: '123', name: 'Yamaha', quantity: 1 }],
            likedMoto: [],
            selectedMotorcycle: null
        };
        const state = reducer(prevState, updateQuantity({ sku: '123', quantity: 5 }));
        expect(state.favoritesMoto[0].quantity).toBe(5);
    });

    test('setSelectedMotorcycle sets selected moto', () => {
        const state = reducer(undefined, setSelectedMotorcycle(sampleMoto));
        expect(state.selectedMotorcycle).toEqual(sampleMoto);
    });

    test('updateSelectedFavoriteStatus toggles selected isFavorite', () => {
        const prevState = {
            data: [],
            favoritesMoto: [],
            likedMoto: [],
            selectedMotorcycle: { sku: '123', isFavorite: true }
        };
        const state = reducer(prevState, updateSelectedFavoriteStatus());
        expect(state.selectedMotorcycle.isFavorite).toBe(false);
    });
});