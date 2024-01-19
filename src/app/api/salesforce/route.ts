import { redirect } from 'next/navigation'
import { Contacto, IContacto } from '@/models'

export async function POST(request: Request) {
  const formData = await request.formData()
  const usuario = formData.get('Usuario')
  const clave = formData.get('Clave')
  const tipoDoc = formData.get('Tipodoc')
  const numDoc = formData.get('NumDoc')
  const numeroPoliza = formData.get('NumeroPoliza')
  const itemPoliza = formData.get('ItemPoliza')
  const sucursal = formData.get('Sucursal')
  const fecha = formData.get('Fecha')
  const hora = formData.get('Hora')

  if (usuario !== 'Sergio' || clave !== 'MiClave')
    return new Response('Acceso denegado', { status: 401 })

  const url = new URL(request.url)
  const baseUrl = url.origin

  const contactos = await Contacto.find({ Tipo_Documento: tipoDoc, DNI: numDoc })
  if (contactos.length === 1) redirect(`${baseUrl}/contactos/${contactos[0].id}`)

  const params = `nombre=&apellido=&dni=${numDoc}&id_cliente_ais=&email=&nro_de_poliza=${numeroPoliza}&nro_de_siniestro=&displayForm=none`
  const encodedParams = btoa(params)
  redirect(`${baseUrl}/contactos?params=${encodedParams}`)
}
