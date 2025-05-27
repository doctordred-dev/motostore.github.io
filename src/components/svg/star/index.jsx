import React from 'react';
import styles from './Star.module.scss';
import PropTypes from 'prop-types';

const Star = ({onClick, className = ''}) => {
    return (
        <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={onClick}
            className={`${styles.star} ${className}`}

        >
            <path
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
        </svg>
    );
};

Star.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Star;