/* eslint-disable no-unused-vars */
import { useState } from 'react';
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useHistory } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const theme = createTheme();

const AddRecordPage = () => {
    const history = useHistory()
    const id = useSelector((state: RootState) => state.id)
    const [date, setDate] = useState('')
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const docRef = await addDoc(collection(db, `children/${id}/histories`), {
            date: date,
            height: data.get('height'),
            weight: data.get('weight'),
            head: data.get('head'),
        })

        history.push(`/child/${id}`)
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
                    Tambah Record Anak 
                </Typography> 
                <Box component = "form" onSubmit = { handleSubmit } noValidate sx={{ mt: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Pilih Tanggal Pengecekan"
                            value={date}
                            onChange={(newDate) => {
                                setDate(newDate ?? "")
                            }}
                            renderInput={(params) => <TextField fullWidth sx = {{ mt: 1 }} {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField margin = "normal"
                        required fullWidth 
                        name = "height"
                        label = "Tinggi Anak"
                        type = "number"
                        id = "height"
                        autoComplete = "tinggi anak"/>
                    <TextField margin = "normal"
                        required fullWidth 
                        name = "weight"
                        label = "Berat Badan Anak"
                        type = "number"
                        id = "weight"
                        autoComplete = "berat badan" 
                    />
                    <TextField margin = "normal"
                        required fullWidth 
                        name = "head"
                        label = "Lingkar Kepala Anak"
                        type = "number"
                        id = "head"
                        autoComplete = "lingkar kepala anak"/>
                    <Button type="submit" fullWidth variant="contained" sx = {{ mt: 3, mb: 2 }}>
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

export default AddRecordPage