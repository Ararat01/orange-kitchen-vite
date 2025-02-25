import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Category.module.scss';
import { SearchIcon } from '../../icons/SearchIcon';
import { ArrowIcon } from '../../icons/ArrowIcon';
import { useNavigate, useParams } from 'react-router-dom';
import { ProdCard } from '../../components/ProdCard/ProdCard';
import { MinusIcon } from './../../icons/MinusIcon';
import { AddIcon } from './../../icons/AddIcon';
import { CloseIcon } from '../../icons/CloseIcon';
import { SortIcon } from './../../icons/SortIcon';
import { FilterIcon } from './../../icons/FilterIcon';

export const Category = () => {
    const navigate = useNavigate()
    const { category } = useParams()

    const [modalState, setModalState] = useState(false)

    return (
        <div className={`mobile ${styles.category} ${modalState ? "hidden" : ""}`} >
            <Header />
            <div className={`container  ${styles.search}`}>
                <div className={styles.search_input}>
                    <input type="text" placeholder='Search' />
                    <SearchIcon />
                </div>
                <button className={styles.search_btn} onClick={() => navigate("/menu")}>
                    <FilterIcon />

                </button>
            </div>
            <div className='container' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button className={` ${styles.category_back}`} onClick={() => navigate("/")}>
                    <ArrowIcon size='36' deg="180" />
                    <span>{category}</span>
                </button>
                <SortIcon />
            </div>
            <div className={`container ${styles.prodComponent}`}>
                <div className={`${styles.prods}`}>
                    {[...Array(10)].map((_, i) => <ProdCard modalState={modalState} changeOverflow={setModalState} key={i} />)}
                </div>

            </div>
            <div className="modal-container" style={modalState ? { height: "100dvh", overflow: "hidden" } : {}}>

                <div className="modal_bg" onClick={() => setModalState(false)}></div>
                <div className={`modal ${modalState ? "opened" : ""}`}>
                    <div className='modal_image'>
                        <img src="/images/modal.png" alt="" />
                        <div className='modal_close' onClick={() => setModalState(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className='container modal_info'>
                        <h3>Beef with Salsa</h3>
                        <p>avocado, pesto, tomato, jalapeno pepper</p>
                        <h4><span>$20.59</span> <b></b> <span>350g</span></h4>
                        <div className='modal_info-porc'>
                            <div className='modal_info-porc_el'>
                                <h5>kkal</h5>
                                <div className='kkal'>
                                    <span>605</span>
                                </div>
                            </div>
                            <div className='modal_info-porc_el'>
                                <h5>protein</h5>
                                <div className='protein'>
                                    <span>39</span>
                                </div>
                            </div>
                            <div className='modal_info-porc_el'>
                                <h5>fat</h5>
                                <div className='fat'>
                                    <span>37</span>
                                </div>
                            </div>
                            <div className='modal_info-porc_el'>
                                <h5>carbs</h5>
                                <div className='carbs'>
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                        <div className='modal_info-toCart'>
                            <div className='count'>
                                <MinusIcon />
                                <span>1</span>
                                <AddIcon />
                            </div>
                            <button>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
