import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Main.module.scss';
import { SearchIcon } from './../../icons/SearchIcon';
import { ArrowIcon } from './../../icons/ArrowIcon';
import { PlusIcon } from './../../icons/PlusIcon';

export const Main = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const intervalDuration = 5000;

    const changeSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    useEffect(() => {
        const interval = setInterval(changeSlide, intervalDuration);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.left = `-${currentIndex * (100)}%`;
        }
    }, [currentIndex]);

    return (
        <div className={`mobile ${styles.main}`}>
            <Header />
            <div className={`container ${styles.search}`}>
                <div className={styles.search_input}>
                    <input type="text" placeholder='Search' />
                    <SearchIcon />
                </div>
                <button className={styles.search_btn}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_485_7701" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                            <rect width="28" height="28" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_485_7701)">
                            <path d="M9.36931 10.7735L13.0983 4.66223C13.2073 4.48276 13.341 4.35481 13.4993 4.2784C13.6574 4.20217 13.8243 4.16406 14.0001 4.16406C14.1759 4.16406 14.3428 4.20217 14.5009 4.2784C14.6592 4.35481 14.7929 4.48276 14.9019 4.66223L18.6309 10.7735C18.74 10.9493 18.7945 11.1338 18.7945 11.3271C18.7945 11.5206 18.7497 11.6973 18.6601 11.8574C18.5702 12.0174 18.4468 12.1452 18.2899 12.2409C18.1328 12.3366 17.9496 12.3844 17.7401 12.3844H10.2601C10.0499 12.3844 9.86592 12.3361 9.70822 12.2394C9.55053 12.1428 9.42784 12.0154 9.34014 11.8574C9.2505 11.6997 9.20568 11.5245 9.20568 11.3318C9.20568 11.1391 9.26022 10.953 9.36931 10.7735ZM20.4168 25.2177C19.078 25.2177 17.9431 24.7522 17.0121 23.8212C16.0811 22.8902 15.6156 21.7554 15.6156 20.4166C15.6156 19.0779 16.0811 17.943 17.0121 17.012C17.9431 16.081 19.078 15.6155 20.4168 15.6155C21.7555 15.6155 22.8904 16.081 23.8214 17.012C24.7524 17.943 25.2179 19.0779 25.2179 20.4166C25.2179 21.7554 24.7524 22.8902 23.8214 23.8212C22.8904 24.7522 21.7555 25.2177 20.4168 25.2177ZM3.94897 23.5797V17.2506C3.94897 16.9517 4.04999 16.7016 4.25202 16.5004C4.45424 16.2993 4.70478 16.1988 5.00364 16.1988H11.3328C11.6317 16.1988 11.8817 16.2998 12.083 16.5019C12.284 16.7041 12.3846 16.9546 12.3846 17.2535V23.5826C12.3846 23.8815 12.2835 24.1316 12.0815 24.3328C11.8793 24.5339 11.6288 24.6344 11.3299 24.6344H5.00072C4.70186 24.6344 4.45181 24.5334 4.25056 24.3314C4.0495 24.1291 3.94897 23.8786 3.94897 23.5797ZM20.4165 23.468C21.2707 23.468 21.9928 23.173 22.583 22.5831C23.1731 21.9932 23.4682 21.2711 23.4682 20.4169C23.4682 19.5627 23.1732 18.8405 22.5833 18.2504C21.9933 17.6603 21.2713 17.3652 20.4171 17.3652C19.5629 17.3652 18.8407 17.6602 18.2506 18.2501C17.6604 18.84 17.3653 19.5621 17.3653 20.4163C17.3653 21.2705 17.6603 21.9927 18.2503 22.5828C18.8402 23.173 19.5623 23.468 20.4165 23.468ZM5.69868 22.8847H10.6348V17.9485H5.69868V22.8847ZM11.4784 10.6347H16.5218L14.0001 6.57819L11.4784 10.6347Z" fill="white" />
                        </g>
                    </svg>

                </button>
            </div>
            <h2>Find what fits you</h2>
            <div className={`${styles.slider}`}>
                <div className={styles.slider_inner} ref={sliderRef}>
                    <div>
                        <img src="/images/slider1.png" alt="Slider 1" />
                        <div className={styles.slider_text}>
                            <h4>Your Table Awaits</h4>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/slider3.png" alt="Slider 3" />
                        <div className={styles.slider_text}>
                            <h4>Try Something New</h4>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/slider2.png" alt="Slider 2" />
                        <div className={styles.slider_text}>
                            <h4>Pure Sips, Pure Energy</h4>
                            <button>More</button>
                        </div>
                    </div>
                </div>
                <div className={styles.slider_dots}>
                    <button className={currentIndex === 0 ? styles.active : ""} onClick={() => setCurrentIndex(0)}></button>
                    <button className={currentIndex === 1 ? styles.active : ""} onClick={() => setCurrentIndex(1)}></button>
                    <button className={currentIndex === 2 ? styles.active : ""} onClick={() => setCurrentIndex(2)}></button>
                </div>
            </div>
            <div className={`container ${styles.prodComponent}`}>
                <button><span>Most loved</span><ArrowIcon /></button>
                <div className={`${styles.prods}`}>
                    {[...Array(6)].map((_, i) => {
                        return <div key={i} className={styles.prods_el}>
                            <img src="/images/prod.png" alt="" />
                            <h5>Chicken Breast with Salsa</h5>
                            <div>
                                <span>$20.59</span>
                                <button><PlusIcon /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={`container ${styles.prodComponent}`}>
                <button><span>Most loved</span><ArrowIcon /></button>
                <div className={`${styles.prods}`}>
                    {[...Array(6)].map((_, i) => {
                        return <div key={i} className={styles.prods_el}>
                            <img src="/images/prod.png" alt="" />
                            <h5>Chicken Breast with Salsa</h5>
                            <div>
                                <span>$20.59</span>
                                <button><PlusIcon /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={`container ${styles.prodComponent}`}>
                <button><span>Most loved</span><ArrowIcon /></button>
                <div className={`${styles.prods}`}>
                    {[...Array(6)].map((_, i) => {
                        return <div key={i} className={styles.prods_el}>
                            <img src="/images/prod.png" alt="" />
                            <h5>Chicken Breast with Salsa</h5>
                            <div>
                                <span>$20.59</span>
                                <button><PlusIcon /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
