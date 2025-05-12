import React, { useState, useEffect, useCallback } from 'react';
import styles from './MotorcyclesPages.module.scss';
import Container from "../components/Container/index.jsx";
import Cart from "../components/Cart/index.jsx";
import FilterForm from "../components/FilterForm/index.jsx";
import { useDispatch } from "react-redux";
import { fetchMotoData } from "../redux/slices/motorcyclesSlice.js";
import useScrollY from "../hooks/useScrollY";
import { motion, AnimatePresence } from "framer-motion";

const MotorcyclesPages = () => {
    const dispatch = useDispatch();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchMotoData())
    }, [dispatch]);

    const scrollY = useScrollY();

    const toggleFilter = useCallback(() => {
        setIsFilterOpen(prev => !prev);
    }, []);

    return (
        <>


<AnimatePresence>
        {scrollY > 1000 && (
        <motion.img 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            src="/images/back-to-top.png" 
            alt="back-to-top" 
            className={styles.backToTop} 
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}/>
    
            )}
            </AnimatePresence>

            <div className={styles.filterContainer}>
                <button 
                    className={styles.filterToggleButton}
                    onClick={toggleFilter}
                >
                    <span className={styles.filterIcon}>☰</span>
                    <span className={styles.filterText}>Фільтри</span>
                </button>
                <FilterForm onClose={toggleFilter} isOpen={isFilterOpen} />
                <div 
                    className={`${styles.filterOverlay} ${isFilterOpen ? styles.active : ''}`}
                    onClick={toggleFilter}
                />
            </div>
            
            <Container />
            <Cart position='side'/>
        </>
    );
};

export default MotorcyclesPages;