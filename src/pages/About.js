import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <Box 
      sx={{ 
        my:16,
        textAlign:"center",
        p:3,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{
          mt:0,
        },
        "& h4":{
          fontSize:"1.5rem",
        },
       }}
      >
        <Typography variant='h4'>
          Welcome to My Resturant
        </Typography>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut placerat, risus eget ultricies sodales, erat diam interdum nisi, 
        id fermentum orci metus et arcu. Pellentesque lacus dolor, varius in 
        fringilla vitae, tincidunt quis ipsum. Phasellus non finibus metus. 
        Cras nec gravida ligula. Donec id ornare justo, eget sagittis dolor. 
        Donec ultricies a odio ac mollis. Quisque iaculis ipsum quis magna 
        vestibulum, nec suscipit quam pretium. Ut vitae libero vestibulum, 
        convallis tortor eu, mollis sem. Nam eu consectetur libero. Duis ut 
        tellus vitae neque vulputate fringilla. Maecenas elementum, metus ut 
        fringilla pulvinar, diam sem fermentum sapien, eget placerat massa 
        sapien quis purus. Praesent non nulla tristique odio blandit lacinia 
        at in ante. Maecenas scelerisque condimentum sem ut semper. 
        Etiam ante tellus, volutpat vitae dolor ornare, dapibus fringilla quam. 
        Cras a justo dui. Nam dapibus tincidunt venenatis.
        </p>
      </Box>
    </Layout>
  )
}

export default About
