'use client'
import { FC } from 'react'
import Image from 'next/image'
import { Box, Divider, Typography } from '@mui/material'
import zurich_image from '../../public/zurich_imagen.jpeg'
import { IIncidenteApp } from '@/models'

interface Props {
  incidente: IIncidenteApp
}

const IncidentCard: FC<Props> = ({ incidente }: Props) => {
  return (
    <Box width='90vw'>
      <Box display='flex'>
        <Box>
          <Image
            src={zurich_image}
            alt='Imagen del logo de Zurich'
            width={259}
            height={195}
            priority
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
                <Typography variant='body1'>{incidente.Contacto?.Apellido}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Tipo de Documento
                </Typography>
                <Typography>{incidente.Contacto?.Tipo_Documento}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Productor:
                </Typography>
                <Typography>{incidente?.Poliza_Incidente?.Productor}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Nombre:
                </Typography>
                <Typography>{incidente.Contacto?.Nombre}</Typography>
              </Box>

              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Número de Documento
                </Typography>
                <Typography>{incidente.Contacto?.DNI}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Póliza
                </Typography>
                <Typography>{incidente?.Poliza_Incidente?.Poliza}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display='flex'>
        <Box
          bgcolor='#d1e5ff'
          flexGrow={2}
        >
          <Typography
            variant='h6'
            pl={2}
          >
            Información del Incidente
          </Typography>
        </Box>
      </Box>
      <Box mb={4}>
        <Box pl={4}>
          <Box
            display='grid'
            gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
          >
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Nro de incidente:
              </Typography>
              <Typography variant='body2'>{incidente?.Nro_de_referencia}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Asunto:
              </Typography>
              <Typography variant='body2'>{incidente?.Asunto}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Modo contacto:
              </Typography>
              <Typography variant='body2'>{incidente?.Modo_de_Contacto}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Producto:
              </Typography>
              <Typography variant='body2'>{incidente?.ID_de_producto}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Motivo:
              </Typography>
              <Typography variant='body2'>{incidente?.ID_de_categoria}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Fecha efecto:
              </Typography>
              <Typography variant='body2'>{incidente?.Fecha_Efecto}</Typography>
            </Box>

            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Tipo de Cobro:
              </Typography>
              <Typography variant='body2'>{incidente?.Tipo_Cobro}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                CBU / Nro tarjeta:
              </Typography>
              <Typography variant='body2'>{incidente?.Nro_Cuenta}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Estado:
              </Typography>
              <Typography variant='body2'>{incidente.Estado}</Typography>
            </Box>

            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Sector responsoble:
              </Typography>
              <Typography variant='body2'>{incidente?.Grupo}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Disposición:
              </Typography>
              <Typography variant='body2'>{incidente?.ID_de_disposicion}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default IncidentCard
