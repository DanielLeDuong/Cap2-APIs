/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */



import { MongoClient, ServerApiVersion } from "mongodb"
import { env } from "~/config/environment"

let stockDatabaseInstance = null

const clientInstance = new MongoClient(env.MONDODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
//ket noi database
export const CONNECT_DB = async () => {
    await clientInstance.connect()

    //ket noi thanh cong thi lay database name
    stockDatabaseInstance = clientInstance.db(env.DATABASE_NAME)
}


// khi ket noi xong thi lay ham nay dung o nhung noi khac
export const GET_DB = () => {
    if(!stockDatabaseInstance) throw new Error('Connect first!')
    return stockDatabaseInstance
}

//dong ket noi
export const CLOSE_DB = async () => {
    await stockDatabaseInstance.close()
}