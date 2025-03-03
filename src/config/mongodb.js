/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONDODB_URI = 'mongodb+srv://mavoiem:248lseDE6x0oOYnW@cluster0.zzjcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'cap2-stock'

import { MongoClient, ServerApiVersion } from "mongodb"

let stockDatabaseInstance = null

const clientInstance = new MongoClient(MONDODB_URI, {
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
    stockDatabaseInstance = clientInstance.db(DATABASE_NAME)
}


// khi ket noi xong thi lay ham nay dung o nhung noi khac
export const GET_DB = () => {
    if(!stockDatabaseInstance) throw new Error('Connect first!')
    return stockDatabaseInstance
}