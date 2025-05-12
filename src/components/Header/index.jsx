import useScrollY from '../../hooks/useScrollY';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import { memo, useState, useEffect } from 'react';
import classNames from 'classnames';

const Header = ({ imgSrc, likeCounter, favoriteCounter }) => {
    const scrollY = useScrollY();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={classNames(styles.header, { [styles.scrolled]: scrollY > 100 })}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={imgSrc} alt="logo" />
                    {isMobile && (
                        <button 
                            className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`} 
                            onClick={toggleMenu}
                            aria-label="Меню"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    )}
                </div>

                <nav className={`${styles.navContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <ul className={styles.nav}>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to='/' onClick={() => isMobile && setIsMenuOpen(false)}>Головна</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to='/motorcycles' onClick={() => isMobile && setIsMenuOpen(false)}>Мотоцикли</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to='/contact' onClick={() => isMobile && setIsMenuOpen(false)}>Контакти</NavLink></li>
                    </ul>
                </nav>
                
                <div className={styles.actions}>
                    <NavLink 
                        to='/favorite' 
                        className={({isActive}) => isActive ? `${styles.favorite} ${styles.active}` : styles.favorite}
                        onClick={() => isMobile && setIsMenuOpen(false)}
                    >
                        Обрані<span className={styles.badgeLike}>{likeCounter}</span>
                    </NavLink>
                    <NavLink 
                        to='/cart' 
                        className={({isActive}) => isActive ? `${styles.cart} ${styles.active}` : styles.cart}
                        onClick={() => isMobile && setIsMenuOpen(false)}
                    >
                        Кошик <span className={styles.badgeCart}>{favoriteCounter}</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    likeCounter: PropTypes.number.isRequired,
    favoriteCounter: PropTypes.number.isRequired,
};

export default memo(Header);