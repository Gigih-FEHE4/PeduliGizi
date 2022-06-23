import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box component="div" sx={{
        padding: "40px 24.4%",
        textAlign: "justify"
      }}>
        <Typography sx={{
                width: "100%",
                height: "auto",
                fontFamily: 'Rockwell',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "28px",
                alignItems: "center",   
                color: "#000000"}} gutterBottom>
        Platform Digital Membantu Indonesia Untuk Mencegah Stunting
        </Typography>
        <Typography  gutterBottom>
          {'PeduliGizi merupakan platform digital yang membidangi khusus gizi untuk mencegah Stunting di Indonesia. menyediakan informasi gizi yang baik untuk para ibu dan sang Buah hati serta pengetahuan umum mengenai stunting yang dikemas dalam bentuk artikel.'}
        </Typography>
      </Box>
      <Box component="div" sx={{
        display: "flex",
        padding:"20px 14%"
      }}>
          <Box sx={{
            width:"100%",
            margin:"50px",
          }}>
            <Typography sx={{
                width: "100%",
                height: "auto",
                fontFamily: 'Rockwell',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "28px",
                alignItems: "center",   
                color: "#000000",
                wordBreak: "break-all",
                textAlign: "center"}} gutterBottom>{`Berbasis Online, Sehingga Mudah Diakses Dimana Saja`}</Typography>
            <Typography sx={{
                width: "100%",
                height: "auto",   
                color: "#000000",
                textAlign: "justify"}} gutterBottom>{`Fitur Website yang dibuat secara pendekatan yang baik agar para ibu ibu mudah memahami kegunaan dan manfaat dari fitur yang disediakan, terdapat beberapa fitur pada website PeduliGizi, yakni fitur tambah data anak, record anak  daftar menu makan anak dan ibu, rekomendasi menu,  dan juga artikel bersumber tentang stunting yang semua dikemas dengan bahasa indonesia yang baik dan benar agar dapat ditelaah dengan mudah`}</Typography>

          </Box>
          <Box sx={{
            width:"100%",
            margin:"50px",
          }}>
            <Typography sx={{
                width: "100%",
                height: "auto",
                fontFamily: 'Rockwell',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "28px",
                alignItems: "center",   
                color: "#000000",
                wordBreak: "break-all",
                textAlign: "center"}} gutterBottom>{`Fitur website yang mempermudah para Ibu untuk mempelajari Stunting Lebih Baik`}</Typography>
            <Typography sx={{
                width: "100%",
                height: "auto",   
                color: "#000000",
                textAlign: "justify"}} gutterBottom>{`Fitur Website yang dibuat secara pendekatan yang baik agar para ibu ibu mudah memahami kegunaan dan manfaat dari fitur yang disediakan, terdapat beberapa fitur pada website PeduliGizi, yakni fitur tambah data anak, record anak  daftar menu makan anak dan ibu, rekomendasi menu,  dan juga artikel bersumber tentang stunting yang semua dikemas dengan bahasa indonesia yang baik dan benar agar dapat ditelaah dengan mudah`}</Typography>

          </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}