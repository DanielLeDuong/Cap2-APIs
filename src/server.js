/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { mapOrder } from '~/utils/sorts.js'
import { CLOSE_DB, CONNECT_DB, GET_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import { env } from '~/config/environment'



const START_SERVER = () => {
  const app = express()
  
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  
  app.get('/', (req, res) => {
    
    res.end('<h1>Hello World!</h1><hr>')
  })
  
  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello ${env.AUTHOR}, I am running at ${ hostname }:${ port }/`)
  })

  exitHook((signal) => {
    CLOSE_DB()
  })

}

//()() la viet mot ham roi goi lai ham do luon
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