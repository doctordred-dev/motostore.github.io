import React, { useState } from 'react';
import styles from './Container.module.scss';
import Item from "../Item/";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from 'framer-motion';

const Container = () => {
    const dispatch = useDispatch();
    const motorcycles = useSelector(state => state.motorcycles.data);
    const {search, priceRange, power, maxSpeed, engineVolume} = useSelector((state) => state.filter);
    const {type, direction} = useSelector((state) => state.sort);
    const favoritesMoto = useSelector(state => state.motorcycles.favoritesMoto);
    const likedMoto = useSelector(state => state.motorcycles.likedMoto);

    const filteredMotorcycles = motorcycles.filter((moto) => {
        const matchesSearch = moto.name.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = moto.price >= priceRange[0] && moto.price <= priceRange[1];
        const matchesPower = moto.specs.power >= power[0] && moto.specs.power <= power[1];
        const matchesMaxSpeed = moto.specs.maxSpeed >= maxSpeed[0] && moto.specs.maxSpeed <= maxSpeed[1];
        const matchesEngineVolume = moto.specs.engineVolume >= engineVolume[0] && moto.specs.engineVolume <= engineVolume[1];
        
        return matchesSearch && matchesPrice && matchesPower && matchesMaxSpeed && matchesEngineVolume;
    });

    const [hoveredSku, setHoveredSku] = useState(null);

    const handleMouseEnter = (sku) => {
        setHoveredSku(sku);
    };

    const handleMouseLeave = () => {
        setHoveredSku(null);
    };

    return (
        <div className={styles.container}>
            {filteredMotorcycles.length > 0 ? (
                <AnimatePresence>
                    {filteredMotorcycles.map(({name, price, imageUrl, sku, color, isFavorite, specs}) => {
                        const isInCart = favoritesMoto.some(item => item.sku === sku);
                        const isLiked = likedMoto.some(item => item.sku === sku);
                        const isHovered = hoveredSku === sku;

                        return (
                            <div 
                                key={sku}
                                onMouseEnter={() => handleMouseEnter(sku)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Item
                                    isInCart={isInCart}
                                    isFavorite={isFavorite}
                                    name={name}
                                    price={price}
                                    imageUrl={imageUrl}
                                    sku={sku}
                                    color={color}
                                    isLiked={isLiked}
                                    specs={specs}
                                    isHovered={isHovered}
                                />
                            </div>
                        );
                    })}
                </AnimatePresence>
            ) : (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={styles.noResults}>
                    <h2>Мотоцикли не знайдено</h2>
                    <p>За вказаними параметрами фільтрації мотоцикли відсутні</p>
                    <p>Спробуйте змінити параметри пошуку або ціновий діапазон</p>
                </motion.div>
            )}
        </div>
    );
};


export default Container;