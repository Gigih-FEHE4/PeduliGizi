import React from "react";
import Header from '../Components/Header'
import MenuTypeItem from "../Components/MenuTypeItem";

const MenuPage = () => {
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
                <MenuTypeItem path="sarapan" pathImage='../images/imagemenu1.png' title="Sarapan Pagi" desc="Rekomendasi Sarapan Pagi yang baik buat Ibunda dan Si Buah Hati" />
                <MenuTypeItem path="makan-siang" pathImage='../images/imagemenu2.png' title="Makan Siang" desc="Rekomendasi Makan Siang yang baik buat Ibunda dan Si Buah Hati" />
                <MenuTypeItem path="makan-malam" pathImage='../images/imagemenu3.png' title="Makan Malam" desc="Rekomendasi Makan Malam yang baik buat Ibunda dan Si Buah Hati" />
                <MenuTypeItem path="bb-booster" pathImage='../images/imagemenu4.png' title="Booster Berat Badan" desc="Informasi mengenai nutrisi booster berat badan untuk buah hati" />
            </ul>
        </div>
        </>
    )
}

export default MenuPage;