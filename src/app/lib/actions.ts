'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function findContacs(formData: FormData) {
  const nombre = formData.get('nombre')
  const apellido = formData.get('apellido')
  const dni = formData.get('dni')
  const id_cliente_ais = formData.get('id_cliente_ais')
  const email = formData.get('email')
  const nro_de_poliza = formData.get('nro_de_poliza')
  const nro_de_siniestro = formData.get('nro_de_siniestro')
  revalidatePath(
    `/contactos?nombre=${nombre}&apellido=${apellido}&dni=${dni}&id_cliente_ais=${id_cliente_ais}&email=${email}&nro_de_poliza=${nro_de_poliza}&nro_de_siniestro=${nro_de_siniestro}`
  )
  redirect(
    `/contactos?nombre=${nombre}&apellido=${apellido}&dni=${dni}&id_cliente_ais=${id_cliente_ais}&email=${email}&nro_de_poliza=${nro_de_poliza}&nro_de_siniestro=${nro_de_siniestro}`
  )
}

export async function findIncidents(formData: FormData) {
  const nro_incidente = formData.get('nro_incidente')
  const producto = formData.get('producto')
  const poliza = formData.get('poliza')
  const estado = formData.get('estado')
  const productor = formData.get('productor')
  revalidatePath(
    `/incidentes?nro_incidente=${nro_incidente}&producto=${producto}&poliza=${poliza}&estado=${estado}&productor=${productor}`
  )
  redirect(
    `/incidentes?nro_incidente=${nro_incidente}&producto=${producto}&poliza=${poliza}&estado=${estado}&productor=${productor}`
  )
}
