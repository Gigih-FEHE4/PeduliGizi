import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
interface MenuTypeItemProps {
    pathImage: string, 
    title: string, 
    desc: string,
    path: string
}

const MenuTypeItem = ({ pathImage, title, desc, path }: MenuTypeItemProps) => {
    return (
        <>
        <li style={{
            height: "326px",
            maxHeight:"326px",
            padding:"4px",
            border: "2px solid #d45555",
            borderRadius: "10px",
        }}>
            <img src={pathImage} style={{
                width:"100%",
                height:"65%",
                maxHeight:"65%",
                background:"white"
            }}></img>
            <div style={{
                width: "100%",
                height: "35%",
                display:"flex",
                flexDirection: "column",
            }}>
                <h4 style={{
                    margin: 0,
                    fontWeight: "600",
                    fontSize: "1.7vw",
                    wordBreak:"break-word",
                }}>{title}</h4>
                <p style={{
                    margin:0,
                    wordBreak:"break-word",
                    textAlign: "justify"
                }}>
                    {desc}
                </p>
                <Link 
                    to={`/menu/type/${path}`} 
                    component={RouterLink} 
                    underline="hover" 
                    sx={{margin: "auto 0 5px auto", fontStyle: "italic", fontSize: "14px"}}
                >
                    Pelajari Selengkapnya
                </Link>
            </div>
        </li>
        </>
    )
}

export default MenuTypeItem