import styles from './FilterForm.module.scss'
import React from 'react';
import { Box, TextField, Slider, Button, IconButton } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setPriceRange, resetFilters, setPower, setMaxSpeed, setEngineVolume } from "../../redux/slices/filterSlice.js";
import { motion } from "framer-motion";
import { debounce } from 'lodash';

function FilterForm({ onClose, isOpen }) {
    const dispatch = useDispatch();
    const { search, priceRange, power, maxSpeed, engineVolume } = useSelector((state) => {
        return state.filter;
    });

    const [localPriceRange, setLocalPriceRange] = useState(priceRange);
    const [localPowerRange, setLocalPowerRange] = useState(power);
    const [localMaxSpeedRange, setLocalMaxSpeedRange] = useState(maxSpeed);
    const [localEngineVolumeRange, setLocalEngineVolumeRange] = useState(engineVolume);

    useEffect(() => {
        if (priceRange) setLocalPriceRange(priceRange);
        if (power) setLocalPowerRange(power);
        if (maxSpeed) setLocalMaxSpeedRange(maxSpeed);
        if (engineVolume) setLocalEngineVolumeRange(engineVolume);
    }, [priceRange, power, maxSpeed, engineVolume]);

    const handleSearchChange = useCallback((e) => {
        dispatch(setSearch(e.target.value));
    }, [dispatch]);

    const handlePriceChange = useCallback((e, newValue) => {
        setLocalPriceRange(newValue);
    }, []);

    const handlePriceChangeCommit = useCallback((e, newValue) => {
        dispatch(setPriceRange(newValue));
    }, [dispatch]);

    const handlePowerChange = useCallback((e, newValue) => {
        setLocalPowerRange(newValue);
    }, []);

    const handlePowerChangeCommit = useCallback((e, newValue) => {
        dispatch(setPower(newValue));
    }, [dispatch]);

    const handleMaxSpeedChange = useCallback((e, newValue) => {
        setLocalMaxSpeedRange(newValue);
    }, []);

    const handleMaxSpeedChangeCommit = useCallback((e, newValue) => {
        dispatch(setMaxSpeed(newValue));
    }, [dispatch]);

    const handleEngineVolumeChange = useCallback((e, newValue) => {
        setLocalEngineVolumeRange(newValue);
    }, []);

    const handleEngineVolumeChangeCommit = useCallback((e, newValue) => {
        dispatch(setEngineVolume(newValue));
    }, [dispatch]);

    const handleReset = useCallback(() => {
        dispatch(resetFilters());
    }, [dispatch]);




    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? 0 : '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.filterForm}
        >
            <Box component="form" className={styles.filterWrapper}>
                <div className={styles.headerContainer}>
                    <h3 className={styles.filterTitle}>Фільтри</h3>
                    <IconButton 
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <TextField
                    label="Пошук"
                    variant="outlined"
                    value={search}
                    onChange={handleSearchChange}
                    className={styles.searchField}
                    fullWidth
                    InputProps={{
                        style: { color: 'white' },
                    }}
                    InputLabelProps={{
                        style: { color: 'white' }
                    }}

                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& input': {
                                textAlign: 'center',
                            },
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff3c00',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff3c00',
                            },
                        },
                    }}
                />

                <Box className={styles.sliderContainer}>
                    <div className={styles.priceLabel}>
                        <span>Ціна:</span>
                        <span>{localPriceRange[0]}₴ — {localPriceRange[1]}₴</span>
                    </div>
                    <Slider
                        value={localPriceRange}
                        onChange={handlePriceChange}
                        onChangeCommitted={handlePriceChangeCommit}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1000000}
                        step={1000}
                        sx={{
                            color: '#ff3c00',
                            '& .MuiSlider-track': {
                                background: '#ff3c00',
                            },
                            '& .MuiSlider-thumb': {
                                color: 'white',
                                border: '2px solid #ff3c00'
                            },
                            '& .MuiSlider-valueLabel': {
                                backgroundColor: '#ff3c00',
                            }
                        }}

                    />
                </Box>


                <Box className={styles.sliderContainer}>
                    <div className={styles.priceLabel}>
                        <span>Потужність:</span>
                        <span>{localPowerRange[0]} кн/c — {localPowerRange[1]} кн/c</span>
                    </div>
                    <Slider
                        value={localPowerRange}
                        onChange={handlePowerChange}
                        onChangeCommitted={handlePowerChangeCommit}
                        valueLabelDisplay="auto"
                        min={0}
                        max={250}
                        step={5}
                        sx={{
                            color: '#ff3c00',
                            '& .MuiSlider-track': {
                                background: '#ff3c00',
                            },
                            '& .MuiSlider-thumb': {
                                color: 'white',
                                border: '2px solid #ff3c00'
                            },
                            '& .MuiSlider-valueLabel': {
                                backgroundColor: '#ff3c00',
                            }
                        }}
                    />
                </Box>


                <Box className={styles.sliderContainer}>
                    <div className={styles.priceLabel}>
                        <span>Макс. швидкість:</span>
                        <span>{localMaxSpeedRange[0]} км/год — {localMaxSpeedRange[1]} км/год</span>
                    </div>
                    <Slider
                        value={localMaxSpeedRange}
                        onChange={handleMaxSpeedChange}
                        onChangeCommitted={handleMaxSpeedChangeCommit}
                        valueLabelDisplay="auto"
                        min={0}
                        max={350}
                        step={10}
                        sx={{
                            color: '#ff3c00',
                            '& .MuiSlider-track': {
                                background: '#ff3c00',
                            },
                            '& .MuiSlider-thumb': {
                                color: 'white',
                                border: '2px solid #ff3c00'
                            },
                            '& .MuiSlider-valueLabel': {
                                backgroundColor: '#ff3c00',
                            }
                        }}
                    />
                </Box>


                <Box className={styles.sliderContainer}>
                    <div className={styles.priceLabel}>
                        <span>Об'єм двигуна:</span>
                        <span>{localEngineVolumeRange[0]} см³ — {localEngineVolumeRange[1]} см³</span>
                    </div>
                    <Slider
                        value={localEngineVolumeRange}
                        onChange={handleEngineVolumeChange}
                        onChangeCommitted={handleEngineVolumeChangeCommit}
                        valueLabelDisplay="auto"
                        min={0}
                        max={2000}
                        step={50}
                        sx={{
                            color: '#ff3c00',
                            '& .MuiSlider-track': {
                                background: '#ff3c00',
                            },
                            '& .MuiSlider-thumb': {
                                color: 'white',
                                border: '2px solid #ff3c00'
                            },
                            '& .MuiSlider-valueLabel': {
                                backgroundColor: '#ff3c00',
                            }
                        }}
                    />
                </Box>


                <Button
                    variant="contained"
                    onClick={handleReset}
                    className={styles.resetButton}
                    sx={{
                        backgroundColor: '#ff3c00',
                        '&:hover': {
                            backgroundColor: '#cc3000',
                        }
                    }}
                    fullWidth
                >
                    Скинути фільтри
                </Button>
            </Box>
        </motion.div>

    );
}

export default React.memo(FilterForm);
