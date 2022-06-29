import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./Header";
import LoginHooks from '../hooks/LoginHooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import {useState} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setId } from '../store/child-slice';
import { Link as RouterLink, useHistory } from "react-router-dom";

const theme = createTheme();

export default function Forgotpassword() {
  const history=useHistory()
  const dispatch = useDispatch()
  const[email,setEmail]=useState('')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            
          }}
        >
          <Typography component="h1" variant="h5">
            Lupa Password
          </Typography>
            <hr/>
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,
              background: "#FF4D4D",
              boxShadow: "1px 17px 44px rgba(3, 2, 41, 0.07)",
              borderRadius: "40px"}}
            >
              Kirim Email
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Belum punya akun? Daftar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <LoginHooks />
    </ThemeProvider>
  );
}