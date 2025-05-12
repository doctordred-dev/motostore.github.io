import React from 'react';
import styles from './Map.module.scss'

const Map = () => {
    return (
        <div className={styles.mapWrapper}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20325.248976841696!2d30.453350855175763!3d50.447505615849295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce8b1ccce8d9%3A0x3a7222e0f6ae376c!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INGG0LjRgNC6INCj0LrRgNCw0LjQvdGL!5e0!3m2!1sru!2sua!4v1744838851243!5m2!1sru!2sua"
                width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>
    );
};

export default Map;