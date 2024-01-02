import styles from './page.module.css'

import { getIncidentes } from './lib/getIncidents'
import ClientButton from '@/components/ClientButton'
import NavBar from '@/components/NavBar'

export default async function Home() {
  const incidentes = await getIncidentes()
  console.log(incidentes)
  return (
    <main className={styles.main}>
      <NavBar />
      <ClientButton />
    </main>
  )
}
