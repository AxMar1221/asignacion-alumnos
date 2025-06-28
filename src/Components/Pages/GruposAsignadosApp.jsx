import React from 'react'
import { Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

export const GruposAsignadosApp = ({grupos}) => {
  if (!grupos || typeof grupos !== 'object') return null;
  
  return (
    <>
      <Typography variant="h6" sx={{ mt: 4 }}>Alumnos Asignados por Grupo</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {Object.entries(grupos).map(([grupo, alumnos]) => (
          <Grid item xs={12} md={6} lg={4} key={grupo}>
            <Card>
              <CardContent>
                <Typography variant="h6">Grupo {grupo}</Typography>
                <List>
                  {alumnos.map((alumno, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={alumno.nombre}
                        secondary={`Inglés: ${alumno.nivelIngles}, EFP: ${alumno.efp}, Área: ${alumno.area}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
