import React from 'react';
import styles from './LikeItem.module.scss';
import { X } from 'lucide-react';
import {useDispatch,} from 'react-redux';
import {toggleLike} from "../../redux/slices/motorcyclesSlice.js";
import {motion} from "framer-motion";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const LikeItem = ({ color, price, imageUrl, name, sku }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleRemove = (e) => {
        e.stopPropagation();
        dispatch(toggleLike({ sku }));
    };
    
    const handleCardClick = () => {
        navigate(`/motorcycles/${sku}`);
    };


    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            

            className={styles.item}
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}>
            <img className={styles.image} src={imageUrl} alt={name} />
            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.color}>Колір: {color}</p>
                <p className={styles.price}>{price.toLocaleString('uk-UA')} грн</p>
            </div>
            <button onClick={handleRemove} className={styles.removeBtn}>
                <X size={20} />
            </button>
        </motion.div>
    );
};

LikeItem.propTypes = {
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired
};

export default LikeItem;