import styles from '@/app/page.module.css'
import ContactTable from '@/components/ContactTable'
import SearchContact from '@/components/SearchContact'
import { Divider, Typography } from '@mui/material'

export default async function ContactoPage({
  searchParams,
}: {
  searchParams?: {
    nombre?: string
    apellido?: string
    dni?: string
    id_cliente_ais?: string
    email?: string
    nro_de_poliza?: string
    nro_de_siniestro?: string
    page?: string
  }
}) {
  return (
    <main className={styles.main}>
      <SearchContact />
      <Divider />
      <Typography
        m={4}
        variant='h5'
      >
        Lista de Contactos
      </Typography>
      <ContactTable searchParams={searchParams} />
    </main>
  )
}
