import styles from './ModalImage.module.scss';
import Modal from "../index.jsx";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";
import ModalBody from "../ModalBody";
import ModalClose from "../ModalClose/index.jsx";
import PropTypes from 'prop-types';
import {closeModal} from "../../../redux/slices/modalStatusSlice.js";
import {toggleFavorite, } from "../../../redux/slices/motorcyclesSlice.js";
import {useDispatch, useSelector} from "react-redux";


const ModalImage = ({isOpen, imgURL}) => {
    const dispatch = useDispatch();

    const motorcycle = useSelector(state => state.motorcycles.selectedMotorcycle);

    if (!motorcycle) return null;
    const {name, price, imageUrl, color} = motorcycle;

    const handleDelete = () => {
        dispatch(toggleFavorite(motorcycle));
        dispatch(closeModal())

    };
    return (
        <Modal
            isOpen={isOpen}
        >

            <ModalBody className={'modalBody'}>
                <ModalClose/>

                <img
                    src={imgURL}
                    alt={name}
                    className={styles.modalPicture}/>
                <ModalHeader
                    title={`Видалити ${name} з кошика?`}
                    subtitle={`Натиснувши кнопку «Так, видалити», ${name} буде видалено з кошика`}
                    price={`Вартість: ${price.toLocaleString('uk-UA')} ₴`}
                    img={imageUrl}
                    color={`Колір: ${color}`}
                />
                <ModalFooter
                    firstText='Відмінити'
                    secondaryText='Так, видалити'
                    secondaryClick={handleDelete}>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

ModalImage.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    imgURL: PropTypes.string.isRequired,
};

export default ModalImage;