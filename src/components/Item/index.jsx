import styles from './Item.module.scss';
import Button from "../Button/index.jsx";
import classNames from 'classnames';
import Star from "../svg/star/index.jsx";
import {useDispatch} from "react-redux";
import {setSelectedMotorcycle, toggleLike} from "../../redux/slices/motorcyclesSlice.js";
import {setFirstModalOpen, setSecondModalOpen} from "../../redux/slices/modalStatusSlice.js";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';



const Item = ({name, price, imageUrl, sku, color, isInCart, isLiked, specs, isHovered = false, viewMode}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggleModal = useCallback(() => {
        dispatch(setSelectedMotorcycle({name, price, imageUrl, sku, color, specs}));

        if (!isInCart) {
            dispatch(setSecondModalOpen())
        } else {
            dispatch(setFirstModalOpen())
        }
    }, [dispatch, name, price, imageUrl, sku, color, isInCart, specs])

    const handleLikeClick = useCallback((e) => {
        e.stopPropagation();
        dispatch(toggleLike({name, price, imageUrl, sku, color, specs}))
    }, [dispatch, name, price, imageUrl, sku, color, specs])
    
    const handleItemClick = useCallback(() => {
        navigate(`/motorcycles/${sku}`);
    }, [navigate, sku]);



    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={handleItemClick}
            className={classNames(styles.card, {
                [styles.list]: viewMode === 'list'
              })}
            >
            <div style={{width: 30, height: 30}}
            className={classNames(styles.favSvg, {
                [styles.fav]: isLiked,
                [styles.listFavSvg]: viewMode === 'list'
              })}
            >

                <Star onClick={handleLikeClick}/>
            </div>


            <img src={imageUrl} alt={name} className={classNames(styles.image, {
                [styles.listImage]: viewMode === 'list'
            })}/>

            <div className={styles.info}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.sku}>Артикул: {sku}</p>
                <p className={styles.color}>Колір: {color}</p>

                <div className={classNames(styles.specsContainer, { [styles.visible]: isHovered })}>
                    <p className={styles.specs}>Потужність: {specs.power} кн/c</p>
                    <p className={styles.specs}>Об'єм двигуна: {specs.engineVolume} см³</p>
                    <p className={styles.specs}>Макс. швидкість: {specs.maxSpeed} км/год</p>
                </div>

                <p className={styles.price}>
                    {price.toLocaleString('uk-UA')} ₴
                </p>
            </div>

            <Button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    handleToggleModal();
                }}
                className={classNames(styles.btn, {
                    [styles.inCart]: isInCart,
                    [styles.notInCart]: !isInCart,
                    [styles.listBtn]: viewMode === 'list'
                  })}
            >
                {isInCart ? 'Видалити з кошика' : 'Додати до кошика'}
            </Button>
        </motion.div>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isInCart: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool
};

export default memo(Item);