import React, { memo } from 'react';
import styles from './Footer.module.scss';

const Footer = ({}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                     MotoShop by Vlad
                </div>
                <div className={styles.links}>
                    <a href="/">Про нас</a>
                    <a href="/motorcycles">Каталог</a>
                    <a href="/favorite">Улюблені</a>
                    <a href="/contact">Контакти</a>
                </div>
                <div className={styles.copy}>
                    © {new Date().getFullYear()} MotoShop by Vlad. Всі права захищені.
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);