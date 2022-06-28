import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { auth, db } from '../firebase';
import { useDispatch } from 'react-redux';
import { setId } from '../store/child-slice';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

const AddChildPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const docRef = await addDoc(collection(db, "children"), {
            name: data.get('name'),
            birthDate: birthDate,
            gender: gender,
            weekOfBirth: data.get('weekOfBirth'),
            parentId: auth.currentUser?.uid
        });

        dispatch(setId(docRef.id))
        history.push("/home")
    };

    return ( 
        <ThemeProvider theme = {theme}>
            <Container maxWidth = "xs"/>
            <CssBaseline/>
            <Box sx = {{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx = {{ m: 1, bgcolor: 'secondary.login' }}>
                    <LockOutlinedIcon />
                </Avatar> 
                <Typography component = "h1" variant = "h5">
                    Data Anak 
                </Typography> 
            <Box component = "form" onSubmit = { handleSubmit } noValidate sx = {{ mt: 1 }}>
                <TextField margin = "normal"
                    required 
                    fullWidth 
                    id="name"
                    label="Nama Anak"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Pilih Tanggal Lahir"
                        value={birthDate}
                        onChange={(newDate) => {
                            setBirthDate(newDate ?? "")
                        }}
                        renderInput={(params) => <TextField fullWidth sx = {{ mt: 1 }} {...params} />}
                    />
                </LocalizationProvider>
                
                <br />

                <FormControl fullWidth sx = {{ mt: 1 }}>
                    <InputLabel>Jenis Kelamin</InputLabel>
                    <Select id="gender" value={gender} onChange={handleChange}>
                        <MenuItem value="laki-laki">Laki-laki</MenuItem>
                        <MenuItem value="perempuan">Perempuan</MenuItem>
                    </Select>
                </FormControl>
        
                <TextField margin="normal"
                    required 
                    fullWidth 
                    name="weekOfBirth"
                    label="Minggu Kelahiran Anak Lahir"
                    type="text"
                    id="weekOfBirth"
                    autoComplete="Minggu kelahiran anak lahir"/>
                
                <Button type="submit" fullWidth variant="contained" sx = {{ mt: 3, mb: 2 }}>
                    Tambah 
                </Button> 
            </Box>
        </Box> 
    </ThemeProvider>
)}

export default AddChildPage