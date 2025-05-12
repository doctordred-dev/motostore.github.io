import styles from './ModalClose.module.scss';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {closeModal} from "../../../redux/slices/modalStatusSlice.js";

const ModalClose = () => {
    const dispatch = useDispatch();

    return (
            <span className={styles.ModalClose} onClick={()=>{dispatch(closeModal())}}>X</span>
    )
}



export default ModalClose