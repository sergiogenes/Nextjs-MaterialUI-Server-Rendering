import Box from '@mui/material/Box'
import DataGridWithLink from './DataGridWithLink'
import { getContacts } from '@/app/lib/getContacts'
import { IContacto } from '@/models'
import MyAlert from './MyAlert'

interface Props {
  searchParams?: {
    params?: string
  }
}

interface UndecodedParams {
  nombre?: string
  apellido?: string
  dni?: string
  id_cliente_ais?: string
  email?: string
  nro_de_poliza?: string
  nro_de_siniestro?: string
  page?: string
}

export default async function ContactTable({ searchParams }: Props) {
  const codedParams = searchParams?.params || ''
  const decodedParams = atob(codedParams)

  const params: UndecodedParams = Object.fromEntries(new URLSearchParams(decodedParams))

  const nombre = params?.nombre || ''
  const apellido = params?.apellido || ''
  const dni = params?.dni || ''
  const id_cliente_ais = params?.id_cliente_ais || ''
  const email = params?.email || ''
  const nro_de_poliza = params?.nro_de_poliza || ''
  const nro_de_siniestro = params?.nro_de_siniestro || ''

  let contactos: IContacto[] = []

  if (
    nombre !== '' ||
    apellido !== '' ||
    dni !== '' ||
    id_cliente_ais !== '' ||
    email !== '' ||
    nro_de_poliza !== '' ||
    nro_de_siniestro !== ''
  ) {
    const nombreRegex = new RegExp(nombre, 'i')
    const apellidoRegex = new RegExp(apellido, 'i')
    const dniRegex = new RegExp(dni, 'i')
    const idClienteAisRegex = new RegExp(id_cliente_ais, 'i')
    const emailRegex = new RegExp(email, 'i')
    const nroDePolizaRegex = new RegExp(nro_de_poliza, 'i')
    const nroDeSiniestroRegex = RegExp(nro_de_siniestro, 'i')
    contactos = await getContacts(
      {
        Nombre: { $regex: nombreRegex },
        Apellido: { $regex: apellidoRegex },
        DNI: { $regex: dniRegex },
        ID_en_AIS: { $regex: idClienteAisRegex },
        Direccion_de_correo_electronico: { $regex: emailRegex },
        Siniestro: { $regex: nroDeSiniestroRegex },
        Poliza: nro_de_poliza,
      },
      0
    )
  }

  const columns = [
    {
      field: 'Acepta_Envio_Informacion',
      headerName: 'Acepta_Envio_Informacion',
      minWidth: 170,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Apellido',
      headerName: 'Apellido',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Calle',
      headerName: 'Calle',
      minWidth: 230,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Codigo_Postal',
      headerName: 'Codigo_Postal',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Conexion',
      headerName: 'Conexion',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Conflictivo',
      headerName: 'Conflictivo',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Correo_electronico_no_valido',
      headerName: 'Correo_electronico_no_valido',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Correo_E_alternativo_1',
      headerName: 'Correo_E_alternativo_1',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Correo_E_alternativo_2',
      headerName: 'Correo_E_alternativo_2',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Departamento',
      headerName: 'Departamento',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Direccion_de_correo_electronico',
      headerName: 'Direccion_de_correo_electronico',
      minWidth: 280,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'DNI',
      headerName: 'DNI',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: true,
    },
    {
      field: 'Fecha_Alta',
      headerName: 'Fecha_Alta',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Fecha_Rechazo_Op',
      headerName: 'Fecha_Rechazo_Op',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'ID_de_usuario',
      headerName: 'ID_de_usuario',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'ID_en_AIS',
      headerName: 'ID_en_AIS',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
    },
    {
      field: 'Id_en_BI',
      headerName: 'Id_en_BI',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Localidad',
      headerName: 'Localidad',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Marca_ADS',
      headerName: 'Marca_ADS',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'No_Molestar',
      headerName: 'No_Molestar',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Nombre_completo',
      headerName: 'Nombre_completo',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Numero_de_domicilio',
      headerName: 'Numero_de_domicilio',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Pais',
      headerName: 'Pais',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Piso',
      headerName: 'Piso',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Poliza_Vida',
      headerName: 'Poliza_Vida',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Poliza_Vida_2',
      headerName: 'Poliza_Vida_2',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Poliza_Vida_3',
      headerName: 'Poliza_Vida_3',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Poliza_Vida_4',
      headerName: 'Poliza_Vida_4',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Provincia',
      headerName: 'Provincia',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_de_la_oficina_sin_formato',
      headerName: 'Telefono_de_la_oficina_sin_formato',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_de_oficina',
      headerName: 'Telefono_de_oficina',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_del_asistente',
      headerName: 'Telefono_del_asistente',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_del_asistente_sin_formato',
      headerName: 'Telefono_del_asistente_sin_formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_movil',
      headerName: 'Telefono_movil',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_movil_sin_formato',
      headerName: 'Telefono_movil_sin_formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_particular',
      headerName: 'Telefono_particular',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Telefono_particular_sin_formato',
      headerName: 'Telefono_particular_sin_formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Tipo_Documento',
      headerName: 'Tipo_Documento',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Vendedor',
      headerName: 'Vendedor',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {contactos.length < 100 ? (
        <DataGridWithLink
          columns={columns}
          rows={contactos}
          urlBase='/contactos'
        />
      ) : (
        <MyAlert text='La búsqueda devuelve demasiados contactos! Por intente refinar la búsqueda.' />
      )}
    </Box>
  )
}
