import React from "react";

class Footer extends React.Component {
    render(){
        return <footer id="footer"> 
        <section class="service">
                <h1 class="heading-service">NEWS</h1>
        </section>
        <section class="image">
            <div class="card-image">
            <img src="../images/beratbadan.png" alt="" width="215px" height="206px"></img>
            </div>
            <div class="card-image2">
            <img src="../images/tinggibadan.png" alt="" width="215px" height="206px"></img>
            </div>
            <div class="card-image3">
            <img src="../images/lingkarkepala.png" alt="" width="215px" height="206px"></img>
            </div>
        </section>
</footer>;
    }
}
 export default Footer;