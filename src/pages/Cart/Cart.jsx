import React from 'react'
import styles from "./Cart.module.scss"
import { Header } from '../../components/Header/Header'
import { ArrowIcon } from './../../icons/ArrowIcon';
import { useNavigate } from 'react-router-dom';
import { MinusIcon } from './../../icons/MinusIcon';
import { AddIcon } from './../../icons/AddIcon';
import { DelIcon } from './../../icons/DelIcon';

export const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className={`mobile ${styles.cart}`}>
            <Header />
            <div className={`container ${styles.cart_info}`}>
                <button className={`${styles.cart_back}`} onClick={() => navigate("/")}>
                    <ArrowIcon size='36' deg="180" />
                    <span>My Cart</span>
                </button>
                <div className={styles.cart_info_el}>
                    <img src="/images/cart.png" alt="" />
                    <div className={styles.cart_info_el_info}>
                        <h4>Beef with Salsa</h4>
                        <h5>$20.59</h5>
                        <div className={styles.bottom}>
                            <div className={styles.count}>
                                <MinusIcon />
                                <span>1</span>
                                <AddIcon />
                            </div>
                            <DelIcon />
                        </div>
                    </div>
                </div>

            </div>
            <div className={`container ${styles.cart_checkout}`}>
                <div>
                    <h5>Subtotal</h5>
                    <h5>$20.59</h5>
                </div>
                <div>
                    <h5>Delivery</h5>
                    <h5>$5</h5>
                </div>
                <div className={styles.line}></div>
                <div>
                    <h4>Total</h4>
                    <h4>$25.59</h4>
                </div>
                <button onClick={() => navigate("/checkout")}>
                    Checkout
                </button>
            </div>
        </div>
    )
}
