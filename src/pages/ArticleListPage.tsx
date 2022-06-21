import { Container } from "@mui/material"
import Header from "../Components/Header"
import ArticleItem from "../Components/ArticleItem"

const ArticleListPage = () => {
    const dummyArticles = [
        {
            title: "Cegah Stunting dengan Perbaikan Pola Makan, Pola Asuh dan Sanitasi",
            desc: "Sebagian besar masyarakat mungkin belum memahami istilah yang disebut stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak lebih rendah atau pendek (kerdil) dari standar usianya....",
            image: "https://dinkes.pekalongankota.go.id/upload/halaman/halaman_20190328114513.png"
        },
        {
            title: "Berkenalan dengan Stunting: Penyebab, Dampak, dan Pencegahannya",
            desc: "Proses tumbuh kembang anak tak hanya berlangsung pesat ketika anak memasuki usia balita.  Seribu hari pertama kehidupan anak justru menjadi momen penting yang memengaruhi tumbuh kembangnya di masa anak-anak hingga beranjak dewasa. Hingga kini, masalah anak stunting masih menjadi momok menakutkan yang menghantui anak-anak di berbagai belahan dunia, termasuk Indonesia....",
            image: "https://static.republika.co.id/uploads/images/inpicture_slide/ilustrasi_200928222258-299.jpg"
        },
        {
            title: "Kebutuhan Nutrisi Gizi Ibu Hamil Yang Harus Dipenuhi",
            desc: "Asupan gizi ibu hamil menjadi faktor penting baik untuk pemenuhan nutrisi ibu hamil atau pun untuk pertumbuhan dan perkembangan janin dalam kandungan. Bahkan, dapat mengurangi risiko penyakit kronis pada anak Anda di masa mendatang. Yuk, simak daftar asupan gizi ibu hamil yang harus dipenuhi berikut ini.",
            image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1626582186/attached_image/inilah-alasan-mengapa-ibu-hamil-mengalami-ngidam.jpg"
        }
    ];
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                {
                    dummyArticles.map(article => 
                        <ArticleItem 
                            title={article.title} 
                            desc={article.desc} 
                            image={article.image} 
                            onClick={() => {}}
                        />)
                }
            </Container>
        </>
    )
}

export default ArticleListPage