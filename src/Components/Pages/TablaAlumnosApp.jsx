import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export const TablaAlumnosApp = ({ alumnos }) => {
  return (
    <>
      <Typography variant='h6' sx={{ mt: 4 }}>
        Listado de alumnos
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Grupo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {Array.isArray(alumnos) && alumnos.map((alumno, index) => (
              <TableRow key={index}>
                <TableCell>{alumno.nombre}</TableCell>
                <TableCell>{alumno.nivelIngles}</TableCell>
                <TableCell>{alumno.efp}</TableCell>
                <TableCell>{alumno.area}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
