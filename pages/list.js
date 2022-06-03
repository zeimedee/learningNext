import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const List = () => {
    const [count, setCount]  = useState(0)

    const handleClick  = () => {
        setCount(count + 1)
    }
    return (
        <div>
        <Head className={styles.container}>
        <title>Next list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
         </Head>

           <p className={styles.title}>{ count }</p>     
           <button className={styles.card} onClick={handleClick}>
               up
           </button>
        </div>
    )
}


export default List