'use client'
import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { indigo } from '@mui/material/colors'
import { findContacs } from '@/app/lib/actions'

const SearchContact = () => {
  return (
    <Box
      component='form'
      mb={4}
      action={findContacs}
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
        />
        <TextField
          id='apellido'
          name='apellido'
          label='Apellido'
        />
        <TextField
          id='dni'
          name='dni'
          label='DNI / CUIT / CUIL'
          type='number'
        />
        <TextField
          id='id_cliente_ais'
          name='id_cliente_ais'
          label='ID Cliente AIS'
        />
        <TextField
          id='email'
          name='email'
          label='Email'
        />
        <TextField
          id='nro_de_poliza'
          name='nro_de_poliza'
          label='Nro de Poliza'
        />
        <TextField
          id='nro_de_siniestro'
          name='nro_de_siniestro'
          label='Nro de Siniestro'
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
