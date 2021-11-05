import express from 'express'
import cheerio from 'cheerio'
import axios from 'axios'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 7373

app.use(cors())

const articles = []

const newspapers = [
  { name: 'times', address: 'https://www.thetimes.co.uk/environment/', base: '' },
  {
    name: 'guardian',
    address: 'https://www.theguardian.com/environment/climate-crisis',
    base: '',
  },
  {
    name: 'telegraph',
    address: 'https://www.telegraph.co.uk/climate-change',
    base: 'https://www.telegraph.co.uk',
  },
  {
    name: 'homenews',
    address: 'https://www.climatechangenews.com/',
    base: '',
  },
  {
    name: 'bbc',
    address: 'https://www.bbc.com/news/science-environment-56837908',
    base: 'https://www.bbc.com',
  },
]
// const newspapers = new Set(newspapersFull)
newspapers.forEach((newspaper) => {
  axios
    .get(newspaper.address)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)

      $('a:contains("climate")', html).each(function () {
        const title = $(this).text()
        const url = $(this).attr('href')

        articles.push({
          title,
          url: newspaper.base + url,
          source: newspaper.name,
        })
      })
    })
    .catch((e) => console.log('Loading articles: ', e))
})

app.get('/', (req, res) => {
  res.json('It is working')
})

app.get('/news', (req, res) => {
  res.json(articles)
})

app.get('/news/:newspaperId', (req, res) => {
  const {
    params: { newspaperId },
  } = req

  //prettier-ignore
  newspapers.map(elem => console.log('elem: ', elem))
  const newspaperAddress = newspapers.filter((newspaper) => newspaper.name === newspaperId)[0]
    .address
  const newspaperBase = newspapers.filter((newspaper) => newspaper.name === newspaperId)[0].base

  axios
    .get(newspaperAddress)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const specificArticles = []

      $('a:contains("climate")', html).each(function () {
        const title = $(this).text()
        const url = $(this).attr('href')

        specificArticles.push({
          title,
          url: newspaperBase + url,
          source: newspaperId,
        })
      })
      res.json(specificArticles)
    })
    .catch((e) => console.log('Loading articles: ', e))
})

app.listen(PORT, () => console.log(`Listeting PORT: ${PORT}`))
