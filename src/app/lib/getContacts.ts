'use server'
import { unstable_noStore as noStore } from 'next/cache'
import { db } from '@/db'
import { Contacto, IContacto, IContactoApp } from '@/models/'

import { MongooseError, QueryOptions } from 'mongoose'

interface IQueryContacts {
  Nombre: QueryOptions
  Apellido: QueryOptions
  DNI: QueryOptions
  ID_en_AIS: QueryOptions
  Direccion_de_correo_electronico: QueryOptions
  Siniestro: QueryOptions
  Poliza: string
}

export async function getContacts(query: IQueryContacts, currentPage: number) {
  noStore()
  await db.connectDB()
  const { Siniestro, Poliza, ...queryContacto } = query

  let matchPoliza: { 'incidentes.Poliza'?: string } = {}
  if (Poliza !== '') {
    matchPoliza['incidentes.Poliza'] = Poliza
  }

  let matchSiniestro: { 'incidentes.Siniestro'?: QueryOptions } = {}
  if (Poliza !== '') {
    matchSiniestro['incidentes.Siniestro'] = Siniestro
  }

  let contactos: IContacto[] = await Contacto.aggregate([
    {
      $lookup: {
        from: 'incidentes', // nombre de la colección de Incidente
        localField: 'Incidentes', // campo en Contacto
        foreignField: '_id', // campo en Incidente
        as: 'incidentes', // nombre temporal para los incidentes encontrados
      },
    },
    {
      $match: matchPoliza,
    },
    {
      $match: matchSiniestro,
    },
    {
      $match: queryContacto, // agrega la consulta de Contacto
    },
  ])
    .then((contactos: IContacto[]) => {
      return contactos
    })
    .catch((error: MongooseError) => {
      console.log(error)
      return []
    })
  await db.disconectDB()
  return contactos
}

export async function getContactById<T extends IContactoApp>({
  id,
}: {
  id: string
}): Promise<T | null | undefined> {
  noStore()
  await db.connectDB()
  const contacto = await Contacto.findById(id)
    .populate('Incidentes')
    .lean()
    .then((contacto) => contacto)
    .catch((error) => {
      console.error('error', error)
    })
    .finally(async () => {
      await db.disconectDB()
    })
  return contacto as T
}
