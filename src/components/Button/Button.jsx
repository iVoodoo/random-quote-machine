import { memo } from 'react'

import styles from './Button.module.scss'

export const ButtonComponent = (prop) => {
  return (
    <button type='button' onClick={() => prop.onClick()} className={styles.button}>
      {prop.title}
    </button>
  )
}

export const Button = memo(ButtonComponent)
