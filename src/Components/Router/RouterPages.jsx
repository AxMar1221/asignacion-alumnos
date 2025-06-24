import { Route, Routes } from "react-router-dom"
import { HomeApp } from "../Pages"


export const RouterPages = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<HomeApp/>} />
        </Routes>
    </>
  )
}
