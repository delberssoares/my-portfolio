import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { calculateAge } from "../../../../utils/functions";

const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px",
    textAlign: "center",
    marginBottom: "10px",
    '&:hover': { backgroundColor: theme.palette.secondary.light },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    minHeight: "150px",
    height: "100%",
}));


const AboutSection: React.FC = () => {
    const age = calculateAge("16/04/1999");

    return (
        <Box
            id="about"
            sx={{ mt: 4 }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" mb={3}>
                    About me
                </Typography>

                <Grid container spacing={2} justifyContent="center" pb={3} >

                    <Grid size={{ xs: 9, md: 3, sm: 6 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined" sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                            })}>
                                <WorkspacePremiumIcon />
                                <Typography fontWeight={600}>Experience</Typography>
                                <Typography>3+ years</Typography>
                                <Typography>Software Engineer</Typography>
                                <Typography>Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 3, sm: 6 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined" sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                            })}>
                                <SchoolIcon />
                                <Typography fontWeight={600}>Education</Typography>
                                <Typography>Bachelor’s Degree</Typography>
                                <Typography>Information Systems</Typography>
                                <Typography>Federal University of Juiz de Fora</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>

                </Grid>

                <Typography
                    sx={{
                        maxWidth: "800px",
                        margin: "40px auto",
                        lineHeight: 1.8,
                        textAlign: "justify",
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        color: "#333"
                    }}
                >
                    My name is Delber Silveira Soares, I’m {age} years old and I hold a Bachelor’s degree in Information Systems from the Federal University of Juiz de Fora (2019–2024). I have a strong interest in the visual side of technology, which led me to specialize in Frontend development, working as a Systems Analyst with a focus on web development, mainly using React JS. Currently, I am looking to expand my knowledge in Backend development to create full-stack applications.
                </Typography>
            </Container>
        </Box>
    );
};

export default AboutSection;
