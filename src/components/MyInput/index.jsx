import styles from './MyInput.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useField} from 'formik';
import { PatternFormat } from 'react-number-format';



const MyInput = ({ id, label, placeholder, format = null, phone = false, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const isError = meta.error && meta.touched;
  
    return (
      <div className={classNames(styles.inputWrapper, { [styles.error]: isError })}>
        <label htmlFor={id}>{label}</label>
  
        {phone ? (
          <PatternFormat
            id={id}
            {...field}
            {...props}
            format={format}
            mask="_"
            className={styles.input}
            allowEmptyFormatting
            value={field.value}
            onValueChange={({ value }) => {
              helpers.setValue(value)
            }}

          />
        ) : (
          <input
            id={id}
            {...field}
            {...props}
            className={styles.input}
            
          />
        )}
  
        {isError && <span className={styles.errorText}>{meta.error}</span>}
      </div>
    );
  };

MyInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    phone: PropTypes.bool,
};

export default MyInput;