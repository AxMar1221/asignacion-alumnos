import { Route, Routes } from "react-router-dom"
import { RouterPages } from "../Components/Router/RouterPages"
import { FooterApp, Navbar } from "../Shared"


export const RouterApp = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/*' element={<RouterPages />} />
        </Routes>

        <FooterApp />
    </>
  )
}
