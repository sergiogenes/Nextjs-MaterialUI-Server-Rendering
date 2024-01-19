'use client'

import { Alert } from '@mui/material'

const MyAlert = ({ text }: { text: string }) => {
  return <Alert severity='warning'>{text}</Alert>
}

export default MyAlert
