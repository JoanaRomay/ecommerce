// src/components/CardDestacados.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CardDestacados({ nombre, precio, categoria, imagen }) {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 300 },
        mx: 'auto',
        height: { xs: 350, md: 400 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Imagen */}
      <Box sx={{ position: 'relative', height: '50%' }}>
        <img
          src={imagen}
          alt={nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white',
            backgroundColor: '#ff6666',
            padding: '5px 12px',
            borderRadius: 3,
            fontSize: '0.7rem',
          }}
        >
          {categoria}
        </Typography>
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        {/* Nombre */}
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          {nombre}
        </Typography>

        {/* Precio y botón */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '1.7rem' }}>
            ${precio}
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              width: '10rem',
              height: '2.5rem',
              textTransform: 'capitalize',
              fontSize: '1rem',
              bgcolor: '#4ECDC4',
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: '1.2rem', marginRight: 1 }} />
            Agregar
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
