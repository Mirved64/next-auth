'use client'

import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'
import { InputAdornment, TextField, Button, FormControlLabel, Checkbox, Box } from '@mui/material'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

const SignInForm = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const res = await signIn('credentials', {
      username: username,
      password: password,
      callbackUrl: '/',
    })

    if (!res?.ok || !res.error) {
      console.log('OK')
    } else {
      console.log(res?.error)
    }
  }
  return (
    <Box
      component={'form'}
      sx={{
        flexBasis: '300px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        gap: '20px',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'start',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        type={'text'}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
        placeholder={'username'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        variant='standard'
        fullWidth
      />
      <TextField
        type={'password'}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        placeholder={'password'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant='standard'
        fullWidth
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label={'Keep me signed in'} />
      <Button
        variant='contained'
        type={'submit'}
        color={'primary'}
        fullWidth
        sx={{ borderRadius: '20px', height: '60px' }}
      >
        SIGN IN
      </Button>
    </Box>
  )
}

export { SignInForm }
