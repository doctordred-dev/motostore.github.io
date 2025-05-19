import React from 'react';
import styles from './CartPage.module.scss';
import Cart from "../components/Cart/index.jsx";
import CartForm from '../Forms/CartForm';

const CartPage = () => {
    return (
        <div className={styles.cartPage}>
            <CartForm />
            <Cart position='normal' />
        </div>
    );
};

export default CartPage;