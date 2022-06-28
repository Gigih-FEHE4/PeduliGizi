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

const DataAnakPage = () => {
    const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            nama: data.get('nama'),
            tanggal_lahir: data.get('tanggal lahir'),
            jenis_kelamin: data.get('jenis kelamin'),
            minggu_kelahiran_anak_lahir: data.get('minggu kelahiran anak lahir'),
        });
    };
    return ( 
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs"/>
                <CssBaseline/>
                    <Box sx = {{ marginTop: 8, display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
                        <Avatar sx = {{ m: 1, bgcolor: 'secondary.login' }}>
                            <LockOutlinedIcon />
                        </Avatar> 
                        <Typography component="h1" variant="h5">
                            Data Anak 
                        </Typography> 
        
                        <Box component="form" onSubmit = { handleSubmit } noValidate sx = {{ mt: 1 }}>
                            <TextField margin = "normal"
                                required fullWidth id = "nama"
                                label = "Nama Anak"
                                name = "nama"
                                autoComplete = "nama"
                                autoFocus/>
                            <TextField margin = "normal"
                                required fullWidth name = "tanggal lahir"
                                label = "Tanggal Lahir Anak"
                                type = "tanggal lahir"
                                id = "tanggal lahir"
                                autoComplete = "tanggal lahir"/>
                            <TextField margin = "normal"
                                required fullWidth name = "jenis kelamin"
                                label = "Jenis Kelamin Anak"
                                type = "jenis kelamin"
                                id = "jenis kelamin"
                                autoComplete = "jenis kelamin" 
                                />
                            <TextField margin = "normal"
                                required fullWidth name = "minggu kelahiran anak lahir"
                                label = "Minggu Kelahiran Anak Lahir"
                                type = "minggu kelahiran anak lahir"
                                id = "minggu kelahiran anak lahir"
                                autoComplete = "minggu kelahiran anak lahir"/>
                            <FormControlLabel control = { 
                                <Checkbox value = "remember"
                                    color = "primary"/>
                                }
                                label = "Remember me"/>
                            <Button 
                                type = "tambah"
                                href='#'
                                fullWidth variant = "contained"
                                sx = {{ mt: 3, mb: 2 }}>
                                Tambah 
                            </Button> 
                            <Grid container>
                                <Grid item xs>
                                    <Link href = "#"variant = "body2"></Link> 
                                </Grid> 
                            </Grid> 
                        </Box> 
                    </Box>
            </ThemeProvider>
        )};

export default DataAnakPage