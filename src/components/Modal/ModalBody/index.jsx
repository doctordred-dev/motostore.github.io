import styles from './ModalBody.module.scss';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const ModalBody = ({ children, className }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={styles.modalContent}>{children}</motion.div>
    )
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalBody;