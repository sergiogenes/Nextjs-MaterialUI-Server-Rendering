import { getContactById } from '@/app/lib/getContacts'
import ClientDataGrid from '@/components/DataGridWithLink'
import UserCard from '@/components/UserCard'

import { Box, Typography, Divider } from '@mui/material'

interface Props {
  params: {
    id: string
  }
}

export default async function ContactByIdPage({ params }: Props) {
  console.log(params)
  const contacto = await getContactById(params)
  if (!contacto) {
    throw new Error('En contacto no existe')
  }

  const incidentesDelContacto = contacto?.Incidentes.map((incidente) => {
    const {
      Contacto,
      Notas_Privadas,
      Respuestas,
      Tareas,
      Log_Actividad,
      Archivos,
      Poliza_Incidente,
      ...incidenteSinPopular
    } = incidente
    return incidenteSinPopular
  })

  console.log('Incidentes del contacto', incidentesDelContacto)
  const columns = [
    {
      field: 'Nro_de_referencia',
      headerName: 'Nro_de_referencia',
      minWidth: 150,
      maxWidth: 300,
      width: 150,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Actualizado_por',
      headerName: 'Actualizado_por',
      minWidth: 180,
      flex: 1.4,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Asunto',
      headerName: 'Asunto',
      minWidth: 400,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Buzon_de_correo',
      headerName: 'Buzon_de_correo',
      minWidth: 280,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Cola',
      headerName: 'Cola',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Creado_por_cuenta',
      headerName: 'Creado_por_cuenta',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Modo_de_Contacto',
      headerName: 'Modo_de_Contacto',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Usuario_Intra',
      headerName: 'Usuario_Intra',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Tipo_de_Incidente',
      headerName: 'Tipo_de_Incidente',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Tipo_de_estado',
      headerName: 'Tipo_de_estado',
      minWidth: 130,
      flex: 0.9,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Tipo_Cobro',
      headerName: 'Tipo_Cobro',
      minWidth: 130,
      flex: 0.6,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Siniestro',
      headerName: 'Siniestro',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Poliza',
      headerName: 'Poliza',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Nro_Cuenta',
      headerName: 'Nro_Cuenta',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_producto',
      headerName: 'ID_de_producto',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_incidente',
      headerName: 'ID_de_incidente',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_disposicion',
      headerName: 'ID_de_disposicion',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_categoria',
      headerName: 'ID_de_categoria',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Grupo',
      headerName: 'Grupo',
      minWidth: 90,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Fecha_Efecto',
      headerName: 'Fecha_Efecto',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Fecha_de_ultima_respuesta',
      headerName: 'Fecha_de_ultima_respuesta',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
    },
    {
      field: 'Fecha_de_cierre',
      headerName: 'Fecha_de_cierre',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 110,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Cuenta_asignada',
      headerName: 'Cuenta_asignada',
      minWidth: 130,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'ID_de_organizacion',
      headerName: 'ID_de_organizacion',
      minWidth: 130,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false,
    },
  ]
  return (
    <Box component='main'>
      <UserCard contacto={contacto} />
      <Divider />
      <Typography
        m={4}
        variant='h5'
      >
        Lista de incidentes del usuario
      </Typography>
      <ClientDataGrid
        columns={columns}
        rows={incidentesDelContacto || []}
        urlBase='/incidentes'
      />
    </Box>
  )
}
