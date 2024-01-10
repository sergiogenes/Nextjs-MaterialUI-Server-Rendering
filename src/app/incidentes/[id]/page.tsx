import Image from 'next/image'
import { Box, Typography } from '@mui/material'

import { getIncidentById } from '@/app/lib/getIncidents'
import zurich_image from '../../../../public/zurich_imagen.jpeg'
import TabsIncidentes from '@/components/TabsIncidentes'
import IncidentCard from '@/components/IncidentCard'

interface Props {
  params: {
    id: string
  }
}

export default async function IncidentByIdPage({ params }: Props) {
  console.log(params)
  const id = params.id

  const incidente = await getIncidentById(id)
  if (!incidente) {
    throw new Error('El incidente no existe')
  }

  return (
    <Box component='section'>
      {/* <Box display='flex'>
        <Box>
          <Image
            src={zurich_image}
            alt='Imagen del logo de Zurich'
            width={259}
            height={195}
          />
        </Box>
        <Box flexGrow={2}>
          <Box bgcolor='#d1e5ff'>
            <Typography
              variant='h5'
              pl={2}
            >
              Información del Usuario
            </Typography>
          </Box>
          <Box>
            <Box
              display='grid'
              gridTemplateColumns='1fr 1fr 1fr'
            >
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Apellido:
                </Typography>
                <Typography variant='body1'>{incidente?.Contacto?.Apellido}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Tipo de Documento
                </Typography>
                <Typography>{incidente?.Contacto?.Tipo_Documento}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Productor
                </Typography>
                <Typography>Falta agregar</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Nombre:
                </Typography>
                <Typography>{incidente?.Contacto?.Nombre}</Typography>
              </Box>

              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Número de Documento
                </Typography>
                <Typography>{incidente?.Contacto?.DNI}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Póliza
                </Typography>
                <Typography>Falta agregar</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <IncidentCard incidente={incidente} />
      <TabsIncidentes />
    </Box>
  )
}
