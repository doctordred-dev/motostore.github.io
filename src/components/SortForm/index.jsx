import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType, setOrder } from '../../redux/slices/sortSlice';
import { FormControl, InputLabel, Select, MenuItem, Box, useTheme, useMediaQuery } from '@mui/material';
import styles from './SortForm.module.scss';

const SortForm = () => {
    const dispatch = useDispatch();
    const { type, order } = useSelector(state => state.sort);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [localType, setLocalType] = useState(type || '');
    const [localOrder, setLocalOrder] = useState(order || 'asc');

    // Обновляем локальное состояние при изменении в Redux
    useEffect(() => {
        if (type !== localType) setLocalType(type || '');
        if (order !== localOrder) setLocalOrder(order || 'asc');
    }, [type, order, localType, localOrder]);

    const handleTypeChange = (event) => {
        const newType = event.target.value;
        setLocalType(newType);
        dispatch(setType(newType));
    };

    const handleOrderChange = (event) => {
        const newOrder = event.target.value;
        setLocalOrder(newOrder);
        dispatch(setOrder(newOrder));
    };

    return (
        <Box className={styles.sortForm}>
            <FormControl fullWidth size={isMobile ? 'small' : 'medium'} className={styles.selectWrapper}>
                <InputLabel id="sort-type-label" className={styles.label}>
                    Сортувати за
                </InputLabel>
                <Select
                    labelId="sort-type-label"
                    id="sort-type"
                    value={localType}
                    label="Сортувати за"
                    onChange={handleTypeChange}
                    className={styles.select}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#444',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#666',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ff3c00',
                        },
                    }}
                >
                    <MenuItem value=""><em>Не сортувати</em></MenuItem>
                    <MenuItem value="price">Ціною</MenuItem>
                    <MenuItem value="power">Потужністю</MenuItem>
                    <MenuItem value="maxSpeed">Макс. швидкістю</MenuItem>
                    <MenuItem value="engineVolume">Об'ємом двигуна</MenuItem>
                </Select>
            </FormControl>
            
            <FormControl fullWidth size={isMobile ? 'small' : 'medium'} className={styles.selectWrapper}>
                <InputLabel id="sort-order-label" className={styles.label}>
                    Порядок
                </InputLabel>
                <Select
                    labelId="sort-order-label"
                    id="sort-order"
                    value={localOrder}
                    label="Порядок"
                    onChange={handleOrderChange}
                    className={styles.select}
                    disabled={!localType}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#444',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#666',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ff3c00',
                        },
                        '&.Mui-disabled': {
                            opacity: 0.7,
                        },
                    }}
                >
                    <MenuItem value="asc">За зростанням</MenuItem>
                    <MenuItem value="desc">За зменшенням</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortForm;
