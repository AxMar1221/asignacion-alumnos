import React from 'react'
import { Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

export const CriteriosAsignacionApp = ({ criterios, setCriterios }) => {
  return (
 <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Criterios para Asignación Manual</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="grupo-label">Grupo</InputLabel>
            <Select
              labelId="grupo-label"
              value={criterios.grupo}
              label="Grupo"
              onChange={(e) => setCriterios({ ...criterios, grupo: e.target.value })}
            >
              <MenuItem value="5A">5A</MenuItem>
              <MenuItem value="5B">5B</MenuItem>
              <MenuItem value="5C">5C</MenuItem>
              <MenuItem value="5D">5D</MenuItem>
              <MenuItem value="5E">5E</MenuItem>
              <MenuItem value="aleatorio">Aleatorio</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} >
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="nivelIngles-label">Nivel de Inglés</InputLabel>
            <Select
              labelId="nivelIngles-label"
              value={criterios.nivelIngles}
              label="Nivel de Inglés"
              onChange={(e) => setCriterios({ ...criterios, nivelIngles: e.target.value })}
            >
              <MenuItem value="básico">Básico</MenuItem>
              <MenuItem value="intermedio">Intermedio</MenuItem>
              <MenuItem value="bueno">Bueno</MenuItem>
              <MenuItem value="avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="efp-label">EFP</InputLabel>
            <Select
              labelId="efp-label"
              value={criterios.efp}
              label="EFP"
              onChange={(e) => setCriterios({ ...criterios, efp: e.target.value })}
            >
              <MenuItem value="health coach">Health Coach</MenuItem>
              <MenuItem value="emprendimiento">Emprendimiento</MenuItem>
              <MenuItem value="gestión cultural">Gestión Cultural</MenuItem>
              <MenuItem value="diseño de prototipos">Diseño de Prototipos</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="area-label">Área</InputLabel>
            <Select
              labelId="area-label"
              value={criterios.area}
              label="Área"
              onChange={(e) => setCriterios({ ...criterios, area: e.target.value })}
            >
              <MenuItem value="ingeniería">Ingeniería</MenuItem>
              <MenuItem value="salud">Salud</MenuItem>
              <MenuItem value="cultura">Cultura</MenuItem>
              <MenuItem value="otro">Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <TextField
            fullWidth
            type="number"
            label="Cantidad de Alumnos"
            value={criterios.cantidad}
            onChange={(e) => setCriterios({ ...criterios, cantidad: parseInt(e.target.value) })}
            inputProps={{ min: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
