import React from 'react';
import { Formik, Form } from 'formik';
import { object, string, number } from 'yup';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import MyInput from '../../components/MyInput';
import styles from './CartForm.module.scss';



const CartForm = () => {

const favoritesMoto = useSelector(state => state.motorcycles.favoritesMoto);

const initialValues = {
    name: '',
    surname: '',
    age: '',
    phone: '',
    email: '',
    address: ''
};

const validationSchema = object({
    name: string()
  .min(3, 'Імʼя повинне містити щонайменше 3 символи')
  .required('Імʼя обовʼязкове'),
surname: string()
  .min(3, 'Прізвище повинне містити щонайменше 3 символи')
  .required('Прізвище обовʼязкове'),
age: number()
  .min(18, 'Вік повинен бути не менше 18')
  .max(120, 'Вік повинен бути не більше 120')
  .required('Вік обовʼязковий'),
phone: string()
.transform(value => value.replace(/\D/g, ''))
.matches(/^\d{12}$/, 'Телефон повинен містити 12 цифр')
.required('Телефон обовʼязковий'),

email: string()
  .email('Невірний формат електронної пошти')
  .required('Електронна пошта обовʼязкова'),
address: string()
  .min(10, 'Адреса повинна містити щонайменше 10 символів')
  .required('Адреса обовʼязкова'),
});


const handleSubmit = (values, {resetForm}) => {
    const order = {
        customer: {...values, phone: values.phone.replace(/\D/g, '')},
        order: favoritesMoto
    }
    console.log(order);

    resetForm();
}



    return (
      <>
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        >
            <Form id='cartForm' className={styles.cartForm}>
            <h2>Інформація замовника</h2>
                <MyInput type='text' name='name' id='name' label='Імʼя' placeholder='Імʼя' />
                <MyInput type='text' name='surname' id='surname' label='Прізвище' placeholder='Прізвище' />
                <MyInput type='text' name='age' id='age' label='Вік' placeholder='Вік' />
                <MyInput type="text" name="phone" id="phone" label="Телефон" placeholder="Телефон" phone format="+380 (##) ###-##-##"/>
                <MyInput type='email' name='email' id='email' label='Пошта' placeholder='Пошта' />
                <MyInput type='text' name='address' id='address' label='Адреса' placeholder='Адреса' />
            </Form>
        </Formik>
      </>
    );

    
};

console.log(styles.cartForm);

export default CartForm;