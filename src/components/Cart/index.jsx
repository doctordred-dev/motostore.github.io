import React from 'react';
import CartItem from "../CartItem/index.jsx";
import styles from './Cart.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {updateQuantity} from "../../redux/slices/motorcyclesSlice.js";

const Cart = ({position}) => {
    const dispatch = useDispatch();

    const favoritesMoto = useSelector(state => state.motorcycles.favoritesMoto)
    const total = favoritesMoto.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)

    const handleQuantityChange = (sku, newQuantity) => {
        dispatch(updateQuantity({sku, quantity: newQuantity}))
    };

    return (
        <>
            {position === 'normal' ?
                <div className={styles.cartPage}>
                    <h2 className={styles.title}>Кошик</h2>
                    {favoritesMoto.length > 0 ? (
                        <>
                            <div className={styles.cartItems}>
                                {favoritesMoto.map(({color, price, imageUrl, name, sku, quantity = 1, specs}) => (
                                    <CartItem
                                        key={sku}
                                        sku={sku}
                                        color={color}
                                        price={price}
                                        imageUrl={imageUrl}
                                        name={name}
                                        position={position}
                                        quantity={quantity}
                                        onQuantityChange={handleQuantityChange}
                                        specs={specs}
                                    />
                                ))}
                            </div>
                            <div className={styles.totalBlock}>
                                <span>Разом:</span>
                                <span className={styles.total}>{total.toLocaleString('uk-UA')} грн</span>
                            </div>
                            <button className={styles.accept}>Оформити замовлення</button>
                        </>
                    ) : (
                        <p className={styles.empty}>Кошик порожній</p>
                    )}
                </div>

                :

                <div className={styles.sideCartWrapper}>
                    <div className={styles.sideCartHeader}>
                        <h2>Кошик</h2>
                    </div>
                    <div className={styles.sideCartItems}>
                        {favoritesMoto.length > 0 ? (
                            favoritesMoto.map(({color, price, imageUrl, name, sku}) => (
                                <CartItem
                                    key={sku}
                                    sku={sku}
                                    color={color}
                                    price={price}
                                    imageUrl={imageUrl}
                                    name={name}
                                    position={position}
                                />
                            ))
                        ) : (
                            <p className={styles.sideEmpty}>Кошик порожній</p>
                        )}
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;