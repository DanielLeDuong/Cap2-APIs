/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { mapOrder } from '~/utils/sorts.js'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'





const START_SERVER = () => {
  const app = express()
  
  const hostname = 'localhost'
  const port = 8017
  
  app.get('/', (req, res) => {
    
    res.end('<h1>Hello World!</h1><hr>')
  })
  
  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello HUNG, I am running at ${ hostname }:${ port }/`)
  })

}

// ()() la viet mot ham roi goi lai ham do luon
(async () => {
  try {
    console.log('Connecting....')
    await CONNECT_DB()
    console.log('Connected')
    START_SERVER()
  } catch (error) {
    console.error(error),
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => console.log('Connecting....'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error),
//     process.exit(0)
//   })