/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
//...other imports
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import React from "react";

class Login extends React.Component {
      render () {
        return (
      <login id="login">
        <section class="courses">
        </section>
        <img src="../images/Logo.png" alt="" width="60px" height="46px"></img>
        <h2>PeduliGizi</h2>
        <nav>
          <div class="chevron-down">
        <i class='bx bx-chevron-down'></i>
        </div>
        <section class="login">
          </section>
<Sheet
  variant="outlined"
  sx={
    {
      // ...
    }
  }
>
  ...typography
  <TextField
    // html input attribute
    name="email"
    type="email"
    placeholder="johndoe@email.com"
    // pass down to FormLabel as children
    label="Email"
  />
  <TextField
    name="password"
    type="password"
    placeholder="password"
    label="Password"
  />
</Sheet>;

<Sheet
  variant="outlined"
  sx={
    {
      // ...
    }
  }
>
  ...typography and text-fields
  <Button
    sx={{
      mt: 1, // margin top
    }}
  >
    Log in
  </Button>
  <Typography
    endDecorator={<Link href="/sign-up">Sign up</Link>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
  >
    Don't have an account?
  </Typography>
</Sheet>;
</nav>
</login>
      )};
  }
  export default Login;