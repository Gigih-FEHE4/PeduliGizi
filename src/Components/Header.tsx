import { auth } from "../firebase";
import { Button, Link } from "@mui/material"
import { Link as RouterLink, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory()

  const logout = async () => {
    await auth.signOut()
    history.push("/")
  }
  
  const authButton = () => {
    if (auth.currentUser == null) {
      return (
        <>
          <Link to="/login" underline="none" component={RouterLink}>Masuk</Link>
          <Button variant="contained" size="small">
            <Link to="/signup" underline="none" component={RouterLink}>
              Daftar
            </Link>
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button variant="contained" size="small" onClick={logout}>
            Keluar
          </Button>
        </>
      )
    }
  }

  const menuNav = () => {
    const menuList = [
      {
        path: "/home",
        title: "Beranda"
      },
      {
        path: "/menu",
        title: "Menu Makanan"
      },
      {
        path: "/article",
        title: "Artikel"
      },
      {
        path: "/profile",
        title: "Profil"
      },
    ]

    if (auth.currentUser != null) {
      return menuList.map(menu => 
        <Link to={menu.path} underline="none" component={RouterLink}>
          {menu.title}
        </Link>
      )
    } else {
      return <></>
    }
  }

  return (
    <header id="header">
      <img src="../images/Logo.png" alt="" width="60px" height="46px"></img>
        <Link to="/home" underline="none" component={RouterLink}>
          <h2>PeduliGizi</h2>
        </Link>
      <nav>
        {menuNav()}
        {authButton()}
      </nav>
    </header>
    );
  }


  export default Header;
