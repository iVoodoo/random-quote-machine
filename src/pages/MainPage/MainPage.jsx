import { useCallback, useEffect, useState } from 'react'

import { Button } from '@components/Button'
import { Error } from '@components/Error'
import { Quote } from '@components/Quote'
import { Layout } from '@layout'
import { getQuote } from '@utils/api/getQuote'

import styles from './MainPage.module.scss'

export const MainPage = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchQuote = useCallback(() => {
    setLoading(true)
    setError('')
    getQuote()
      .then((data) => {
        setQuote(data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Не удалось загрузить цитату')
        console.error(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchQuote()
  }, [fetchQuote])

  return (
    <Layout>
      <section className={styles.page}>
        <Button title='Новая цитата' onClick={fetchQuote} />
        {loading && <span>Загружаем новую цитату</span>}
        {error && <Error text={error} />}
        {!loading && !error && (
          <div className={styles.page__quote}>
            <Quote quote={quote.quoteText} author={quote.quoteAuthor} />
          </div>
        )}
      </section>
    </Layout>
  )
}
