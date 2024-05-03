import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Daniel Costa</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm a Developer WEB</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <CloudDownloadIcon />
                  Download CV</Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <EmailIcon />
                  Contact Me</Button> 
                </Grid>
              </Grid>
              
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
