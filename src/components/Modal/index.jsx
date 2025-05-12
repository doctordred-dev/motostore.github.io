import styles from "./Modal.module.scss";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {closeModal} from "../../redux/slices/modalStatusSlice.js";


const Modal = ({isOpen, children}) => {
    const dispatch = useDispatch();

    if (!isOpen) return null;

    return (
        <div
            className={styles.modal}
            onClick={(e) => {
                e.target === e.currentTarget ? dispatch(closeModal()) : null
            }}
        >{children}</div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;