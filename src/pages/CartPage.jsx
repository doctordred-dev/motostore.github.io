import React from 'react';
import styles from './CartPage.module.scss';
import Cart from "../components/Cart/index.jsx";
import CartForm from '../Forms/CartForm';
import {useSelector} from 'react-redux';


const CartPage = () => {
    const favoritesMoto = useSelector(state => state.motorcycles.favoritesMoto);

    return (
        <div className={styles.cartPage}>

            {favoritesMoto.length > 0 ? (
                <>
                <CartForm />
                <Cart position='normal' />
                </>
            ) : (
                <Cart position='normal' />
            )}
            
        </div>
    );
};

export default CartPage;