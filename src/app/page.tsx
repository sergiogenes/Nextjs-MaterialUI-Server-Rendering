import styles from './page.module.css'

import ClientButton from '@/components/ClientButton'

export default async function Home() {
  return (
    <main className={styles.main}>
      <ClientButton />
    </main>
  )
}
