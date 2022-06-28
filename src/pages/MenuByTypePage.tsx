import { Container, Box } from "@mui/material"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MenuMakanan } from "../model/MenuMakanan"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../firebase"

const MenuByTypePage = () => {
  const history = useHistory()
  const { type } = useParams<{ type: string }>();
  const [menus, setMenus] = useState<MenuMakanan[]>([])
  const handleClick = (id: string) => {
    history.push(`/menu/${id}`)
  }

  const getTitle = () => {
    switch (type) {
      case "sarapan":
        return "Sarapan Pagi"
      case "makan-siang":
        return "Makan Siang"
      case "makan-malam":
        return "Makan Malam"
      case "bb-booster":
        return "Booster Berat Badan"
      default:
        return ""
    }
  }

  const getImage = () => {
    switch (type) {
      case "sarapan":
        return "https://asset.kompas.com/crops/3swuFc9jPQW51QyLDYsJtJ00YIo=/0x0:780x520/750x500/data/photo/2020/07/22/5f17e48c27e8b.jpg"
      case "makan-siang":
        return "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/media/image/original/6173_makanan-bayi-10-12-bulan-bubur-jagung-seafood.jpg"
      case "makan-malam":
        return "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/phNu0rR6V1.jpg"
      case "bb-booster":
        return "https://cms.sehatq.com/public/img/article_img/pilihan-menu-mpasi-6-bulan-yang-sehat-untuk-buah-hati-1568797069.jpg"
      default:
        return ""
    }
  }

  useEffect(() => {
    const fetchData = async () => {
        const acc: MenuMakanan[] = []
        const querySnapshot = await getDocs(query(collection(db, "menus"), where("type", "==", type)));
        querySnapshot.forEach((doc) => {
            const data = doc.data() as {
              title: string,
              bahan: string[],
              resep: string[],
              for: string,
              type: string,
              image: string
          }
            acc.push({
                id: doc.id,
                title: data.title,
                bahan: data.bahan,
                resep: data.resep,
                for: data.for,
                type: data.type,
                image: data.image
            })
        });
        setMenus(acc)
    }
    fetchData()
  }, [type])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <h1>{getTitle()}</h1>
        <img style={{objectFit: 'cover'}} width={930} height={290} src={getImage()} />
        <p>Rekomendasi {getTitle()} yang baik buat Ibunda dan Si Buah Hati</p>
        <h2>Untuk Buah Hati</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          { menus.filter(menu => menu.for.includes("Bayi")).map(menu => 
            <MenuItem 
              title={menu.title}
              category={menu.for}
              image={menu.image}
              onClick={() => handleClick(menu.id)}
            />) }
        </Box>
        <h2>Untuk Ibunda</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
        { menus.filter(menu => menu.for.includes("Ibu")).map(menu => 
            <MenuItem 
              title={menu.title}
              category={menu.for}
              image={menu.image}
              onClick={() => handleClick(menu.id)}
            />) }
        </Box>
      </Container>
    </>
  )
}

export default MenuByTypePage