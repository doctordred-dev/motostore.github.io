import React from 'react';
import styles from './ContactInfo.module.scss';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
                <Phone className={styles.icon}/>
                <span>+38 (067) 000-00-00</span>
            </div>
            <div className={styles.infoBlock}>
                <Mail className={styles.icon}/>
                <span>doctordred111@gmail.com</span>
            </div>
            <div className={styles.infoBlock}>
                <MapPin className={styles.icon}/>
                <span>м. Київ, пл. Галицька, 2</span>

            </div>
            <div className={styles.infoBlock}>
                <Clock className={styles.icon}/>
                <span>Пн-Сб: 10:00 — 19:00</span>
            </div>
        </div>
    );
};

export default ContactInfo;