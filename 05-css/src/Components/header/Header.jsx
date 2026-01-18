import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
      This is Header
      <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header