
import styles from '../components.style/page.module.scss'

import React from 'react'

const SquareProductItem = ({img, title, code, size, desc, type }) => {
  return (
    <div className={styles.SproductItem}>
      <div className={styles.SimgCont}>
        <img  src={`/تصاویر/${img}`} alt="" />
      </div>

      <div className={styles.Sdetail}>
        <h2>{title}</h2>
        <p>کد محصول: {code}</p>
        {size && (
          <p>ابعاد محصول: {size}</p>
        )}
        {type && (
          <p>نوع محصول: <span>{type}</span></p>
        )}
        {desc && (
          <p>توضیحات محصول: <span>{desc}</span></p>
        )}
      </div>
    </div>
  )
}

export default SquareProductItem
