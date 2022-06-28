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
import {useState} from 'react';
import { Email } from '@mui/icons-material';
import { createUserWithEmailAndPassword, updateProfile, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import SignupHooks from '../hooks/SignupHooks';

export default function SignUp() {
  const theme = createTheme();
  const history = useHistory()
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser: UserCredential) => {
        if (auth.currentUser != null) {
          updateProfile(auth.currentUser, {
            displayName:`${firstName} ${lastName}`
          })
        }

      console.log(auth.currentUser)
      alert(`hallo ${firstName}${lastName}`)
      history.push('/child/add')
    }).catch((err)=>{
      alert(err)
    })
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
            Daftar Akun
          </Typography>
            <hr/>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nama Depan"
                  autoFocus
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nama Belakang"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Alamat Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,
                background: "#FF4D4D",
                boxShadow: "1px 17px 44px rgba(3, 2, 41, 0.07)",
                borderRadius: "40px"}}
            >
              Daftar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Sudah punya akun? Masuk
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <SignupHooks />
    </ThemeProvider>
  );
}