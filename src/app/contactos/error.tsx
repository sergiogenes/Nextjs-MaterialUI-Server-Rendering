'use client'

import { useEffect } from 'react'

import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    //console.log(error)
  }, [error])

  const handleReset = () => {
    reset()
    redirect('/contactos')
  }

  return (
    <Box component='main'>
      <Typography
        variant='h2'
        align='center'
      >
        Lo sentimos, algo he salido mal.
      </Typography>

      <Link
        href='/'
        onClick={handleReset}
      >
        Regresar
      </Link>
    </Box>
  )
}
