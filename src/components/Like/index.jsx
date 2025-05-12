import React from 'react';
import styles from './Like.module.scss'
import LikeItem from "../LikeItem/index.jsx";
import {useSelector} from "react-redux";

const Like = () => {
    const likedMoto = useSelector(state => state.motorcycles.likedMoto);

    return (
        <div className={styles.likePage}>
            <h2 className={styles.title}>Улюблені мотоцикли</h2>
            {likedMoto.length > 0 ? (
                <div className={styles.items}>
                    {likedMoto.map(({ color, price, imageUrl, name, sku }) => (
                        <LikeItem
                            key={sku}
                            sku={sku}
                            color={color}
                            price={price}
                            imageUrl={imageUrl}
                            name={name}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles.empty}>Немає улюблених мотоциклів</p>
            )}
        </div>
    );
};


export default Like;