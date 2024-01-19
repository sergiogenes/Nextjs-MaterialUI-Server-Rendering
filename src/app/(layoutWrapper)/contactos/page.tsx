import styles from '@/app/(layoutWrapper)/page.module.css'
import ContactTable from '@/components/ContactTable'
import SearchContact from '@/components/SearchContact'
import { Divider, Typography } from '@mui/material'

export default async function ContactoPage({
  searchParams,
}: {
  searchParams?: {
    params?: string
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
