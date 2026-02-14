import { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import FacebookRounded from '@mui/icons-material/FacebookRounded'
import Language from '@mui/icons-material/Language'
import { Eye, EyeOff } from 'lucide-react'
import { auth, googleProvider } from '../firebase/firebase'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [authError, setAuthError] = useState('')

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '9999px',
      '& input': {
        padding: '16px 18px',
        fontSize: 14,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e5e7eb',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#a7f3d0',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#86efac',
    },
  }

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
    if (authError) {
      setAuthError('')
    }
  }

  const validate = () => {
    const nextErrors = { email: '', password: '' }
    if (!values.email || !EMAIL_REGEX.test(values.email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!values.password || values.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(nextErrors)
    return !nextErrors.email && !nextErrors.password
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) {
      return
    }
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (result) => {
        const accessToken = await result.user.getIdToken()
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken)
        }
        navigate('/token', { state: { accessToken } })
      })
      .catch(() => {
        setAuthError('Login failed. Check your email and password.')
      })
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken || (await result.user.getIdToken())
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
      }
      navigate('/token', { state: { accessToken } })
    } catch (error) {
      console.error('Google login failed', error)
    }
  }

  return (
    <Box sx={{ width: '100%', height: '100%',borderRadius: '40px', borderColor: '#e5e7eb', borderWidth: 1, borderStyle: 'solid', maxWidth: 420, px: { xs: 2, lg: 6 } }}>
      <Box sx={{ mb: 5, textAlign: { xs: 'center', lg: 'left' } }}>
        <Typography sx={{ mb: 2, fontSize: 34, fontWeight: 700, color: '#111827' }}>
          Welcome back!
        </Typography>
        <Typography sx={{ fontSize: 13, color: '#6b7280' }}>
          Simplify your workflow and boost your productivity with
          <Box component="span" sx={{ fontWeight: 600, color: '#111827' }}>
            {' '}
            Tuga's App
          </Box>
          . Get started for free.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2.5}>
             <TextField
            fullWidth
            type="string"
            placeholder="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange('name')}
            error={Boolean(errors.name)}
            helperText={errors.name}
            sx={textFieldSx}
          />
          <TextField
            fullWidth
            type="email"
            placeholder="Email"
            variant="outlined"
            value={values.email}
            onChange={handleChange('email')}
            error={Boolean(errors.email)}
            helperText={errors.email}
            sx={textFieldSx}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            variant="outlined"
            value={values.password}
            onChange={handleChange('password')}
            error={Boolean(errors.password)}
            helperText={errors.password}
            sx={textFieldSx}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            variant="outlined"
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            sx={textFieldSx}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              ),
            }}
          />

          

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              borderRadius: '9999px',
              py: 1.6,
              fontWeight: 700,
              textTransform: 'none',
              bgcolor: '#000000',
              '&:hover': { bgcolor: '#1f2937' },
            }}
          >
            Sign Up
          </Button>
          {authError ? (
            <Typography sx={{ fontSize: 12, color: '#dc2626', textAlign: 'center' }}>
              {authError}
            </Typography>
          ) : null}
        </Stack>
      </Box>

      <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 4 }}>
        <Divider sx={{ flex: 1 }} />
        <Typography sx={{ fontSize: 11, color: '#9ca3af' }}>or continue with</Typography>
        <Divider sx={{ flex: 1 }} />
      </Stack>

     
        
      

      <Typography sx={{ mt: 4, textAlign: 'center', fontSize: 12, color: '#6b7280' }}>
        Not a member?{' '}
        <Link href="/login"  underline="hover" sx={{ fontWeight: 700, color: '#16a34a' }}>
          Login
        </Link>
      </Typography>

     
    </Box>
  )
}