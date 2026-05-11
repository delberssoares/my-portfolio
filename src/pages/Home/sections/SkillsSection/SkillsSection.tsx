import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import { SiJavascript, SiTypescript, SiReact, SiGit, SiHtml5, SiCss3, SiMui } from "react-icons/si";

const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    '&:hover': { backgroundColor: theme.palette.primary.light },
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.3s",
    cursor: "default",
    border: "none"
}));

const skillsSet = [
    { name: "HTML", icon: <SiHtml5 color="#E34F26" size={40} /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" size={40} /> },
    { name: "Javascript", icon: <SiJavascript color="#F7DF1E" size={40} /> },
    { name: "React", icon: <SiReact color="#61DAFB" size={40} /> },
    { name: "Typescript", icon: <SiTypescript color="#3178C6" size={40} /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" size={40} /> },
    { name: "Git", icon: <SiGit color="#F05032" size={40} /> },

];

const SkillsSection: React.FC = () => {
    return (
        <Box
            id="about"
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                minHeight: "180px",
            })}>
            <Container maxWidth="lg">
                <Box id="skills" pt={5} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300} sx={(theme) => ({
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                    })}>
                        Skills
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {skillsSet.map((skill, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 5, sm: 4, md: 3, lg: 2 }}
                        >
                            <StyledCard variant="outlined" sx={{ background: 'transparent' }}>
                                {skill.icon}
                                <Typography fontWeight={500} sx={(theme) => ({
                                    color: theme.palette.primary.contrastText,
                                })}>{skill.name}</Typography>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    );
};

export default SkillsSection;
