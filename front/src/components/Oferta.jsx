import { Box, Typography, Button } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";


export default function Oferta() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        width: { xs: '90%',  lg: '80%' },
        margin: '0 auto',
        padding: 4,
        backgroundColor: '#fff', // fondo claro  
        mt: 8,
      }}
    >
      {/* Texto */}
      <Box sx={{ flex: 1, pr: { md: 4 }, textAlign: { xs: 'center', md: 'start' } }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom color="primary" sx={{ fontSize: { xs: '3.5rem',  lg: '5rem'}, color: '#ff6666', fontWeight: 700}}>
          ¡Oferta especial!
        </Typography>
        <Typography variant="h6" mb={4} color="text.secondary">
          -25% de descuento en todos nuestros productos premium para mascotas.
          <br />
          Solo por tiempo limitado. ¡No te lo pierdas!
        </Typography>
        <Button
            variant="contained"
            size="large"
            startIcon={<PetsIcon />}
            sx={{ backgroundColor: '#4ECDC4', color: 'white',  display: { xs: 'none', lg: 'flex' }}}
        >
          Comprar ahora
              </Button>
              
      </Box>

      {/* Imagen */}
      <Box
        component="img"
              src={ "img/catDog.jpeg"}
        alt="Perro y gato"
        sx={{
          width: { xs: '100%', md: '45%', lg: '50rem' },
          mt: { xs: 4, md: 0 }
        }}
          />
            <Button
            variant="contained"
            size="large"
            startIcon={<PetsIcon />}
            sx={{ backgroundColor: '#4ECDC4', color: 'white', display: { xs: 'flex', lg: 'none'}, mt: 4}}
        >
          Comprar ahora
        </Button>
    </Box>
  );
}
