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
import Header from "../Components/Header";
import LoginHooks from '../hooks/LoginHooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setId } from '../store/child-slice';

const theme = createTheme();

export default function Login() {
  const history=useHistory()
  const dispatch = useDispatch()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password)
      const children = await getDocs(query(collection(db, "children"), where("parentId", "==", userAuth.user.uid)))
      const randChild = children.docs.at(0)
      dispatch(setId(randChild?.id ?? ""))
      alert('login succes')
      history.push('/home')
    } catch (error) {
      alert(error)
    }
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
            Masuk
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
              Masuk
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Lupa Password?
                </Link>
              </Grid>
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