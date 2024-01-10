'use client'
import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { indigo } from '@mui/material/colors'
import { findIncidents } from '@/app/lib/actions'

const SearchIncident = () => {
  return (
    <Box
      component='form'
      mb={4}
      action={findIncidents}
    >
      <Box
        width='90vw'
        display='grid'
        gridTemplateColumns='1fr 1fr 1fr'
        gap={2}
      >
        <TextField
          id='nro_incidente'
          name='nro_incidente'
          label='Nro de Incidente'
        />
        <TextField
          id='producto'
          name='producto'
          label='Producto'
        />
        <TextField
          id='poliza'
          name='poliza'
          label='Nro de Póliza'
        />
        <TextField
          id='estado'
          name='estado'
          label='Estado'
        />
        <TextField
          id='productor'
          name='productor'
          label='Productor'
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

export default SearchIncident
