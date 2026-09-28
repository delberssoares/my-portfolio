import { Box, Container, Typography, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import { SiJavascript, SiTypescript, SiReact, SiGit, SiHtml5, SiCss3, SiMui } from "react-icons/si";

const skillsSet = [
    { name: "HTML", icon: <SiHtml5 color="#E34F26" size={38} /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" size={38} /> },
    { name: "Javascript", icon: <SiJavascript color="#F7DF1E" size={38} /> },
    { name: "React", icon: <SiReact color="#61DAFB" size={38} /> },
    { name: "Typescript", icon: <SiTypescript color="#3178C6" size={38} /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" size={38} /> },
    { name: "Git", icon: <SiGit color="#F05032" size={38} /> },
];

const loopedSkills = [...skillsSet, ...skillsSet];

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const MarqueeViewport = styled(Box)({
    overflow: "hidden",
    width: "100%",
    padding: "10px 0",
    maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
});

const MarqueeTrack = styled(Box)({
    display: "flex",
    width: "max-content",
    gap: "20px",
    animation: `${scroll} 22s linear infinite`,
    willChange: "transform",
    "&:hover": {
        animationPlayState: "paused",
    },
});

const SkillPill = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    minWidth: "130px",
    padding: "22px 18px",
    borderRadius: "16px",
    border: `1px solid ${theme.palette.secondary.main}33`,
    backgroundColor: "rgba(255,255,255,0.03)",
    transition: "all 0.3s ease",
    "&:hover": {
        borderColor: theme.palette.secondary.main,
        backgroundColor: "rgba(255,255,255,0.06)",
        transform: "translateY(-4px)",
    },
}));

const SkillsSection: React.FC = () => {
    return (
        <Box
            id="about"
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                minHeight: "180px",
            })}>
            <Container maxWidth="lg" disableGutters>
                <Box id="skills" pt={5} mb={4} textAlign="center">
                    <Typography variant="h3" fontWeight={300} color="primary.contrastText">
                        Skills
                    </Typography>
                </Box>

                <MarqueeViewport>
                    <MarqueeTrack>
                        {loopedSkills.map((skill, index) => (
                            <SkillPill key={`${skill.name}-${index}`}>
                                {skill.icon}
                                <Typography fontWeight={500} color="primary.contrastText">
                                    {skill.name}
                                </Typography>
                            </SkillPill>
                        ))}
                    </MarqueeTrack>
                </MarqueeViewport>
            </Container>
            <Box pb={5} />
        </Box>
    );
};

export default SkillsSection;