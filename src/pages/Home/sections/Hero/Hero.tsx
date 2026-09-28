import Avatar from "../../../../assets/images/avatar.jpg";
import { Grid, Container, Typography, styled, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { ReactTyped } from "react-typed";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.08); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `radial-gradient(circle at 85% 15%, ${theme.palette.secondary.main}26, transparent 55%)`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }));

    const Glow = styled(Box)(({ theme }) => ({
        position: "absolute",
        top: "8%",
        left: "10%",
        width: "80%",
        aspectRatio: "1",
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.main,
        filter: "blur(50px)",
        animation: `${pulse} 4s ease-in-out infinite`,
    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `3px solid ${theme.palette.secondary.main}`,
        animation: `${float} 5s ease-in-out infinite`,
    }));

    const Eyebrow = styled(Typography)(({ theme }) => ({
        display: "table",
        margin: "0 auto 12px",
        padding: "4px 16px",
        borderRadius: "999px",
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.5px",
    }));

    const AnimatedBlock = styled(Box)<{ delay?: number }>(({ delay = 0 }) => ({
        opacity: 0,
        animation: `${fadeInUp} 0.7s ease forwards`,
        animationDelay: `${delay}s`,
    }));

    const ScrollHint = styled(Box)(({ theme }) => ({
        position: "absolute",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        color: theme.palette.primary.contrastText,
        opacity: 0.55,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
        fontSize: "0.75rem",
        transition: "opacity 0.3s ease",
        "&:hover": {
            opacity: 1,
        },
        "& svg": {
            animation: `${bounce} 1.6s ease-in-out infinite`,
        },
    }));

    const downloadPdf = () => {
        const link = document.createElement("a");
        link.href = "/curriculum.pdf";
        link.download = "Delber_Soares_CV.pdf";
        link.click();
    };

    const contactMe = () => {
        window.location.href = "mailto:delberss@hotmail.com?subject=Contato&body=Olá, gostaria de entrar em contato com você.";
    };

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <AnimatedBlock delay={0}>
                            <Box position={"relative"}>
                                <Glow />
                                <Box position={"absolute"} width={"100%"} top={0} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </AnimatedBlock>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <AnimatedBlock delay={0.1}>
                            <Eyebrow>Frontend Developer</Eyebrow>
                        </AnimatedBlock>

                        <AnimatedBlock delay={0.2}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"}>Delber Soares</Typography>
                        </AnimatedBlock>

                        <AnimatedBlock delay={0.35}>
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
                        </AnimatedBlock>

                        <AnimatedBlock delay={0.5}>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} marginTop={2}>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton variant="solid" onClick={contactMe}>
                                        <MailOutlineIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton variant="outline" onClick={downloadPdf}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </AnimatedBlock>
                    </Grid>
                </Grid>
            </Container>

            <ScrollHint onClick={scrollToAbout}>
                <span>About</span>
                <KeyboardArrowDownIcon />
            </ScrollHint>
        </StyledHero>
    )
}

export default Hero