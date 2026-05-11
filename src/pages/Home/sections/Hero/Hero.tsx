import Avatar from "../../../../assets/images/avatar.jpg";
import { Grid, Container, Typography, styled, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { ReactTyped } from "react-typed";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    const downloadPdf = () => {
        const link = document.createElement("a");
        link.href = "/curriculum.pdf";
        link.download = "Delber_Soares_CV.pdf";
        link.click();
    };

    const contactMe = () => {
        window.location.href = "mailto:delberss@hotmail.com?subject=Contato&body=Olá, gostaria de entrar em contato com você.";
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"100%"} top={0} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"}>Delber Soares</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>
                                <ReactTyped
                                    strings={[
                                        "I'm a Front-End Developer",
                                        "I develop efficient solutions",
                                        "I turn ideas into code"
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={30}
                                    backDelay={2000}
                                    loop
                                />
                            </Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} marginTop={2}>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={downloadPdf}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={contactMe}>
                                        <MailOutlineIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
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
