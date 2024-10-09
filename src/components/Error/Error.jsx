import styles from './Error.module.scss'

export const Error = (prop) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.error__header}>Ошибка</h2>
      <p className={styles.error__text}>{prop.text}</p>
    </div>
  )
}
