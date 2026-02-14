import { Box } from '@mui/material'
import FeaturePanel from '../components/Feature_Panel'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        bgcolor: '#ffffff',
        px: { xs: 2, lg: 3 },
        py: { xs: 3, lg: 3 },
        gap: { xs: 0, lg: 3 },
      }}
    >
      <Box
        component="main"
        sx={{
          flex: { xs: '1 1 100%', lg: '1 1 50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RegisterForm />
      </Box>

      <Box
        component="aside"
        sx={{
          flex: '1 1 50%',
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FeaturePanel />
      </Box>
    </Box>
  )
}
