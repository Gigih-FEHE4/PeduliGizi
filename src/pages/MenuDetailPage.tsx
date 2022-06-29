import Header from '../Components/Header'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MenuMakanan } from '../model/MenuMakanan'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const MenuDetailPage = () => {
  const saranList = [
      "Meski bayi sudah diperkenalkan pada makanan padat, pemberian ASI tetap harus berjalan.",
      "Untuk bayi berusia 6 bulan, berikan MPASI sebanyak 2-3 kali sehari dan 1 sampai 2 kali makanan selingan setiap hari.",
      "Berikan 2-3 sendok MPASI dalam sekali makan, sebagai awalan.",
      "Jumlah porsi dapat meningkat perlahan, hingga menjadi setengah mangkuk berukuran 250 ml.",
      "Berikan makanan secara perlahan.",
      "Jangan memaksakan bayi untuk menghabiskan makanannya.",
      "Durasi makan tidak boleh lebih dari 3 menit.",
      "Jangan memberikan makanan sebagai hadiah.",
      "Jangan makan sambil menonton televisi atau dari perangkat lainnya.",
      "Motivasi anak untuk makan sendiri.",
      "Berikan makanan dalam porsi kecil.",
      "Hentikan pemberian makan jika dalam 15 menit anak hanya bermain-main tanpa makan."
    ]
  const { id } = useParams<{ id: string }>();
  const [menu, setMenu] = useState<MenuMakanan>()

  const getTitle = (type: string) => {
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

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "menus", id))
      const data = docSnap.data() as {
            title: string,
            bahan: string[],
            resep: string[],
            for: string,
            type: string,
            image: string
        }
      setMenu({
          id: docSnap.id,
          title: data.title,
          bahan: data.bahan,
          resep: data.resep,
          for: data.for,
          type: data.type,
          image: data.image
      })
    }
    fetchData()
  }, [id])
  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <h1>{getTitle(menu?.type ?? "")}</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src={menu?.image} />
          <h2>{menu?.title}</h2>
          <h3>Bahan-bahan: </h3>
          <ol>
            { menu && menu.bahan.map(bahan => <li>{bahan}</li>) }
          </ol>
          <h3>Resep: </h3><ol>
            { menu && menu.resep.map(resep => <li>{resep}</li>) }
          </ol>
          <h3>Tips pemberian MPASI untuk bayi 6 bulan</h3>
          <ol>
            { saranList.map(saran => <li>{saran}</li>) }
          </ol>
        </Container>
    </>
  )
}

export default MenuDetailPage