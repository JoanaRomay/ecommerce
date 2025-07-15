import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuMobile from './MenuMobile';
import Carrito from './Carrito'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 

const pages = [
  { nombre: 'Inicio', path: '/' },
  { nombre: 'Productos', path: '/productos' },
  { nombre: 'Contacto', path: '/contacto' },
  { nombre: 'Nosotros', path: '/nosotros' },
];

function NavBar() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);
  const [carritoAbierto, setCarritoAbierto] = React.useState(false);
  const [carrito, setCarrito] = React.useState([]);

  const handleEliminarProducto = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fff', padding: '15px 0' }} elevation={0}>
      <Toolbar
            disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 3, md: 5 }, 
                }}
>
          {/* Botón hamburguesa para mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', position: 'relative', zIndex: 1301 }}>
            <IconButton
              size="large"
              aria-label="toggle menu"
              onClick={() => setMenuAbierto(!menuAbierto)}
              sx={{ color: '#13555E' }}
            >
              {menuAbierto ? <CloseIcon sx={{ fontSize: '2rem' }} /> : <MenuIcon sx={{ fontSize: '2rem' }} />}
            </IconButton>
          </Box>

          {/* Menú mobile */}
          <MenuMobile
            menuAbierto={menuAbierto}
            handleCloseNavMenu={() => setMenuAbierto(false)}
            pages={pages}
          />

          {/* Logo */}
          <Box
  component="img"
  src="/img/logo/logo.png"
  alt="Logo pawtitas"
  sx={{
    width: { xs: '120px', md: '110px' },
    position: 'static',
    transform: 'none',
    cursor: 'pointer',
  }}
  onClick={() => window.location.href = '/'}
/>

          {/* Menú desktop */}
          <Box
  sx={{
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Box sx={{ display: 'flex', gap: 4 }}>
    {pages.map(({ nombre, path }) => (
      <Button
        key={nombre}
        component={Link}
        to={path}
        onClick={() => setMenuAbierto(false)}
        sx={{ my: 2, color: '#13555E' }}
      >
        {nombre}
      </Button>
    ))}
  </Box>
</Box>


<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 2 }}>
  {/* Ícono de usuario - visible solo en desktop */}
  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <Tooltip title="Mi cuenta">
      <IconButton sx={{ color: '#13555E' }}>
        <AccountCircleIcon sx={{ fontSize: '1.7rem' }} />
      </IconButton>
    </Tooltip>
  </Box>

  {/* Ícono de carrito - visible en todas las resoluciones */}
  <Tooltip title="Abrir carrito">
    <IconButton sx={{ color: '#13555E' }} onClick={() => setCarritoAbierto(true)}>
      <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
    </IconButton>
  </Tooltip>
</Box>
        </Toolbar>
      </AppBar>

      {/* Carrito Drawer */}
      <Carrito
        open={carritoAbierto}
        onClose={() => setCarritoAbierto(false)}
        carrito={carrito}
        onEliminarProducto={handleEliminarProducto}
      />
    </>
  );
}

export default NavBar;
