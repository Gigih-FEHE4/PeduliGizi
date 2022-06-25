import React from "react";
import Header from '../Components/Header'

class MenuPage extends React.Component {
    item(pathImage,title,desc){
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
                    <a href="#" style={{
                        margin:"auto 0 5px auto",
                        textDecoration:"none",
                        fontStyle: "italic",
                        fontSize: "14px",
                    }}>Pelajari Selengkapnya</a>
                </div>
            </li>
            </>
        )
    }

    render() {
        return (
            <>
            <Header />
            <div style={{
                padding: "0 50px",
            }}>
                <h3 style={{
                    fontFamily: 'Rockwell',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "27px",
                    lineHeight: "42px",
                    display: "flex",
                    alignItems: "center",
                }}>Daftar Menu</h3>
                <ul style={{
                    width:"100%",
                    minHeight:"100vh",
                    display: "grid",
                    listStyle: "none",
                    padding: "0",
                    gap:"40px 132px",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  
                }}>
                {this.item('../images/imagemenu1.png',"Sarapan Pagi","Rekomendasi Sarapan Pagi yang baik buat Ibunda dan Si Buah Hati")}
                {this.item('../images/imagemenu2.png',"Makan Siang","Rekomendasi Makan Siang yang baik buat Ibunda dan Si Buah Hati")}
                {this.item('../images/imagemenu3.png',"Makan Malam","Rekomendasi Makan Malam yang baik buat Ibunda dan Si Buah Hati")}
                    
                {this.item('../images/imagemenu4.png',"Booster Berat Badan","Informasi mengenai nutrisi booster berat badan untuk buah hati")}

                </ul>
            </div>
            </>
        )
    }
}

export default MenuPage;