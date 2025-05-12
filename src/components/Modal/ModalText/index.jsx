import styles from './ModalText.module.scss';
import Modal from "../index.jsx";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";
import ModalBody from "../ModalBody";
import ModalClose from "../ModalClose";
import Button from "../../Button";
import PropTypes from 'prop-types';
import {getFromLocalStorage} from "../../../utils/localStorage.js";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../redux/slices/modalStatusSlice.js";
import {toggleFavorite} from "../../../redux/slices/motorcyclesSlice.js";


const ModalText = ({isOpen}) => {
    const dispatch = useDispatch();

    const motorcycle = useSelector(state => state.motorcycles.selectedMotorcycle);
    const {name, price, color} = motorcycle;

    const handleAdd = () => {
        dispatch(toggleFavorite(motorcycle));
        dispatch(closeModal());
    };

    return (
        <Modal isOpen={isOpen}>
            <ModalBody>
                <ModalClose/>
                <ModalHeader title={`Додати ${name} до кошика?`}
                             price={`Вартість: ${price.toLocaleString('uk-UA')} ₴`}
                             color={`Колір: ${color}`}
                />

                <Button
                    onClick={handleAdd}
                    type="button"
                    className={styles.btnAdd}
                >
                    Додати
                </Button>

            </ModalBody>
        </Modal>

    )
}

ModalText.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default ModalText;

