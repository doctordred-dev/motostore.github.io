import styles from './ModalHeader.module.scss';
import PropTypes from 'prop-types';

const ModalHeader = ({title, price, color, subtitle}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>{price}</p>
            <p className={styles.color}>{color}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </>
    )
}

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    subtitle: PropTypes.string,
};

export default ModalHeader