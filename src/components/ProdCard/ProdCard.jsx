import React, { useEffect, useState } from 'react'
import styles from "./ProdCard.module.scss"
import { PlusIcon } from '../../icons/PlusIcon'

export const ProdCard = ({ modalState, changeOverflow = () => { } }) => {
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        setOpenModal(modalState)
    }, [modalState])
    useEffect(() => {
        changeOverflow(openModal)
    }, [openModal])
    return (
        <div className={styles.prods_el} onClick={() => setOpenModal(true)}>
            <img src="/images/prod.png" alt="" />
            <h5>Beef with Salsa</h5>
            <div>
                <span>$20.59</span>
                <button><PlusIcon /></button>
            </div>
        </div>

    )
}
