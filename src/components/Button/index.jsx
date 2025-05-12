import styles from './Button.module.scss'
import PropTypes from "prop-types";

const Button = ({onClick,type, className, children}) => {

    return (
        <>
            <button
                className={`${styles.btn} ${className}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </>

    )
}


Button.propTypes = {
    type: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button