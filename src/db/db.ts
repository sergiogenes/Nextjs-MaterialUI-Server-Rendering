// mongodb conection
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
console.log('URI', process.env.MONGODB_URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/zurichdb'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
}

export const connectDB = async () => {
  if (mongoConnection.isConnected) {
    console.log('Ya estabamos conectados')
    return
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState

    if (mongoConnection.isConnected === 1) {
      console.log('Usando conexión anterior')
      return
    }

    await mongoose.disconnect()
  }

  await mongoose.connect(MONGODB_URI)
  mongoConnection.isConnected = 1
  console.log('Conectado a Base de Datos!')
}

export const disconectDB = async () => {
  if (process.env.NODE_ENV === 'development') return

  if (mongoConnection.isConnected === 0) return

  await mongoose.disconnect()
  mongoConnection.isConnected = 0

  console.log('Desconectado de MongoDB')
}
