import React from 'react';
import styles from "./HomePage.module.scss";
import {Link} from "react-router";

const HomePage = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Мотоцикли, які надихають</h1>
                    <p className={styles.subtitle}>
                        Обирай з десятків моделей — потужність, стиль і свобода в кожному байку.
                    </p>
                    <Link to="/motorcycles" className={styles.button}>Переглянути мотоцикли</Link>
                </div>
                <div className={styles.heroImage}>
                    <img src="./images/hero.jpg" alt="Мотоцикл на фоні природи"/>
                </div>
            </section>

            <section className={styles.advantages}>
                <h2>Чому обирають нас?</h2>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        {/*<img src="./images/logistics_12525493.png" alt="Швидкість"/>*/}
                        <h4>Швидка доставка</h4>
                        <p>Доставляємо мотоцикли по всій Україні за 1-3 дні</p>
                    </div>
                    <div className={styles.item}>
                        {/*<img src="./icons/support.svg" alt="Підтримка"/>*/}
                        <h4>Підтримка 24/7</h4>
                        <p>Консультації та допомога у виборі мотоцикла в будь-який час</p>
                    </div>
                    <div className={styles.item}>
                        {/*<img src="./icons/guarantee.svg" alt="Гарантія"/>*/}
                        <h4>Гарантія якості</h4>
                        <p>Офіційна гарантія від виробника на всі моделі</p>
                    </div>
                </div>
            </section>

            <section className={styles.offerings}>
                <h2>Що ми пропонуємо?</h2>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <h4>Спортбайки</h4>
                        <p>Максимальна швидкість, агресивний стиль — для справжніх фанатів адреналіну.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Круїзери</h4>
                        <p>Ідеально для розмірених поїздок та справжнього комфорту на трасі.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Туристичні мотоцикли</h4>
                        <p>Для далеких подорожей — потужні, зручні й витривалі.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Міські моделі</h4>
                        <p>Легкі, маневрені та економні — ідеальні для міських доріг.</p>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default HomePage;