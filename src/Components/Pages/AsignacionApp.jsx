import { useState } from 'react';
import Papa from 'papaparse';
import { Button, Container, Typography } from '@mui/material';
import { TablaAlumnosApp } from './TablaAlumnosApp';
import { GruposAsignadosApp } from './GruposAsignadosApp';
import { CriteriosAsignacionApp } from './CriteriosAsignacionApp';


export const AsignacionApp = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState(null);
  const [criterios, setCriterios] = useState({
    grupo: '',
    nivelIngles: '',
    efp: '',
    area: '',
    cantidad: ''
  });

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const filtrados = result.data.filter(row =>
          row.nombre && row.nivelIngles && row.efp && row.area
        );
        setAlumnos(filtrados);
      },
    });
  };

  const asignarAlumnosAGrupos = (alumnos) => {
    const grupos = {
      '5A': [], '5B': [], '5C': [], '5D': [], '5E': [],
    };
    const filtrados = alumnos.filter(alumno => {
      return (
        (!criterios.nivelIngles || alumno.nivelIngles === criterios.nivelIngles) &&
        (!criterios.efp || alumno.efp === criterios.efp) &&
        (!criterios.area || alumno.area === criterios.area)
      );
    });

    const seleccionados = filtrados.slice(0, criterios.cantidad);

    if (criterios.grupo !== 'aleatorio') {
      grupos[criterios.grupo] = seleccionados;
    } else {
      const nombresGrupos = Object.keys(grupos);
      let index = 0;
      for (const alumno of seleccionados) {
        const grupo = nombresGrupos[index % nombresGrupos.length];
        grupos[grupo].push(alumno);
        index++;
      }
    }

    return grupos;
  };

  const handleAsignar = () => {
    if (alumnos.length === 0) {
      alert('Primero debes cargar alumnos desde un archivo CSV.');
      return;
    }

    const filtrados = alumnos.filter(alumno =>
      (!criterios.nivelIngles || alumno.nivelIngles === criterios.nivelIngles) &&
      (!criterios.efp || alumno.efp === criterios.efp) &&
      (!criterios.area || alumno.area === criterios.area)
    );

    if (filtrados.length === 0) {
      alert('No hay alumnos que cumplan con los criterios seleccionados.');
      return;
    }

    if (criterios.cantidad > filtrados.length) {
      alert(`Solo hay ${filtrados.length} alumnos que cumplen los criterios. Reduce la cantidad solicitada.`);
      return;
    }

    const resultado = asignarAlumnosAGrupos(alumnos);
    setGrupos(resultado);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Asignar Alumnos
      </Typography>
      <Button variant="contained" component="label">
        Cargar CSV
        <input type="file" accept=".csv" hidden onChange={handleCSVUpload} />
      </Button>
      <CriteriosAsignacionApp criterios={criterios} setCriterios={setCriterios} />
      {alumnos.length > 0 && (
        <>
          <TablaAlumnosApp alumnos={alumnos} />
          <Button variant="contained" color="primary" onClick={handleAsignar} sx={{ mt: 2 }}>
            Asignar a Grupos
          </Button>
        </>
      )}
      {grupos && <GruposAsignadosApp grupos={grupos} />}
    </Container>
    );
}