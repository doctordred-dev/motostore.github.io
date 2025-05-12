import React from 'react';
import {X} from 'lucide-react';
import styles from './CartItem.module.scss'
import {useDispatch} from "react-redux";
import {setSelectedMotorcycle, toggleFavorite} from "../../redux/slices/motorcyclesSlice.js";
import {setFirstModalOpen} from "../../redux/slices/modalStatusSlice.js";
import {motion} from "framer-motion";
import PropTypes from 'prop-types';

const CartItem = ({color, price, imageUrl, sku, name, position, quantity, onQuantityChange, specs}) => {

    
    const dispatch = useDispatch();

    const handleToggleModal = () => {
        dispatch(setSelectedMotorcycle({name, price, imageUrl, sku, color, specs}))
        dispatch(setFirstModalOpen())
    }

    const handleRemove = () => {
        dispatch(toggleFavorite({color, price, imageUrl, sku, name, specs}))
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            onQuantityChange(sku, quantity - 1)
        }
    }

    const handleIncrease = () => {
        onQuantityChange(sku, quantity + 1);
    }

    return (
        <>
            {position === 'normal' ?

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}

                    className={styles.item}>
                    <img className={styles.image} src={imageUrl} alt={name}/>
                    <div className={styles.details}>
                        <h3 className={styles.name}>{name}</h3>
                        <p className={styles.sku}>Артикул: {sku}</p>
                        <p className={styles.color}>Колір: {color}</p>
                        <p className={styles.price}>Ціна: {price.toLocaleString('uk-UA')} грн</p>
                        <p className={styles.specs}>Потужність: {specs.power} кн/c</p>
                        <p className={styles.specs}>Об'єм двигуна: {specs.engineVolume} см³</p>
                        <p className={styles.specs}>Макс. швидкість: {specs.maxSpeed} км/год</p>
                    </div>

                    <div className={styles.quantity}>
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>

                    <button onClick={handleToggleModal}
                            className={styles.removeBtn}
                            aria-label="Видалити">
                        <X size={20}/>
                    </button>
                </motion.div>

                :

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}

                    className={styles.sideItem}>
                    <img src={imageUrl} alt={name} className={styles.sideImage}/>
                    <div className={styles.sideInfo}>
                        <h4 className={styles.sideName}>{name}</h4>
                        <p className={styles.sideColor}>Колір: {color}</p>
                        <p className={styles.sidePrice}>Ціна: {price.toLocaleString('uk-UA')} ₴</p>
                        <button className={styles.sideDelete}
                                onClick={handleRemove}>Видалити
                        </button>
                    </div>
                </motion.div>
            }
        </>
    );
};

CartItem.propTypes = {
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specs: PropTypes.shape({
        power: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        engineVolume: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxSpeed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    position: PropTypes.oneOf(['normal', 'side']).isRequired,
    quantity: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func.isRequired
};

export default CartItem;