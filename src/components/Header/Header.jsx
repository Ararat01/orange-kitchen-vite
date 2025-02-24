import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { BurgerIcon } from '../../icons/BurgerIcon'
import { Link } from 'react-router-dom'
import { CartIcon } from '../../icons/CartIcon'
import { EditIcon } from './../../icons/EditIcon';
import { ForkIcon } from './../../icons/ForkIcon';
import { ProfileIcon } from './../../icons/ProfileIcon';
import { SubsIcon } from './../../icons/SubsIcon';
import { CompareIcon } from './../../icons/CompareIcon';
import { AboutIcon } from './../../icons/AboutIcon';
import { PhoneIcon } from './../../icons/PhoneIcon';
import { CloseIcon } from './../../icons/CloseIcon';
import { ExitIcon } from './../../icons/ExitIcon';
import { SettingIcon } from './../../icons/SettingIcon';

export const Header = () => {
    const [menuState, setMenuState] = useState(false)

    return (
        <header>
            <button onClick={() => setMenuState(true)}>
                <BurgerIcon />
            </button>
            <Link to={""}><img className={styles.logo} src="/logo.png" alt="" /></Link>
            <button>
                <CartIcon />
            </button>
            <div className={styles.menu_bg} style={{ left: menuState ? "0" : "-100%" }} onClick={() => setMenuState(false)}></div>
            <div className={styles.menu} style={{ left: menuState ? "0" : "-100%" }}>
                <div className={styles.menu_close}>
                    <button onClick={() => setMenuState(false)}>
                        <CloseIcon />
                    </button>
                </div>
                <div className={styles.menu_user}>
                    <img src="/images/user.png" alt="no image" />
                    <div>
                        <h3>Anna</h3>
                        <button><span>Edit</span><EditIcon /></button>
                    </div>
                </div>
                <div className={styles.menu_nav} >
                    <div><ForkIcon /> <span>Cafe Menu</span></div>
                    <div><ProfileIcon /> <span>My profile</span></div>
                    <div><SubsIcon /> <span>Subscription</span></div>
                    <div><CompareIcon /> <span>Compare Dishes</span></div>
                    <div><AboutIcon /> <span>About Us</span></div>
                    <div><PhoneIcon /> <span>Contacts</span></div>
                </div>
                <div className={styles.menu_actions}>
                    <div><SettingIcon /> <span>Settings</span></div>
                    <div><ExitIcon /> <span>Logout</span></div>
                </div>
            </div>
        </header>
    )
}
