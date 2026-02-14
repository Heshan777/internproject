import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
} from '@mui/material'

export default function FeaturePanel() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: 620,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '40px',
        bgcolor: '#f5f9f5',
        p: 6,
      }}
    >
      {/* Main Illustration Area */}
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 340 }}>
        {/* The Meditation Illustration */}
        <Box
          component="img"
          src="undraw_multitasking_i2bv.svg"
          alt="Illustration"
          sx={{ width: '100%', display: 'block' }}
        />

        {/* Floating Canva Card */}
        <Card
          elevation={0}
          sx={{
            position: 'absolute',
            left: -40,
            bottom: 64,
            width: 180,
            borderRadius: '24px',
            border: '1px solid #f3f4f6',
            boxShadow: '0 18px 32px rgba(0,0,0,0.08)',
          }}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>
              Canva Design
            </Typography>
            <Typography sx={{ fontSize: 10, color: '#9ca3af' }}>10 Task</Typography>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Chip
                label="Design"
                size="small"
                variant="outlined"
                sx={{
                  fontSize: 10,
                  height: 22,
                  color: '#6b7280',
                  borderColor: '#f3f4f6',
                  bgcolor: '#f9fafb',
                }}
              />
              <Box sx={{ position: 'relative', height: 32, width: 32 }}>
                <CircularProgress
                  size={32}
                  thickness={5}
                  value={84}
                  variant="determinate"
                  sx={{ color: '#22c55e' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    fontWeight: 700,
                  }}
                >
                  84%
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Text & Pagination */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Box sx={{ height: 6, width: 6, borderRadius: '9999px', bgcolor: '#e5e7eb' }} />
          <Box sx={{ height: 6, width: 24, borderRadius: '9999px', bgcolor: '#111827' }} />
          <Box sx={{ height: 6, width: 6, borderRadius: '9999px', bgcolor: '#e5e7eb' }} />
        </Box>
        <Typography sx={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: '#111827' }}>
          Make your work easier and organized
          <br />
          with{' '}
          <Box component="span" sx={{ color: '#111827' }}>
            Tuga's App
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}