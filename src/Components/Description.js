import React from "react";

class Description extends React.Component {
    render(){
        return <description id="description"> 
        <div class="content">
            <img src="../images/Logo.png" alt="" width="60px" height="46px"></img>
            <h2>PeduliGizi</h2>
            <h3>Hubungi Kami</h3>
            <h4>©PeduliGizi, 2022. ALL RIGHTS RESERVED</h4>
            <h5>Lainnya:</h5>
            <h6>Follow Us</h6>
          <nav>
          <a href="/#">help@PeduliGizi.com</a>
          <a href="/#">Kebijakan PeduliGizi</a>
          <a href="/#">Kebijakan Privasi</a>
          <a href="/#">Kontak Media</a>
          <a href="/#">Syarat & Ketentuan</a>
        </nav>
        </div>
        
</description>;
    }
}
 export default Description;