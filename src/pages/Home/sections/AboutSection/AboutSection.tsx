import { Box, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { calculateAge } from "../../../../utils/functions";

const InfoCard = styled(Box)(({ theme }) => ({
    borderRadius: "20px",
    border: `1px solid ${theme.palette.secondary.main}33`,
    backgroundColor: "rgba(255,255,255,0.03)",
    padding: "32px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    height: "100%",
    transition: "all 0.3s ease",
    "&:hover": {
        borderColor: theme.palette.secondary.main,
        backgroundColor: "rgba(255,255,255,0.06)",
        transform: "translateY(-6px)",
    },
}));

const IconBadge = styled(Box)(({ theme }) => ({
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginBottom: "8px",
    "& svg": {
        fontSize: "28px",
    },
}));

const Eyebrow = styled(Typography)(({ theme }) => ({
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
}));

const BioWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    maxWidth: "800px",
    margin: "48px auto 0",
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(4),
    },
}));

const AccentBar = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: 0,
    top: "4px",
    bottom: "4px",
    width: "3px",
    borderRadius: "3px",
    backgroundColor: theme.palette.secondary.main,
}));

const AboutSection: React.FC = () => {
    const age = calculateAge("16/04/1999");

    return (
        <Box
            id="about"
            sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.primary.contrastText,
                py: 8,
            })}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" mb={5} color="inherit">
                    About me
                </Typography>

                <Grid container spacing={3} justifyContent="center" pb={3}>

                    <Grid size={{ xs: 10, sm: 6, md: 4 }} sx={{ display: "flex", "& > *": { width: "100%" } }}>
                        <AnimationComponent moveDirection="right">
                            <InfoCard>
                                <IconBadge>
                                    <WorkspacePremiumIcon />
                                </IconBadge>
                                <Eyebrow>Experience</Eyebrow>
                                <Typography variant="h5" fontWeight={700}>4+ years</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.75 }}>
                                    Software Engineer · Frontend Development
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 10, sm: 6, md: 4 }} sx={{ display: "flex", "& > *": { width: "100%" } }}>
                        <AnimationComponent moveDirection="left">
                            <InfoCard>
                                <IconBadge>
                                    <SchoolIcon />
                                </IconBadge>
                                <Eyebrow>Education</Eyebrow>
                                <Typography variant="h5" fontWeight={700}>Bachelor's Degree</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.75 }}>
                                    Information Systems · UFJF
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 10, sm: 6, md: 4 }} sx={{ display: "flex", "& > *": { width: "100%" } }}>
                        <AnimationComponent moveDirection="right">
                            <InfoCard>
                                <IconBadge>
                                    <TranslateIcon />
                                </IconBadge>
                                <Eyebrow>Languages</Eyebrow>
                                <Typography variant="h5" fontWeight={700}>Portuguese (Native)</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.75 }}>
                                    English · strong reading, basic conversation, understands slow speech
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                </Grid>

                <BioWrapper>
                    <AccentBar />
                    <Typography
                        sx={{
                            lineHeight: 1.8,
                            textAlign: "justify",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                            opacity: 0.85,
                        }}
                    >
                        My name is Delber Silveira Soares, I'm {age} years old and I hold a Bachelor's degree in Information Systems from the Federal University of Juiz de Fora (2019–2024). I have a strong interest in the visual side of technology, which led me to specialize in Frontend development, working as a Systems Analyst with a focus on web development, mainly using React JS. Currently, I am looking to expand my knowledge in Backend development to create full-stack applications.
                    </Typography>
                </BioWrapper>
            </Container>
        </Box>
    );
};

export default AboutSection;