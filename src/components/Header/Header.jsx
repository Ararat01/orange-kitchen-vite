import React from 'react'
import styles from "./Header.module.scss"
import { BurgerIcon } from '../../icons/BurgerIcon'
import { Link } from 'react-router-dom'
import { CartIcon } from '../../icons/CartIcon'

export const Header = () => {
    return (
        <header>
            <button>
                <BurgerIcon />
            </button>
            <Link to={""}><img className={styles.logo} src="/logo.png" alt="" /></Link>
            <button>
                <CartIcon />
            </button>
        </header>
    )
}
