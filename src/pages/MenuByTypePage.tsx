import { Container, Box } from "@mui/material"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"
import { useHistory, useParams } from "react-router-dom"

const MenuByTypePage = () => {

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

  const dummyMenuForMother = [
    {
      id: "asdfafdsaaf",
      title: "Omelet Bayam dan Nasi Merah",
      category: "Ibu Hamil",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
    {
      id: "ssjgbnasnga",
      title: "Roti Gandum Panggang Isi Telur dan Alpukat",
      category: "Ibu Hamil",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
    {
      id: "asidbgnoasnga",
      title: "Oatmeal dengan Potongan Buah",
      category: "Ibu Hamil",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
    {
      id: "yojskngdka",
      title: "Nasi Goreng Sayur",
      category: "Ibu Menyusui",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
    {
      id: "mgabrgja",
      title: "Tumis Buncis Siram Daging",
      category: "Ibu Menyusui",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
    {
      id: "hijijksdga",
      title: "Tumis Asparagus",
      category: "Ibu Menyusui",
      image: "https://wongcoco.com/asset_admin/assets/uploads/cover/original/455_apa_itu_puree_buah_asli_ini_penjelasannya.jpg"
    },
  ]

  const history = useHistory()
  const { type } = useParams<{ type: string }>();
  const handleClick = (id: string) => {
    history.push(`/menu/${id}`)
}
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <h1>{type}</h1>
        <img style={{objectFit: 'cover'}} width={930} height={290} src="https://asset.kompas.com/crops/3swuFc9jPQW51QyLDYsJtJ00YIo=/0x0:780x520/750x500/data/photo/2020/07/22/5f17e48c27e8b.jpg" />
        <p>Rekomendasi Sarapan Pagi yang baik buat Ibunda dan Si Buah Hati</p>
        <h2>Untuk Buah Hati</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          { dummyMenuForBabies.map(menu => 
            <MenuItem 
              title={menu.title}
              category={menu.category}
              image={menu.image}
              onClick={() => handleClick(menu.id)}
            />) }
        </Box>
        <h2>Untuk Ibunda</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
        { dummyMenuForMother.map(menu => 
            <MenuItem 
              title={menu.title}
              category={menu.category}
              image={menu.image}
              onClick={() => handleClick(menu.id)}
            />) }
        </Box>
      </Container>
    </>
  )
}

export default MenuByTypePage