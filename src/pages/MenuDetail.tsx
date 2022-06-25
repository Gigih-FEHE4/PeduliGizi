import Header from '../Components/Header'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

const MenuDetail = () => {
  const dummyData = {
    title: "Pure Pisang",
    bahan: [
      "Pisang Segar dan matang"
    ],
    resep: [
      "Cuci pisang yang belum dikupas dengan campuran air dan cuka untuk menyingkirkan bakteri,dan keringkan.",
      "Kupas pisang dan potong kecil-kecil.",
      "Haluskan pisang dengan food processor.",
      "Campur pisang dengan air atau ASI hingga mencapai konsistensi yang diinginkan."
    ],
    saranTitle: "Tips pemberian MPASI untuk bayi 6 bulan",
    saran: [
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
  }
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <h1>Sarapan</h1>
          <img style={{objectFit: 'cover'}} width={930} height={290} src="https://asset.kompas.com/crops/3swuFc9jPQW51QyLDYsJtJ00YIo=/0x0:780x520/750x500/data/photo/2020/07/22/5f17e48c27e8b.jpg" />
          <h2>{dummyData.title}</h2>
          <h3>Bahan-bahan: </h3>
          <ol>
            { dummyData.bahan.map(bahan => <li>{bahan}</li>) }
          </ol>
          <h3>Resep: </h3><ol>
            { dummyData.resep.map(resep => <li>{resep}</li>) }
          </ol>
          <h3>{dummyData.saranTitle}</h3>
          <ol>
            { dummyData.saran.map(saran => <li>{saran}</li>) }
          </ol>
        </Container>
    </>
  )
}

export default MenuDetail