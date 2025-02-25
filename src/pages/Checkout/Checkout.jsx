import React, { useState } from 'react'
import styles from "./Checkout.module.scss"
import { Header } from '../../components/Header/Header'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { useNavigate } from 'react-router-dom'
import { AddressIcon } from './../../icons/AddressIcon';
import { PromoIcon } from './../../icons/PromoIcon';
import { PaymentIcon } from './../../icons/PaymentIcon';
import { AddIcon } from '../../icons/AddIcon'

export const Checkout = () => {
    const navigate = useNavigate()
    const [method, setMethod] = useState(false)
    return (
        <div className={`mobile ${styles.checkout}`}>
            <Header />
            <div className={`container ${styles.checkout_info}`}>
                <button className={`${styles.checkout_back}`} onClick={() => navigate("/cart")}>
                    <ArrowIcon size='36' deg="180" />
                    <span>Checkout</span>
                </button>
                <div className={styles.delivery}>
                    <h3><AddressIcon /><span>Delivery Adress</span></h3>
                    <input type="text" />
                </div>
                <div className={styles.promo}>
                    <h3><PromoIcon /><span>Voucher or Promo</span></h3>
                    <div>
                        <input type="text" placeholder='xxxx-xxxx-xxxx-xxxx' />
                        <button>Apply</button>
                    </div>
                </div>
                <div className={styles.payment}>
                    <h3><PaymentIcon /><span>Payment Method</span></h3>
                    <button onClick={() => setMethod(!method)}><img src="/images/visa.png" alt="" />
                        <span><b>**** 4595</b> <ArrowIcon deg='90' /></span>
                    </button>
                    <div className={`${method ? styles.active : ""} ${styles.payment_method}`}>
                        <div>
                            <h4>Orange Fitness Balance</h4>
                            <h4>$130</h4>
                        </div>
                        <div>
                            <h4>Add new card</h4>
                            <h4><AddIcon /></h4>
                        </div>
                    </div>
                </div>
                <div className={`${styles.checkout_checkout}`}>
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
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    )
}
