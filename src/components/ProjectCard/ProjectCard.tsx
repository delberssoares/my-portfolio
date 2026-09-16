import {
  Box,
  Typography,
  styled,
  IconButton,
  Dialog,
  Chip,
  Stack
} from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import AndroidIcon from "@mui/icons-material/Android";

export interface ProjectCardProps {
  title: string;
  srcImages: string[];
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL:
  | string
  | {
    frontend?: string;
    backend?: string;
    mobile?: string;
  };
  hasLivePreview?: boolean;
  category?: "web" | "mobile";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  srcImages,
  description,
  technologies,
  websiteURL,
  codeURL,
  hasLivePreview,
  category = "web",
}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

  const isMobileApp = category === "mobile";
  const techList = technologies.split(",").map((tech) => tech.trim());

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === srcImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? srcImages.length - 1 : prev - 1
    );
  };

  // teclado no modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {

      if (!open) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  // swipe mobile
  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) nextImage();
    else prevImage();
  };

  const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "20px",
    border: `1px solid ${theme.palette.secondary.main}30`,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    overflow: "hidden",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
      borderColor: theme.palette.secondary.main,
    },
  }));

  const ImageFrame = styled(Box)({
    position: "relative",
    overflow: "hidden",
    "& img": {
      display: "block",
      width: "100%",
      height: "210px",
      objectFit: "cover",
      transition: "transform 0.4s ease",
      cursor: "pointer",
    },
    "&:hover img": {
      transform: "scale(1.05)",
    },
    "&:hover .nav-arrow": {
      opacity: 1,
    },
  });

  const NavArrow = styled(IconButton)({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.35)",
    opacity: 0,
    transition: "opacity 0.25s ease",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.55)",
    },
  });

  const LiveBadge = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: "999px",
    letterSpacing: "0.3px",
  }));

  const ContentBox = styled(Box)({
    padding: "18px 20px 20px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  });

  const DescriptionBox = styled(Box)(({ theme }) => ({
    height: "64px",
    overflowY: "auto",
    marginTop: theme.spacing(0.5),
    paddingRight: "6px",
    opacity: 0.85,
  }));

  const TechChip = styled(Chip)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    fontSize: "0.7rem",
    fontWeight: 600,
    height: "24px",
  }));

  const PillButton = styled("button")(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    border: `1px solid ${theme.palette.primary.contrastText}40`,
    borderRadius: "999px",
    padding: "8px 14px",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.25s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  }));

  const PrimaryPillButton = styled(PillButton)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      opacity: 0.9,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <>
      <StyledCard style={{ height: isMobileApp ? "600px" : "500px" }}>

        <ImageFrame>
          <img
            src={srcImages[currentImage]}
            alt={`${title} screenshot`}
            onClick={() => setOpen(true)}
            style={{
              height: isMobileApp ? "340px" : "210px",
              objectFit: isMobileApp ? "contain" : "cover",
              backgroundColor: isMobileApp ? "rgba(0,0,0,0.25)" : undefined,
            }}
          />

          {hasLivePreview && <LiveBadge>LIVE</LiveBadge>}

          {srcImages.length > 1 && (
            <>
              <NavArrow className="nav-arrow" onClick={prevImage} sx={{ left: 8 }}>
                <ArrowBackIosNewIcon fontSize="small" />
              </NavArrow>
              <NavArrow className="nav-arrow" onClick={nextImage} sx={{ right: 8 }}>
                <ArrowForwardIosIcon fontSize="small" />
              </NavArrow>
            </>
          )}
        </ImageFrame>

        <ContentBox>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          <DescriptionBox>
            <Typography variant="body2">{description}</Typography>
          </DescriptionBox>

          <Stack direction="row" flexWrap="wrap" gap={0.75} mt={1.5} mb={2}>
            {techList.map((tech) => (
              <TechChip key={tech} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1} mt="auto">

            {!(typeof codeURL === "object" && codeURL.mobile) && (
              <PrimaryPillButton onClick={() => window.open(websiteURL, "_blank")}>
                <LaunchIcon fontSize="small" />
                {hasLivePreview ? "View Project" : "View Images"}
              </PrimaryPillButton>
            )}

            {typeof codeURL === "string" && (
              <PillButton onClick={() => window.open(codeURL, "_blank")}>
                <GitHubIcon fontSize="small" />
                View Code
              </PillButton>
            )}

            {typeof codeURL === "object" && codeURL.frontend && (
              <PillButton onClick={() => window.open(codeURL.frontend, "_blank")}>
                <GitHubIcon fontSize="small" />
                Frontend
              </PillButton>
            )}

            {typeof codeURL === "object" && codeURL.backend && (
              <PillButton onClick={() => window.open(codeURL.backend, "_blank")}>
                <GitHubIcon fontSize="small" />
                Backend
              </PillButton>
            )}

            {typeof codeURL === "object" && codeURL.mobile && (
              <PrimaryPillButton onClick={() => window.open(codeURL.mobile, "_blank")}>
                <AndroidIcon fontSize="small" />
                Download App
              </PrimaryPillButton>
            )}

          </Stack>
        </ContentBox>

      </StyledCard>

      {/* modal imagem */}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">

        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 5, sm: 8 }, py: 2 }}
        >

          <img
            src={srcImages[currentImage]}
            alt="preview"
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />

          {srcImages.length > 1 && (
            <>
              <NavArrow
                onClick={prevImage}
                sx={{ left: 4, opacity: 1, "&:hover": { backgroundColor: "rgba(0,0,0,0.55)" } }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </NavArrow>
              <NavArrow
                onClick={nextImage}
                sx={{ right: 4, opacity: 1, "&:hover": { backgroundColor: "rgba(0,0,0,0.55)" } }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </NavArrow>
            </>
          )}

        </Box>

      </Dialog>
    </>
  );
};

export default ProjectCard;