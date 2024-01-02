'use client'
import { Button } from '@mui/material'

const ClientButton = () => {
  const onClick = () => console.log('click')
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={onClick}
    >
      Hello World
    </Button>
  )
}

export default ClientButton
