import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import Button from '../Button';
import Star from '../svg/star/index.jsx';
import { toggleLike, toggleFavorite, setSelectedMotorcycle } from '../../redux/slices/motorcyclesSlice';
import { setFirstModalOpen, setSecondModalOpen } from '../../redux/slices/modalStatusSlice';
import styles from './SingleItem.module.scss';

const SingleItem = () => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const motorcycles = useSelector(state => state.motorcycles.data);
  const motorcycle = motorcycles.find(moto => moto.sku === sku);
  
  useEffect(() => {
    // Если мотоцикл не найден, перенаправляем на страницу мотоциклов
    if (!motorcycle && motorcycles.length > 0) {
      navigate('/motorcycles');
    }
    

    if (motorcycle) {
      dispatch(setSelectedMotorcycle(motorcycle));
    }
  }, [motorcycle, motorcycles, navigate, dispatch]);
  

  if (!motorcycle) {
    return (
      <div className={styles.loading}>
        <h2>Завантаження...</h2>
      </div>
    );
  }
  
  const handleGoBack = () => {
    navigate('/motorcycles');
  };
  
  const handleToggleLike = () => {
    dispatch(toggleLike(motorcycle));
  };
  
  const handleToggleCart = () => {
    dispatch(toggleFavorite({
      ...motorcycle,
      specs: {
        power: motorcycle.specs?.power || 'Н/Д',
        engineVolume: motorcycle.specs?.engineVolume || 'Н/Д',
        maxSpeed: motorcycle.specs?.maxSpeed || 'Н/Д'
      }
    }));
  };
  
  return (
    <motion.div 
      className={styles.singleItem}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <button className={styles.backButton} onClick={handleGoBack}>
        ← Повернутися до списку
      </button>
      
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <motion.img 
            src={motorcycle.imageUrl} 
            alt={motorcycle.name}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div 
            className={styles.favSvg}
            onClick={handleToggleLike}
            style={{
              backgroundColor: motorcycle.isLiked ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{
                width: '20px',
                height: '20px',
                fill: motorcycle.isLiked ? '#ff3c00' : 'white',
                transition: 'fill 0.2s ease'
              }}
            >
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
            </svg>
          </div>
        </div>
        
        <div className={styles.infoContainer}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {motorcycle.name}
          </motion.h1>
          
          <motion.div 
            className={styles.details}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className={styles.sku}>Артикул: {motorcycle.sku}</p>
            <p className={styles.color}>Колір: {motorcycle.color}</p>
            <p className={styles.price}>
              {motorcycle.price.toLocaleString('uk-UA')} ₴
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Опис:</h3>
            <p>{motorcycle.description}</p>
          </motion.div>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              type="button"
              onClick={handleToggleCart}
              className={motorcycle.isFavorite ? styles.inCart : styles.notInCart}
            >
              {motorcycle.isFavorite ? 'Видалити з кошика' : 'Додати до кошика'}
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className={styles.specifications}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2>Технічні характеристики</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <h4>Тип двигуна</h4>
            <p>{motorcycle.specs?.engineType} </p>
          </div>
          <div className={styles.specItem}>
            <h4>Потужність</h4>
            <p>{motorcycle.specs?.power} к.с.</p>
          </div>
          <div className={styles.specItem}>
            <h4>Максимальна швидкість</h4>
            <p>{motorcycle.specs?.maxSpeed} км/год</p>
          </div>
          <div className={styles.specItem}>
            <h4>Об'єм двигуна</h4>
            <p>{motorcycle.specs?.engineVolume} куб.см</p>
          </div>
          <div className={styles.specItem}>
            <h4>Тип трансмісії</h4>
            <p>{motorcycle.specs?.transmission}</p>
          </div>
          <div className={styles.specItem}>
            <h4>Тип приводу</h4>
            <p>{motorcycle.specs?.driveType}</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className={styles.relatedItems}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2>Схожі моделі</h2>
        <div className={styles.relatedGrid}>
          {motorcycles
            .filter(moto => moto.sku !== motorcycle.sku)
            .slice(0, 3)
            .map(moto => (
              <div 
                key={moto.sku} 
                className={styles.relatedItem}
                onClick={() => navigate(`/motorcycles/${moto.sku}`)}
              >
                <img src={moto.imageUrl} alt={moto.name} />
                <h3>{moto.name}</h3>
                <p>{moto.price.toLocaleString('uk-UA')} ₴</p>
              </div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleItem;
