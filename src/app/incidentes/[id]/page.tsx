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
      <IncidentCard incidente={incidente} />
      <TabsIncidentes incidente={incidente} />
    </Box>
  )
}
