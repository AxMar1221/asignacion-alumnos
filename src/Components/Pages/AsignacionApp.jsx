import { useState } from 'react';
import Papa from 'papaparse';
import { Button, Container, Typography } from '@mui/material';
import { TablaAlumnosApp } from './TablaAlumnosApp';
import { GruposAsignadosApp } from './GruposAsignadosApp';


export const AsignacionApp = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [grupos, setGrupos] = useState([]);

    const handleCVSUpload = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setAlumnos(results.data);
            },
        });
    };

    const asignarAlumnosAGrupos = (alumnos) => {
        const grupos = {
            '5A': [],
            '5B': [],
            '5C': [],
            '5D': [],
            '5E': [],
        };
        const maxXGrupo = 30;
        const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

        const alumnosMezclados = shuffle([...alumnos]);

        for ( const alumno of alumnosMezclados ) {
            const grupoDisponible = Object.entries(grupos).find(([, lista]) => lista.length < maxXGrupo);
            if (grupoDisponible) {
                grupoDisponible[1].push(alumno);
             }
        }
    return grupos;
  };

  const handleAsignar = () => {
    const resultado = asignarAlumnosAGrupos(alumnos);
    setGrupos(resultado);
  }

  return (
    <Container>
        <Typography variant='h4' gutterBottom>
            Asignación de Alumnos a Grupos
        </Typography>
        <Button variant='contained' component='label'>
            Subir CSV
            <input type='file' hidden accept='.csv' onChange={handleCVSUpload} />
        </Button>
        {alumnos.length < 0 && (
            <>
                <TablaAlumnosApp alumnos={alumnos} />
                <Button variant='contained' color='primary' onClick={handleAsignar} sx={{ mt: 2 }}>
                    Asignar Alumnos a Grupos
                </Button>
            </>
        )}
        {grupos && <GruposAsignadosApp grupos={grupos} />}
    </Container>
  );
}
