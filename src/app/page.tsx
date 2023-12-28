'use client'
import styles from './page.module.css'
import { Button } from '@mui/material'

export default function Home() {
  const onClick = () => console.log('click')

  return (
    <main className={styles.main}>
      <Button
        variant='contained'
        color='primary'
        onClick={onClick}
      >
        Hello World
      </Button>
    </main>
  )
}
