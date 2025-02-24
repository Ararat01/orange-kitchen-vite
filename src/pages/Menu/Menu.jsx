import React from 'react'
import styles from "./Menu.module.scss"
import { Header } from '../../components/Header/Header'
import { ArrowIcon } from './../../icons/ArrowIcon';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className={`mobile ${styles.menu}`}>
            <Header />
            <button className={`container ${styles.menu_back}`}>
                <ArrowIcon size='36' deg="180" />
                <span>Cafe Menu</span>
            </button>
            <div className={`container ${styles.menu_categories}`}>
                <button onClick={() => navigate("/menu/appetizer")}>
                    <span>Appetizer</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/breakfast")}>
                    <span>Breakfast</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/salads")}>
                    <span>Salads</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/sandwich & burger")}>
                    <span>Sandwich & Burger</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/pasta & wok")}>
                    <span>Pasta & Wok</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/hot dishes")}>
                    <span>Hot Dishes</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/soups")}>
                    <span>Soups</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/sides")}>
                    <span>Sides</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/sauce")}>
                    <span>Sauce</span>
                    <ArrowIcon />
                </button>
                <button onClick={() => navigate("/menu/detox smoothie")}>
                    <span>Detox Smoothie</span>
                    <ArrowIcon />
                </button>

                <button onClick={() => navigate("/menu/drinks")}>
                    <span>Drinks</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}
