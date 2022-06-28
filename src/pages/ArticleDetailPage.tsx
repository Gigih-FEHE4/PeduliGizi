import { Container, Grid, Link, Box } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import Header from "../Components/Header";

const ArticleDetailPage = () => {
    const dummyArticles = [
        {
            id: "ASDDGSDGIDSGJNSGN",
            title: "Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi",
            desc: "Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya....",
            image: "https://dinkes.pekalongankota.go.id/upload/halaman/halaman_20190328114513.png"
        },
        {
            id: "KJLANSJKLNJKL",
            title: "Berkenalan dengan Stunting: Penyebab, Dampak, dan Pencegahannya",
            desc: "Proses tumbuh kembang anak tak hanya berlangsung pesat ketika anak memasuki usia balita.  Seribu hari pertama kehidupan anak justru menjadi momen penting yang memengaruhi tumbuh kembangnya di masa anak-anak hingga beranjak dewasa. Hingga kini, masalah anak stunting masih menjadi momok menakutkan yang menghantui anak-anak di berbagai belahan dunia, termasuk Indonesia....",
            image: "https://static.republika.co.id/uploads/images/inpicture_slide/ilustrasi_200928222258-299.jpg"
        },
        {
            id: "AWIEJFOWIAGOAWNVOAW",
            title: "Kebutuhan Nutrisi Gizi Ibu Hamil Yang Harus Dipenuhi",
            desc: "Asupan gizi ibu hamil menjadi faktor penting baik untuk pemenuhan nutrisi ibu hamil atau pun untuk pertumbuhan dan perkembangan janin dalam kandungan. Bahkan, dapat mengurangi risiko penyakit kronis pada anak Anda di masa mendatang. Yuk, simak daftar asupan gizi ibu hamil yang harus dipenuhi berikut ini.",
            image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg"
        }
    ];

    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                <h2>Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi</h2>
                <Grid container spacing={10}>
                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg" />
                        <p>Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya. </p>
                        <p>Kondisi tubuh anak yang pendek seringkali dikatakan sebagai faktor keturunan (genetik) dari kedua orang tuanya, sehingga masyarakat banyak yang hanya menerima tanpa berbuat apa-apa untuk mencegahnya. Padahal seperti kita ketahui, genetika merupakan faktor determinan kesehatan yang paling kecil pengaruhnya bila dibandingkan dengan faktor perilaku, lingkungan (sosial, ekonomi, budaya, politik), dan pelayanan kesehatan. Dengan kata lain, stunting merupakan masalah yang sebenarnya bisa dicegah.</p>
                        <p>Salah satu fokus pemerintah saat ini adalah pencegahan stunting. Upaya ini bertujuanagar anak-anak Indonesia dapat tumbuh dan berkembang secara optimal dan maksimal, dengan disertai kemampuan emosional, sosial, dan fisik yang siap untuk belajar, serta mampu berinovasi dan berkompetisi di tingkat global.</p>
                        <p>“Terdapat tiga hal yang harus diperhatikan dalam pencegahan stunting, yaitu perbaikan terhadap pola makan, pola asuh, serta perbaikan sanitasi dan akses air bersih”, tutur Menteri Kesehatan RI, Nila Farid Moeloek, di Jakarta (7/4).</p>
                        <ol>
                            <li>
                                <h3>Pola Makan</h3>
                                <p>
                                    Masalah stunting dipengaruhi oleh rendahnya akses terhadap makanan dari segi 
                                    jumlah dan kualitas gizi, serta seringkali tidak beragam.

                                    Istilah “Isi Piringku” dengan gizi seimbang perlu diperkenalkan dan dibiasakan 
                                    dalam kehidupan sehari-hari. Bagi anak-anak dalam masa pertumbuhan,  memperbanyak sumber protein sangat dianjurkan, di samping tetap membiasakan 
                                    mengonsumsi buah dan sayur.

                                    Dalam satu porsi makan, setengah piring diisi oleh sayur dan buah, setengahnya lagi 
                                    diisi dengan sumber protein (baik nabati maupun hewani) dengan proporsi lebih 
                                    banyak daripada karbohidrat.
                                </p>
                            </li>
                            <li>
                                <h3>Pola Asuh</h3>
                                <p>
                                    Stunting juga dipengaruhi aspek perilaku, terutama pada pola asuh yang kurang baik 
                                    dalam praktek pemberian makan bagi bayi dan Balita.

                                    Dimulai dari edukasi tentang kesehatab reproduksi dan gizi bagi remaja sebagai 
                                    cikal bakal keluarga, hingga para calon ibu memahami pentingnya memenuhi 
                                    kebutuhan gizi saat hamil dan stimulasi bagi janin, serta memeriksakan 
                                    kandungan empat kali selama kehamilan.
                                </p>
                            </li>
                            <li>
                                <h3>Sanitasi dan Akses Air Bersih</h3>
                                <p>
                                    Rendahnya akses terhadap pelayanan kesehatan, 
                                    termasuk di dalamnya adalah akses sanitasi dan air bersih, mendekatkan anak pada 
                                    risiko ancaman penyakit infeksi. Untuk itu, perlu membiasakan cuci tangan pakai 
                                    sabun dan air mengalir, serta tidak buang air besar sembarangan.
                                </p>
                            </li>
                        </ol>
                    </Grid>

                    <Grid 
                        item 
                        xs={6} 
                        md={4} 
                        alignItems="center"
                    >
                        <h2>Artikel Lain :</h2>
                        { dummyArticles.filter(article => article.id != id).map(article => (
                            <>
                                <img width={332} src={article.image} />
                                <h3>
                                    <Link 
                                        component={RouterLink} 
                                        to={`/article/${article.id}`}
                                        underline="none"
                                        color="black"
                                    >
                                        {article.title}
                                    </Link>
                                </h3>
                            </>
                        )) }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ArticleDetailPage