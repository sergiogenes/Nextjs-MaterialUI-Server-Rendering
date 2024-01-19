import { Metadata } from 'next'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { indigo } from '@mui/material/colors'

import Image from 'next/image'
import zurichLogo from '../../../public/zurich-logo-white.svg'

export const metadata: Metadata = {
  title: 'Zurich | Login',
  description: 'Aplicación para consultas de información ex RightNow',
}

const LoginPage = () => {
  const paperStyle = {
    padding: '30px',
    height: '70vh',
    width: 400,
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }

  return (
    <Box
      component='form'
      sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <Paper
        elevation={5}
        style={paperStyle}
      >
        <Grid
          sx={{
            backgroundColor: indigo[900],
            height: '30%',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
        >
          <Image
            src={zurichLogo}
            alt='Logo de Zurich'
            height={50}
            width={193}
          />
        </Grid>
        <Grid
          sx={{ padding: '80px 20px', display: 'flex', gap: '20px' }}
          container
          spacing={2}
        >
          <Typography
            variant='body1'
            fontWeight={500}
            color='primary'
            component='p'
            sx={{ paddingBottom: '30px' }}
          >
            Inicie sesión para continuar.
          </Typography>

          <TextField
            label='Usuario'
            placeholder='Ingrese el usuario'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant='outlined'
            fullWidth
            required
          />
          <TextField
            label='Contraseña'
            placeholder='Ingrese la contraseña'
            type='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
            variant='outlined'
            fullWidth
            required
          />

          <Button
            type='submit'
            color='primary'
            variant='contained'
            style={btnstyle}
            fullWidth
          >
            Login
          </Button>
        </Grid>
      </Paper>
    </Box>
  )
}

export default LoginPage
