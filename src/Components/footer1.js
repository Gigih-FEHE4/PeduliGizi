/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from './footer1'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function FooterContainer() {
    return (
        <Footer1>
        <Footer1.Wrapper>
        <Footer1.Row>
        <Footer1.Column1>
        <Footer1.Title> <img src = { require("logo.png") }
        alt = ""/> </Footer1.Title> 
        <Footer.Link href = "#"> PeduliGizi 
        </Footer.Link> 
        </Footer1.Column1> 
        <Footer.Column2>
        <Footer.Title> Lainnya 
            </Footer.Title> 
            <Footer.Link href = "./"> Kebijakan PeduliGizi </Footer.Link> 
            <Footer.Link href = "#"> Kebijakan Privasi </Footer.Link> 
            <Footer.Link href = "#"> Kontak Media </Footer.Link> 
            <Footer.Link href = "#"> Syarat & Ketentuan </Footer.Link> 
            <Footer.Link href = "#"> Donasi </Footer.Link> 
            <Footer.Link href = "#"> Tentang Kami </Footer.Link> 
            </Footer.Column2> 
            <Footer.Column3>
        <Footer.Title> Hubungi Kami: </Footer.Title> 
        <Footer.Link href = "#telp"> Telp: +62 123 456 </Footer.Link> 
        <Footer.Link href = "#email"> Email: help @PeduliGizi.com </Footer.Link> 
        <Footer.Link href = "#alamat"> Lokasi: Indonesia </Footer.Link> S 
        <Footer.Wrapper1>
        <Footer.Column5> <Footer.Link href = "https://www.facebook.com/" > < FacebookIcon fontSize = 'large' /> </Footer.Link></Footer.Column5 >
        <Footer.Column5 > < Footer.Link href = "https://www.twitter.com/" > < TwitterIcon fontSize = 'large' /> </Footer.Link></Footer.Column5 >
        <Footer.Column5 > < Footer.Link href = "https://instagram.com/peduligizi.official?igshid=YmMyMTA2M2Y=/" > < InstagramIcon fontSize = 'large' /> </Footer.Link></Footer.Column5 >
        </Footer.Wrapper1> 
        </Footer.Column3> 
        </Footer1.Row> 
        </Footer1.Wrapper>

        <Footer.Wrapper>
        <Footer.Column4 >
        <Footer.Link href = "#"> Copyright© 2022. PeduliGizi.All rights reserved. </Footer.Link> 
        </Footer.Column4> 
        </Footer.Wrapper> 
        </Footer1>
    )
}