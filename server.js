const puppeteer = require('puppeteer')
const randomUseragent = require('random-useragent')
const fs = require('fs')
require('dotenv').config()

saveQuotes = (data) => {

  let quote = []

  data.map(value => {
    quote.push(value)
  })

  fs.writeFile(process.env.JSON_FILE, JSON.stringify(quote), (err) => {
    if (err) return console.error(err)
  })
}

const init = async () => {
  const header = randomUseragent.getRandom()

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })

  const page = await browser.newPage()
  await page.setUserAgent(header)
  await page.setViewport({width: 1920, height: 1080})
  await page.goto(process.env.SCRAP_URL)

  await page.waitForSelector(process.env.SCRAP_CONTAINER)

  const dataToScrape = await page.$$(process.env.SCRAP_DATA)

  let quotes = []

  for (const content of dataToScrape) {
    // const imagen = await content.$('img')
    // const getImagen = await page.evaluate(imagen => imagen.getAttribute('src'), imagen) 

    const currency = await content.$(process.env.SCRAP_CURRENCY)
    const getCurrency = await page.evaluate(currency => currency.innerText, currency)

    const buy = await content.$(process.env.SCRAP_CURRENCY_BUY)
    const getBuyPrice = await page.evaluate(buy => buy.innerText, buy)

    const sell = await content.$(process.env.SCRAP_CURRENCY_SELL)
    const getSellPrice = await page.evaluate(sell => sell.innerText, sell)

    quotes.push({
      currency: getCurrency,
      buy: getBuyPrice,
      sell: getSellPrice
    })

  }

  saveQuotes(quotes);

  await browser.close()
}

init()