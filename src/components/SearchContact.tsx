'use client'
import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { indigo } from '@mui/material/colors'
import { findContacs } from '@/app/lib/actions'

import { useSearchParams } from 'next/navigation'

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
  displayForm?: string
}

const SearchContact = () => {
  const searchParams = useSearchParams()

  const codedParams = searchParams.get('params') || ''
  const decodedParams = atob(codedParams)

  const params: UndecodedParams = Object.fromEntries(new URLSearchParams(decodedParams))

  const nombre = params?.nombre || ''
  const apellido = params?.apellido || ''
  const dni = params?.dni || ''
  const id_cliente_ais = params?.id_cliente_ais || ''
  const email = params?.email || ''
  const nro_de_poliza = params?.nro_de_poliza || ''
  const nro_de_siniestro = params?.nro_de_siniestro || ''
  const displayForm = params?.displayForm || 'blox'

  return (
    <Box
      component='form'
      mb={4}
      action={findContacs}
      display={displayForm}
    >
      <Box
        width='90vw'
        display='grid'
        gridTemplateColumns='1fr 1fr 1fr 1fr'
        gap={2}
      >
        <TextField
          id='nombre'
          name='nombre'
          label='Nombre'
          defaultValue={nombre}
        />
        <TextField
          id='apellido'
          name='apellido'
          label='Apellido'
          defaultValue={apellido}
        />
        <TextField
          id='dni'
          name='dni'
          label='DNI / CUIT / CUIL'
          type='number'
          defaultValue={dni ? Number(dni) : ''}
        />
        <TextField
          id='id_cliente_ais'
          name='id_cliente_ais'
          label='ID Cliente AIS'
          defaultValue={id_cliente_ais}
        />
        <TextField
          id='email'
          name='email'
          label='Email'
          defaultValue={email}
        />
        <TextField
          id='nro_de_poliza'
          name='nro_de_poliza'
          label='Nro de Poliza'
          defaultValue={nro_de_poliza}
        />
        <TextField
          id='nro_de_siniestro'
          name='nro_de_siniestro'
          label='Nro de Siniestro'
          defaultValue={nro_de_siniestro}
        />
        <Button
          variant='outlined'
          size='large'
          type='submit'
          startIcon={<SearchIcon />}
          sx={{ backgroundColor: indigo[200] }}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  )
}

export default SearchContact
