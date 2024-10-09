import jsonp from 'jsonp'

export const getQuote = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru'
    jsonp(url, { param: 'jsonp' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
