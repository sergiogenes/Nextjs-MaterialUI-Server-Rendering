import { IColumn } from '@/components/old_InicidentsTable'
import { IIncidente } from '../../models/Incidente'
import { init } from 'next/dist/compiled/webpack/webpack'

export function createHeaderIncidents(incidente: IIncidente) {
  const headers: IColumn[] = []
  const keys = Object.keys(incidente)
  console.log('keys', keys)
  for (const key of keys) {
    if (
      key !== '_id' &&
      key !== 'id' &&
      key !== '__v' &&
      key !== 'Notas_Privadas' &&
      key !== 'Respuestas' &&
      key !== 'Tareas' &&
      key !== 'Log_Actividad' &&
      key !== 'Archivos' &&
      key !== 'Poliza_Incidente' &&
      key !== 'Contacto'
    ) {
      const newHeader: IColumn = {
        text: key,
        align: 'left',
      }

      headers.push(newHeader)
    }
  }

  return headers.sort((a, b) => a.text.localeCompare(b.text))
}
