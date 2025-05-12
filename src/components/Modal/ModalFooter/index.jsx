import Button from "../../Button";
import styles from "./ModalFooter.module.scss";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {closeModal} from "../../../redux/slices/modalStatusSlice.js";

const ModalFooter = ({firstText, secondaryText, secondaryClick}) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.modalFooter}>
            <Button className='btnPrimary' type='button' onClick={()=>{dispatch(closeModal())}}>{firstText}</Button>
            <Button className='btnSecondary' type='button' onClick={secondaryClick}>{secondaryText}</Button>
        </div>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired,
    secondaryClick: PropTypes.func.isRequired,
};

export default ModalFooter