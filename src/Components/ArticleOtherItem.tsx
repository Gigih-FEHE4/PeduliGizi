import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

interface ArticleOtherItemProps {
    id: string,
    title: string,
    image: string,
}
const ArticleOtherItem = ({id, title, image} : ArticleOtherItemProps) => {
  return (
    <>
        <img width={332} src={image} />
        <h3>
            <Link 
                component={RouterLink} 
                to={`/article/${id}`}
                underline="none"
                color="black"
            >
                {title}
            </Link>
        </h3>
    </>
  )
}

export default ArticleOtherItem