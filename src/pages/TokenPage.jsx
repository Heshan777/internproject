import { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export default function TokenPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const token = location.state?.accessToken || localStorage.getItem('accessToken')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && !token) {
        navigate('/', { replace: true })
      }
    })
    return () => unsubscribe()
  }, [navigate, token])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f9fafb',
        px: 3,
      }}
    >
      <Box sx={{ maxWidth: 760, width: '100%', textAlign: 'center' }}>
        <Typography sx={{ fontSize: 26, fontWeight: 700, mb: 2 }}>Access Token</Typography>
        <Typography sx={{ fontSize: 13, color: '#6b7280', mb: 3 }}>
          This page displays the token returned after Google sign-in.
        </Typography>
        <Box
          component="pre"
          sx={{
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            bgcolor: '#111827',
            color: '#f9fafb',
            p: 3,
            borderRadius: 3,
            fontSize: 12,
            minHeight: 120,
          }}
        >
          {token || 'No token found. Please sign in again.'}
        </Box>
        <Button
          sx={{ mt: 3, textTransform: 'none' }}
          variant="contained"
          onClick={() => navigate('/')}
        >
          Back to Login
        </Button>
      </Box>
    </Box>
  )
}
