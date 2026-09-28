import { useMemo, useState } from "react";
import { Box, Container, Grid, Tabs, Tab, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import ComputerIcon from "@mui/icons-material/Computer";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const StyledExperience = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    minHeight: "unset",
    marginBottom: theme.spacing(4),
    "& .MuiTabs-indicator": {
        backgroundColor: theme.palette.secondary.main,
        height: "3px",
        borderRadius: "3px",
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    minHeight: "unset",
    padding: "8px 20px",
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "none",
    color: theme.palette.text.primary,
    opacity: 0.5,
    "&.Mui-selected": {
        color: theme.palette.secondary.main,
        opacity: 1,
    },
}));

// "category" define em qual aba o projeto aparece: "web" (sites/sistemas) ou "mobile" (apps/Play Store)
type Category = "web" | "mobile";

type Project = ProjectCardProps & { category: Category };

const projects: Project[] = [
    {
        category: "web",
        title: "My Portfolio",
        srcImages: ["/images/preview.png"],
        description: "A modern and responsive portfolio built with React, TypeScript, and Material UI, showcasing my projects, skills, and contact information.",
        technologies: "React, TypeScript, Material UI",
        websiteURL: "https://my-portfolio-delberss.vercel.app/",
        codeURL: "https://github.com/delberssoares/my-portfolio",
        hasLivePreview: true,
    },
    {
        category: "web",
        title: "Cinema Cidade",
        srcImages: ["/images/cinema.png"],
        description: "A modern and responsive platform for selling movie tickets, developed with React, TypeScript, Zustand, and Material UI.",
        technologies: "React, TypeScript, Zustand, Material UI",
        websiteURL: "https://my-cinema-delberss.vercel.app/",
        codeURL: "https://github.com/delberssoares/cinema",
        hasLivePreview: true,
    },
    {
        category: "web",
        title: "Text Analyzer",
        srcImages: ["/images/text-analyzer.png"],
        description: "A simple, modern, and responsive platform for text analysis, built with React, TypeScript, Styled Components, and Material UI, and integrated with a Python backend for data processing.",
        technologies: "React, TypeScript, Python, FastAPI, Uvicorn, Material UI",
        websiteURL: "https://text-analyzer-frontend.vercel.app/",
        codeURL: {
            frontend: "https://github.com/delberssoares/text-analyzer-frontend",
            backend: "https://github.com/delberssoares/text-analyzer-backend"
        },
        hasLivePreview: true,
    },
    {
        category: "web",
        title: "Marketplace - DSS Store",
        srcImages: ["/images/dss-store.png"],
        description: "A modern marketplace frontend built with React, featuring user registration, product listing, cart management with Zustand, and a seamless checkout process with contact, shipping details, and Stripe credit card payments.",
        technologies: "React, TypeScript, Node, Express, Stripe API, Zustand",
        websiteURL: "https://github.com/delberssoares/marketplace/blob/main/README.md",
        codeURL: "https://github.com/delberssoares/marketplace",
        hasLivePreview: false
    },
    {
        category: "web",
        title: "Zustand FC",
        srcImages: ["/images/zustand-fc.png"],
        description: "A football squad management app built to study advanced Zustand concepts, including store slices, immer middleware for nested state, undo/redo with zundo, async actions, drag and drop, and unit testing with Vitest.",
        technologies: "React, TypeScript, Vite, Zustand, Immer, Zundo, Vitest",
        websiteURL: "https://zustand-fc.vercel.app/",
        codeURL: "https://github.com/delberssoares/zustand-fc",
        hasLivePreview: true,
    },
    {
        category: "mobile",
        title: "Futebol Explorer",
        srcImages: [
            "/images/mobile-futebol-explorer/tela1.jpg",
            "/images/mobile-futebol-explorer/tela2.jpg",
            "/images/mobile-futebol-explorer/tela3.jpg",
            "/images/mobile-futebol-explorer/tela4.jpg",
            "/images/mobile-futebol-explorer/tela5.jpg",
            "/images/mobile-futebol-explorer/tela6.jpg",
        ],
        description: "A mobile app with information about the main football clubs in Brazil, including titles and top scorers, with a feature that allows users to compare two clubs side by side.",
        technologies: "React Native, Expo, TypeScript",
        websiteURL: "https://github.com/delberssoares/futebol-explorer/blob/main/README.md",
        codeURL: {
            mobile: "https://play.google.com/store/apps/details?id=com.delberss.dssapps"
        },
        hasLivePreview: true
    },
    // Novos apps mobile (ver /areas): ajuste imagens/links reais antes de publicar.
    {
        category: "mobile",
        title: "HistoriQuiz",
        srcImages: [
            "/images/mobile-historiquiz/tela1.png",
            "/images/mobile-historiquiz/tela2.png",
            "/images/mobile-historiquiz/tela3.png",
            "/images/mobile-historiquiz/tela4.png",
            "/images/mobile-historiquiz/tela5.png",
            "/images/mobile-historiquiz/tela6.png",
            "/images/mobile-historiquiz/tela7.png",
            "/images/mobile-historiquiz/tela8.png",
            "/images/mobile-historiquiz/tela9.png",
        ],
        description: "A quiz game where players identify historical figures from photos, built with React Native and Expo.",
        technologies: "React Native, Expo, TypeScript",
        websiteURL: "https://github.com/delberssoares/historiquiz/blob/main/README.md",
        codeURL: {
            mobile: "https://play.google.com/store/apps/details?id=com.delberss.historiquiz"
        },
        hasLivePreview: true
    },
    {
        category: "mobile",
        title: "TransformaPDF",
        srcImages: [
            "/images/mobile-transformaPDF/tela1.png",
            "/images/mobile-transformaPDF/tela2.png",
            "/images/mobile-transformaPDF/tela3.png",
            "/images/mobile-transformaPDF/tela4.png",
            "/images/mobile-transformaPDF/tela5.png",
            "/images/mobile-transformaPDF/tela6.png",
            "/images/mobile-transformaPDF/tela7.png",
            "/images/mobile-transformaPDF/tela8.png",
            "/images/mobile-transformaPDF/tela9.png",
        ],
        description: "An app that converts images to PDF, reads PDF files, and merges multiple PDFs into one.",
        technologies: "React Native, Expo, TypeScript",
        websiteURL: "https://github.com/delberssoares/transformapdf/blob/main/README.md",
        codeURL: {
            mobile: "https://play.google.com/store/apps/details?id=com.delberss.transformapdf"
        },
        hasLivePreview: true
    },
    {
        category: "mobile",
        title: "Gourmet Explorer",
        srcImages: [
            "/images/mobile-gourmet/tela1.png",
            "/images/mobile-gourmet/tela2.png",
            "/images/mobile-gourmet/tela3.png",
            "/images/mobile-gourmet/tela4.png",
        ],
        description: "A suggestions app to help decide what to cook or eat next, built with React Native and Expo.",
        technologies: "React Native, Expo, TypeScript",
        websiteURL: "https://github.com/delberssoares/gourmet-explorer/blob/main/README.md",
        codeURL: {
            mobile: "https://play.google.com/store/apps/details?id=com.delberss.dsssuggestions"
        },
        hasLivePreview: true
    },
];

const ProjectsSection: React.FC = () => {
    const [tab, setTab] = useState<Category>("web");

    const filteredProjects = useMemo(
        () => projects.filter((project) => project.category === tab),
        [tab]
    );

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={1}>
                    <Typography variant="h2" textAlign="center" color="primary">My Projects</Typography>
                </Box>

                <Box display="flex" justifyContent="center">
                    <StyledTabs
                        value={tab}
                        onChange={(_, value) => setTab(value)}
                        textColor="inherit"
                    >
                        <StyledTab value="web" label="Web" icon={<ComputerIcon fontSize="small" />} iconPosition="start" />
                        <StyledTab value="mobile" label="Mobile Apps" icon={<PhoneIphoneIcon fontSize="small" />} iconPosition="start" />
                    </StyledTabs>
                </Box>

                <Grid container spacing={5} justifyContent="center" pb={3}>
                    {filteredProjects.map((project, index) => (
                        <Grid size={{ md: 6 }} key={project.title}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    srcImages={project.srcImages}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                    hasLivePreview={project.hasLivePreview}
                                    category={project.category}
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