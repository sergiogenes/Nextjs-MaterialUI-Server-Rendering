'use server'
import { unstable_noStore as noStore } from 'next/cache'
import { db } from '@/db'
import { IIncidente, Incidente } from '@/models/'

export async function getIncidentes() {
  noStore()
  await db.connectDB()
  const incidentes: IIncidente[] = await Incidente.find({})
    .limit(2)
    .populate('Contacto')
    .populate('Notas_Privadas')
    .populate('Respuestas')
    .populate('Tareas')
    .populate('Log_Actividad')
    .populate('Archivos')
    .populate('Poliza_Incidente')
    .exec()
  await db.disconectDB()
  return incidentes
}
