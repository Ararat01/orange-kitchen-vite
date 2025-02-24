import React from 'react'
import styles from "./Menu.module.scss"
import { Header } from '../../components/Header/Header'
import { ArrowIcon } from './../../icons/ArrowIcon';

export const Menu = () => {
    return (
        <div className={`mobile ${styles.menu}`}>
            <Header />
            <button className={`container ${styles.menu_back}`}>
                <ArrowIcon size='36' deg="180" />
                <span>Cafe Menu</span>
            </button>
            <div className={`container ${styles.menu_categories}`}>
                <button>
                    <span>Appetizer</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Breakfast</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Salads</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Sandwich & Burger</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Pasta & Wok</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Hot Dishes</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Soups</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Sides</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Sauce</span>
                    <ArrowIcon />
                </button>
                <button>
                    <span>Detox Smoothie</span>
                    <ArrowIcon />
                </button>

                <button>
                    <span>Drinks</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}
