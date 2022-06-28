import { Box, Card, Container, Grid, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"

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