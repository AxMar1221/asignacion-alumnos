import { NavLink } from 'react-router-dom'
import { AppBar, Container, MenuItem, Toolbar } from '@mui/material'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'

export const Navbar = () => {
  return (
    <div className='navbar bg-base-100 container mb-5'>
        <AppBar color='error'>
            <Container>
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0'
                    }}
                >
                    <MenuItem
                        sx={{borderRadius: '3px', color: 'white'}}
                    >
                        <NavLink
                            to='/home'
                            style={({ isActive }) => ({
                                color: isActive ? 'white' : 'success',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            })}
                        >
                            <SchoolRoundedIcon sx={{marginRight: '10px'}} />
                            Inicio
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        sx={{borderRadius: '3px', color: 'white'}}
                    >
                        <NavLink
                            to='/asignacion'
                            style={({ isActive }) => ({
                                color: isActive ? 'white' : 'success',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            })}
                        >
                            Asignar
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        sx={{borderRadius: '3px', color: 'white'}}
                    >
                        <NavLink
                            to='/grupos'
                            style={({ isActive }) => ({
                                color: isActive ? 'white' : 'success',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            })}
                        >
                            Grupos
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        sx={{borderRadius: '3px', color: 'white'}}
                    >
                        <NavLink
                            to='/tabla'
                            style={({ isActive }) => ({
                                color: isActive ? 'white' : 'success',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            })}
                        >
                            Tabla
                        </NavLink>
                    </MenuItem>
                </Toolbar>
            </Container>
        </AppBar>

    </div>
  )
}
