/* eslint-disable no-unused-vars */
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

const theme = createTheme();

const RecordAnakPage = () => {
    const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            tanggal_cek_anak: data.get('tanggal cek anak'),
            tinggi_anak: data.get('tinggi anak'),
            berat_badan_anak: data.get('berat badan anak'),
            lingkar_kepala_anak: data.get('lingkar kepala anak'),
        });
    };
    return ( 
        <ThemeProvider theme = {theme}>
            <Container maxWidth = "xs"/>
            <CssBaseline/>
            <Box sx = {{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx = {{ m: 1, bgcolor: 'secondary.login' }}>
                    <LockOutlinedIcon />
                </Avatar> 
                <Typography component = "h1" variant = "h5">
                    Record Anak 
                </Typography> 
                <Box component = "form" onSubmit = { handleSubmit } noValidate sx={{ mt: 1 }}>
                    <TextField margin = "normal"
                        required fullWidth id = "tanggal lahir"
                        label = "Tanggal Cek Anak"
                        name = "tanggal cek"
                        autoComplete = "tanggal cek"
                        autoFocus/>
                    <TextField margin = "normal"
                        required fullWidth name = "tinggi anak"
                        label = "Tinggi Anak"
                        type = "tinggi anak"
                        id = "tinggi anak"
                        autoComplete = "tinggi anak"/>
                    <TextField margin = "normal"
                        required fullWidth name = "berat badan"
                        label = "Berat Badan Anak"
                        type = "berat badan"
                        id = "berat badan"
                        autoComplete = "berat badan" 
                    />
                    <TextField margin = "normal"
                        required fullWidth name = "lingkar kepala anak"
                        label = "Lingkar Kepala Anak"
                        type = "lingkar kepala anak"
                        id = "lingkar kepala anak"
                        autoComplete = "lingkar kepala anak"/>
                    <FormControlLabel control = { <Checkbox value="remember" color="primary"/> } label = "Remember me"/>
                    <Button type = "tambah" href="#" fullWidth variant = "contained" sx = {{ mt: 3, mb: 2 }}>
                        Tambah 
                    </Button> 
                    <Grid container>
                        <Grid item xs>
                            <Link href = "#"
                            variant = "body2">
                            </Link> 
                        </Grid> 
                    </Grid> 
                </Box> 
            </Box>
        </ThemeProvider>
    )};

export default RecordAnakPage