'use client'

import { Button } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './page.module.css'

const Page = () => {
  const session = useSession()
  return (
    <main className={styles.main}>
      {session?.data?.user ? (
        <Button onClick={() => signOut()} variant={'contained'} size={'large'}>
          Sign Out
        </Button>
      ) : (
        <Button onClick={() => signIn()} variant={'contained'} size={'large'}>
          Sign In
        </Button>
      )}
    </main>
  )
}

export default Page
