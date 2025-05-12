import React from 'react';
import styles from './Contact.module.scss';
import ContactInfo from "../ContactInfo/index.jsx";
import Map from './Map/index.jsx'

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <h1 className={styles.title}>Зв’яжіться з нами</h1>
            <p className={styles.subtitle}>Маєте питання? Ми завжди на зв’язку!</p>
            <ContactInfo/>
            <Map/>
        </div>
    );
};

export default Contact;