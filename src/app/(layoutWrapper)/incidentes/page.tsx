import styles from '@/app/(layoutWrapper)/page.module.css'

import SearchIncident from '@/components/SearchIncidents'
import { Divider, Typography } from '@mui/material'
import IncidentTable from '@/components/IncidentTable'

interface Props {
  searchParams?: {
    nro_incidente?: string
    producto?: string
    poliza?: string
    estado?: string
    productor?: string
  }
}

export default async function IncidentePage({ searchParams }: Props) {
  return (
    <main className={styles.main}>
      <SearchIncident />
      <Divider />
      <Typography
        m={4}
        variant='h5'
      >
        Lista de Incidentes
      </Typography>
      <IncidentTable searchParams={searchParams} />
    </main>
  )
}
