'use server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'

export async function findContacs(formData: FormData) {
  noStore()
  const nombre = String(formData.get('nombre')).trim()
  const apellido = String(formData.get('apellido')).trim()
  const dni = String(formData.get('dni')).trim()
  const id_cliente_ais = String(formData.get('id_cliente_ais')).trim()
  const email = String(formData.get('email')).trim()
  const nro_de_poliza = String(formData.get('nro_de_poliza')).trim()
  const nro_de_siniestro = String(formData.get('nro_de_siniestro')).trim()
  const encodedParams = btoa(
    `nombre=${nombre}&apellido=${apellido}&dni=${dni}&id_cliente_ais=${id_cliente_ais}&email=${email}&nro_de_poliza=${nro_de_poliza}&nro_de_siniestro=${nro_de_siniestro}`
  )

  revalidatePath(`/contactos`)
  redirect(`/contactos?params=${encodedParams}`)
}

export async function findIncidents(formData: FormData) {
  const nro_incidente = String(formData.get('nro_incidente')).trim()
  const producto = String(formData.get('producto')).trim()
  const poliza = String(formData.get('poliza')).trim()
  const estado = String(formData.get('estado')).trim()
  const productor = String(formData.get('productor')).trim()
  const encodedParams = btoa(
    `nro_incidente=${nro_incidente}&producto=${producto}&poliza=${poliza}&estado=${estado}&productor=${productor}`
  )

  revalidatePath(`/incidentes`)
  redirect(`/incidentes?params=${encodedParams}`)
}
