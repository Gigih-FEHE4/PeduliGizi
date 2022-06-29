import { Container } from "@mui/material"
import Header from "../Components/Header"
import ArticleItem from "../Components/ArticleItem"
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Article } from "../model/Article";

const ArticleListPage = () => {
    const history = useHistory();
    const [articles, setArticles] = useState<Article[]>([])

    const handleClick = (id: string) => {
        history.push(`/article/${id}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const acc: Article[] = []
            const querySnapshot = await getDocs(collection(db, "articles"));
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
    }, [])

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <h1>Artikel</h1>
                {
                    articles && articles.map(article => 
                        <ArticleItem 
                            key={article.id}
                            title={article.title} 
                            desc={article.shortDesc} 
                            image={article.image} 
                            onClick={() => {handleClick(article.id)}}
                        />)
                }
            </Container>
        </>
    )
}

export default ArticleListPage