import styles from './Quote.module.scss'

export const Quote = (prop) => {
  return (
    <figure className={styles.quote}>
      <blockquote className={styles.quote__text}>
        <p>{prop.quote}</p>
      </blockquote>
      <figcaption className={styles.quote__author}>&copy; {prop.author ? prop.author : 'неизвестный автор'}</figcaption>
    </figure>
  )
}
