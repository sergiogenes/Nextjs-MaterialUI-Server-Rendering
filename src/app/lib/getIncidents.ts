'use server'
import { unstable_noStore as noStore } from 'next/cache'
import { db } from '@/db'
import { IIncidente, Incidente, IIncidenteApp } from '@/models/'
import { QueryOptions } from 'mongoose'

interface IQueryIncidents {
  Nro_de_referencia: QueryOptions
  ID_de_producto: QueryOptions
  Poliza_Incidente: QueryOptions
  Estado: QueryOptions
  Productor: QueryOptions
}

export async function getIncidentes(query: IQueryIncidents) {
  noStore()
  await db.connectDB()
  const { Poliza_Incidente, Productor, ...queryIncidente } = query

  const incidentes: IIncidente[] = await Incidente.find(queryIncidente).limit(10).exec()
  await db.disconectDB()

  return incidentes
}

export async function getIncidentById<T extends IIncidenteApp>(
  id: string
): Promise<T | null | undefined> {
  try {
    noStore()
    await db.connectDB()
    const incidente = await Incidente.findOne({ _id: id })
      .populate('Contacto')
      .populate('Notas_Privadas')
      .populate('Respuestas')
      .populate('Tareas')
      .populate('Log_Actividad')
      .populate('Archivos')
      .populate('Poliza_Incidente')
      .lean()
      .exec()
    if (incidente) return incidente as T
  } catch (error) {
    console.error('Error fetching incident', error)
    throw error // Re-throw the error so it can be handled upstream
  } finally {
    await db.disconectDB()
  }
}
