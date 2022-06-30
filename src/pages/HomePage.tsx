import { Box, Card, Container, Grid, Typography } from "@mui/material"
import { Link,useHistory, useParams } from "react-router-dom"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"
import Button from '@mui/material/Button';
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, limit, query, snapshotEqual, Timestamp } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState} from "react";
import { db } from "../firebase";
import { Children } from "../model/Children";






const HomePage = () => {
    const dummyMenuForBabies = [
        {
          id: "asdfafdsaaf",
          title: "Pure Pisang",
          category: "Usia 6 - 9 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
        {
          id: "ssjgbnasnga",
          title: "Pure Alpukat",
          category: "Usia 6 - 9 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
        {
          id: "asidbgnoasnga",
          title: "Pure Wortel",
          category: "Usia 6 - 9 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
        {
          id: "yojskngdka",
          title: "Nasi Goreng Sayur",
          category: "Usia 9 - 12 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
        {
          id: "mgabrgja",
          title: "Kentang Tuna Saus Bayam",
          category: "Usia 9 - 12 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
        {
          id: "hijijksdga",
          title: "Sup Makaroni Tofu Brokoli",
          category: "Usia 9 - 12 Bulan",
          image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
        },
      ]

    const history = useHistory()
    const handleClick = (id: string) => {
        history.push(`/menu/${id}`)
    }
    const { id } = useParams<{ id: string }>();
    const [childrens, setChildrens] = useState<Children[]>([])
    const [children, setChildren] = useState<Children>()


    useEffect(() => {
        const fetchData = async () => {
            const docSnap = await getDoc(doc(db, "children", id))
            const data = docSnap.data() as {birthDate: Timestamp, gender: string, name: string, parentId: string, weekOfBirth: string}
            setChildren({
                id: docSnap.id,
                birthDate: data.birthDate,
                gender: data.gender,
                name: data.name,
                parentId: data.parentId,
                weekOfBirth: data.weekOfBirth
            })
        }
        const fetchOtherData = async () => {
            const acc: Children[] = []
            const querySnapshot = await getDocs(query(collection(db, "children"), limit(3)));
            querySnapshot.forEach((doc) => {
                const data = doc.data() as {birthDate: Timestamp, gender: string, name: string, parentId: string, weekOfBirth: string}
                acc.push({
                    id: doc.id,
                    birthDate: data.birthDate,
                    gender: data.gender,
                    name: data.name,
                    parentId: data.parentId,
                    weekOfBirth: data.weekOfBirth
                })
            });
            setChildrens(acc)
        }
        fetchData()
        fetchOtherData()
    }, [id])

  return (
    <>
        <Header />
        <Container maxWidth="lg">
            <Card>
                <Typography variant="h5" component="h1">
                    Nama Anak
                </Typography>
                <Typography variant="h6" component="p">
                    Usia
                </Typography>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                    <Box flexGrow={1} textAlign="center">
                        <Typography variant="subtitle1" component="h2">
                            Tinggi
                        </Typography>
                        <Typography variant="body1" component="p">
                            54cm
                        </Typography>
                    </Box>
                    <Box flexGrow={1} textAlign="center">
                        <Typography variant="subtitle1" component="h2">
                            Berat
                        </Typography>
                        <Typography variant="body1" component="p">
                            5.4kg
                        </Typography>
                    </Box>
                    <Box flexGrow={1} textAlign="center">
                        <Typography variant="subtitle1" component="h2">
                            Lingkar Kepala
                        </Typography>
                        <Typography variant="body1" component="p">
                            433cm
                        </Typography>
                    </Box>
                </Box>
                <div className="buttonRight">
                <Button  href="#/child/add-record" size="small" variant="outlined">Record</Button>
                <Button  href="#/child/1"  size="small" variant="outlined">Detail</Button>
                </div>
            </Card>
            
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Typography variant="subtitle1" component="h2">
                        Kebutuhan Hari Ini
                    </Typography>
                    { ["100 ml cairan", "20gr karbohidrat", "12gr protein"].map(need =>
                        <Typography variant="body1" component="p">
                            {need}
                        </Typography>) }
                </Grid>
                <Grid item xs={6}>
                <Typography variant="subtitle1" component="h2">
                        Rekomendasi Menu Hari Ini
                    </Typography>
                    { dummyMenuForBabies.map(menu => 
                        <MenuItem 
                        title={menu.title}
                        category={menu.category}
                        image={menu.image}
                        onClick={() => handleClick(menu.id)}
                        />) }
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default HomePage