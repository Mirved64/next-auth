import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { SignInForm } from '@/components/sign-in-form'
const Page = () => (
  <Box
    sx={{
      width: '100%',
      minHeight: '100vh',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
    }}
  >
    <Box
      sx={{
        flexBasis: '600px',
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ChangeHistoryIcon color={'primary'} sx={{ width: '60px', height: '60px' }} />
      <Typography sx={{ color: 'rgba(33, 150, 243, 1)' }} variant={'h3'}>
        Sign In
      </Typography>
      <SignInForm />
      <Link href={'/'}>
        <Typography sx={{ color: 'rgb(128, 128, 128)' }} paragraph>
          Forgot Password?
        </Typography>
      </Link>
    </Box>
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Link href={'/'}>
        <Typography>Not a Member? Sign Up</Typography>
      </Link>
    </Box>
  </Box>
)

export default Page
