import { Box, Button, Typography, Fade } from '@mui/material'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const HomeApp = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true) // activa animación al montar
  }, [])

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        background: 'linear-gradient(to right, #810f0f, #a71616, #d00202)',
        color: 'white',
        p: 4,
      }}
    >
      <Fade in={show} timeout={1000}>
        <Box>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Asignación inteligente de alumnos
          </Typography>

          <Typography variant="h6" sx={{ mb: 4 }}>
            Carga datos, selecciona criterios y organiza tus grupos automáticamente.
          </Typography>

          <Button
            component={Link}
            to="/asignacion"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#ffffff',
              color: '#ff0000',
              '&:hover': {
                bgcolor: '#ff0505',
                color: '#ffffff',
              },
            }}
          >
            Comenzar
          </Button>
        </Box>
      </Fade>
    </Box>
  )
}
