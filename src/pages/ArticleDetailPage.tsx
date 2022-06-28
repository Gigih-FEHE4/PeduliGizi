import { Container, Grid, Link, Box } from "@mui/material";
import { getDocs, getDoc, collection, query, limit, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Header from "../Components/Header";
import { db } from "../firebase";
import { Article } from "../model/Article";
import ArticleOtherItem from "../Components/ArticleOtherItem";

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
    const [articles, setArticles] = useState<Article[]>([])
    const [article, setArticle] = useState<Article>()

    useEffect(() => {
        const fetchData = async () => {
            const docSnap = await getDoc(doc(db, "articles", id))
            const data = docSnap.data() as {title: string, content: string, image: string, shortDesc: string}
            setArticle({
                id: docSnap.id,
                title: data.title,
                content: data.content,
                image: data.image,
                shortDesc: data.shortDesc
            })
        }
        const fetchOtherData = async () => {
            const acc: Article[] = []
            const querySnapshot = await getDocs(query(collection(db, "articles"), limit(3)));
            querySnapshot.forEach((doc) => {
                const data = doc.data() as {title: string, content: string, image: string, shortDesc: string}
                acc.push({
                    id: doc.id,
                    title: data.title,
                    content: data.content,
                    image: data.image,
                    shortDesc: data.shortDesc
                })
            });
            setArticles(acc)
        }
        fetchData()
        fetchOtherData()
    }, [id])

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                <h2>{article?.title}</h2>
                <Grid container spacing={10}>
                    <Grid item xs={6} md={8}>
                        <img width={780} alt="article thumbnail" src={article?.image} />
                        {parse(article?.content ?? "")}
                    </Grid>

                    <Grid 
                        item 
                        xs={6} 
                        md={4} 
                        alignItems="center"
                    >
                        <h2>Artikel Lain :</h2>
                        { articles && articles.filter(article => article.id != id).map(article => (
                            <ArticleOtherItem 
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                image={article.image}
                            />
                        )) }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ArticleDetailPage