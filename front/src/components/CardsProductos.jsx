import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

export default function CardsProductos({ id, nombre, precio, categoria, imagen, oferta, descuento }) {
  const precioNum = Number(precio);
  const descuentoNum = Number(descuento);
  const precioDescuento = descuentoNum > 0 ? precioNum * (1 - descuentoNum / 100) : precioNum;

  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/productos/${id}`);
  };

  return (
    <Card
  sx={{
    height: { xs: 350, sm: 380 },
    width: { xs: 180, sm: 300 },
    margin: 'auto',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',  
  }}
>
<Box
  sx={{
    position: 'relative',
    width: '80%',
    height: { xs: 180, sm: 300, lg: 200 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    mx: 'auto',          
  }}
>
  <Box
    component="img"
    src={imagen}
    alt={nombre}
    sx={{
      height: { xs: '150px', md: '230px' },
      width: { xs: '80%', md: '230px' },  
      objectFit: 'cover',
      borderRadius: 1,
        margin: 'auto', 
      display: 'block',     
    }}
  />
    {oferta && (
      <Typography
        sx={{
          position: 'absolute',
          top: 10,
          left: -10,
          padding: '5px 12px',
          backgroundColor: '#F39C12',
          borderRadius: 3,
          color: 'white',
          fontSize: '11px',
          textAlign: 'center',
        }}
      >
        ¡Oferta!
      </Typography>
    )}
    <Typography
      sx={{
        position: 'absolute',
        top: 10,
        right: -15,
        padding: '5px 12px',
        backgroundColor: '#ff6666',
        borderRadius: 3,
        color: 'white',
        fontSize: '11px',
        textAlign: 'center',
      }}
    >
      {categoria}
    </Typography>
  </Box>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: 2,
    }}
  >
    <Typography
      sx={{ fontSize: '1.2rem', fontWeight: 500, textAlign: 'center' }}
    >
      {nombre}
    </Typography>

    {descuentoNum > 0 ? (
      <>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'gray',
            textDecoration: 'line-through',
            fontWeight: 400,
          }}
        >
          ${precioNum.toFixed(2)}
        </Typography>
        <Typography
          sx={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: 600 }}
        >
          ${precioDescuento.toFixed(2)}
        </Typography>
      </>
    ) : (
      <Typography sx={{ fontSize: '1.7rem', fontWeight: 600,  textAlign: 'center'}}>
        ${precioNum.toFixed(2)}
      </Typography>
    )}

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: 1,
        mt: 1,
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          width: { xs: 100, sm: 140 },
          height: '2.5rem',
          textTransform: 'capitalize',
          fontSize: '1rem',
          bgcolor: '#4ECDC4',
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: '1.2rem', mr: 1 }} />
        Agregar
      </Button>

      <Button
        variant="contained"
        onClick={irADetalle} //muestra producto individual
        sx={{
          width: { xs: 60, sm: 80 },
          height: '2.5rem',
          textTransform: 'capitalize',
          fontSize: '1rem',
          bgcolor: '#000',
          color: '#fff',
        }}
      >
        Ver
      </Button>
    </Box>
  </Box>
</Card>

  );
}
