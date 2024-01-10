'use client'
import { FC, Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Divider, Typography } from '@mui/material'
import zurich_image from '../../public/zurich_imagen.jpeg'
import { IContactoApp } from '@/models'

interface Props {
  contacto: IContactoApp
}

const UserCard: FC<Props> = ({ contacto }: Props) => {
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
                <Typography variant='body1'>{contacto?.Apellido}</Typography>
              </Box>
              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Tipo de Documento
                </Typography>
                <Typography>{contacto?.Tipo_Documento}</Typography>
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
                <Typography>{contacto?.Nombre}</Typography>
              </Box>

              <Box pt={2}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                >
                  Número de Documento
                </Typography>
                <Typography>{contacto?.DNI}</Typography>
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
            Información adicional del Usuario
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
                Calle:
              </Typography>
              <Typography variant='body2'>{contacto?.Calle}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Nro de Domicilio
              </Typography>
              <Typography variant='body2'>{contacto?.Numero_de_domicilio}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Piso:
              </Typography>
              <Typography variant='body2'>{contacto?.Piso}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Departamento:
              </Typography>
              <Typography variant='body2'>{contacto?.Departamento}</Typography>
            </Box>

            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Localidad:
              </Typography>
              <Typography variant='body2'>{contacto?.Localidad}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Provincia:
              </Typography>
              <Typography variant='body2'>Falta agregar</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Telefono particular:
              </Typography>
              <Typography variant='body2'>{contacto?.Telefono_particular}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Código postal:
              </Typography>
              <Typography variant='body2'>{contacto?.Codigo_Postal}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Correo electrónico:
              </Typography>
              <Typography variant='body2'>{contacto?.Direccion_de_correo_electronico}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Conflictivo:
              </Typography>
              <Typography variant='body2'>{contacto?.Conflictivo}</Typography>
            </Box>
            <Box pt={2}>
              <Typography
                variant='body1'
                fontWeight='bold'
              >
                Acepta envío de información:
              </Typography>
              <Typography variant='body2'>{contacto?.Acepta_Envio_Informacion}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default UserCard
