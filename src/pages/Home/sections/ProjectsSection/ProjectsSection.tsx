import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const StyledExperience = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));


const projects: ProjectCardProps[] = [
    {
        title: "My Portfolio",
        srcImages: ["/images/preview.png"],
        description: "A modern and responsive portfolio built with React, TypeScript, and Material UI, showcasing my projects, skills, and contact information.",
        technologies: "React, TypeScript, Material UI",
        websiteURL: "https://delber-portfolio.vercel.app/",
        codeURL: "https://github.com/delberss/my-portfolio",
        hasLivePreview: true,
    },
    {
        title: "Cinema Cidade",
        srcImages: ["/images/cinema.png"],
        description: "A modern and responsive platform for selling movie tickets, developed with React, TypeScript, Zustand, and Material UI.",
        technologies: "React, TypeScript, Zustand, Material UI",
        websiteURL: "https://cinema-delberss.vercel.app/",
        codeURL: "https://github.com/delberss/cinema",
        hasLivePreview: true,
    },
    {
        title: "Text Analyzer",
        srcImages: ["/images/text-analyzer.png"],
        description: "A simple, modern, and responsive platform for text analysis, built with React, TypeScript, Styled Components, and Material UI, and integrated with a Python backend for data processing.",
        technologies: "React, TypeScript, Python, FastAPI, Uvicorn,Material UI",
        websiteURL: "https://dss-text-analyzer-frontend.vercel.app/",
        codeURL: {
            frontend: "https://github.com/delberss/dss-text-analyzer-frontend",
            backend: "https://github.com/delberss/dss-text-analyzer-backend"
        },

        hasLivePreview: true,
    },
    {
        title: "Marketplace - DSS Store",
        srcImages: ["/images/dss-store.png"],
        description: "A modern marketplace frontend built with React, featuring user registration, product listing, cart management with Zustand, and a seamless checkout process with contact, shipping details, and Stripe credit card payments.",
        technologies: "React, TypeScript, Node, Express, Stripe API, Zustand",
        websiteURL: "https://github.com/delberss/marketplace/blob/master/README.md",
        codeURL: "https://github.com/delberss/marketplace",
        hasLivePreview: false
    },
    {
        title: "App Mobile - Futebol Explorer",
        srcImages: [
            "/images/mobile/1.jpg",
            "/images/mobile/2.jpg",
            "/images/mobile/3.jpg",
            "/images/mobile/4.jpg",
            "/images/mobile/5.jpg",
            "/images/mobile/6.jpg",
            "/images/mobile/7.jpg",

        ],
        description: "A mobile app with information about the main football clubs in Brazil, including titles and top scorers, with a feature that allows users to compare two clubs side by side.",
        technologies: "React Native, Expo, TypeScript",
        websiteURL: "https://github.com/delberss/marketplace/blob/master/README.md",
        codeURL: {
            mobile: "https://play.google.com/store/apps/details?id=com.delberss.dssapps"
        },
        hasLivePreview: true
    },
];



const ProjectsSection: React.FC = () => {
    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary">My Projects</Typography>
                </Box>
                <Grid container spacing={5} justifyContent="center" pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    srcImages={project.srcImages}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                    hasLivePreview={project.hasLivePreview}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
};

export default ProjectsSection;
