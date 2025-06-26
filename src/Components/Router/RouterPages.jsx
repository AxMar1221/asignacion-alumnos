import { Route, Routes } from "react-router-dom"
import { AsignacionApp, HomeApp, GruposAsignadosApp, TablaAlumnosApp} from "../Pages"


export const RouterPages = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<HomeApp/>} />
            <Route path='/asignacion' element={<AsignacionApp />} />
            <Route path='/grupos' element={<GruposAsignadosApp />} />
            <Route path='/tabla' element={<TablaAlumnosApp />} />
        </Routes>
    </>
  )
}
