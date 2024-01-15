import { Box, Typography } from '@mui/material'

import { getIncidentById } from '@/app/lib/getIncidents'

import TabsIncidentes from '@/components/TabsIncidentes'
import IncidentCard from '@/components/IncidentCard'
import { Suspense } from 'react'
import TableSkeleton from '@/components/TableSkeleton'

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
