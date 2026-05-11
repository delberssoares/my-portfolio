import {
  Box,
  Grid,
  Typography,
  styled,
  IconButton,
  Dialog
} from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StyledButton from "../StyledButton/StyledButton";

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  srcImages,
  description,
  technologies,
  websiteURL,
  codeURL,
  hasLivePreview,
}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

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

  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "200px",
    padding: "10px 0",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: "220px",
    },
  }));

  const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "12px",
    border: `1px solid ${theme.palette.secondary.main}`,
    background: `linear-gradient(60deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 120%)`,
    color: theme.palette.primary.contrastText,
    padding: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "450px",
    "&:hover": {
      transform: "translateY(-6px) scale(1.01)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
      borderColor: theme.palette.secondary.light,
    },
  }));

  const DescriptionBox = styled(Box)(({ theme }) => ({
    height: "70px",
    overflowY: "auto",
    marginTop: theme.spacing(1),
    paddingRight: "6px",
  }));

  return (
    <>
      <StyledCard>

        <Box>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          <Box position="relative">

            <StyledImg
              src={srcImages[currentImage]}
              alt={`${title} screenshot`}
              onClick={() => setOpen(true)}
            />

            {srcImages.length > 1 && (
              <>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>

                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}

          </Box>

          <DescriptionBox>
            <Typography variant="body2">{description}</Typography>
          </DescriptionBox>
        </Box>

        <Typography fontWeight={600} mt={1}>
          Technologies: {technologies}
        </Typography>

        <Grid container spacing={1} pt={1}>

          {!(typeof codeURL === "object" && codeURL.mobile) && (
            <Grid size={{ xs: 6 }}>
              <StyledButton onClick={() => window.open(websiteURL, "_blank")}>
                {hasLivePreview ? "View Project" : "View Images"}
              </StyledButton>
            </Grid>
          )}

          <Grid size={{ xs: 6 }}>

            {typeof codeURL === "string" && (
              <StyledButton
                onClick={() => window.open(codeURL, "_blank")}
                backgroundColorButtonProject={"white"}
                sx={{ width: "100%" }}
              >
                View Code
              </StyledButton>
            )}

            {typeof codeURL === "object" && (

              <Grid container spacing={1}>

                {codeURL.frontend && (
                  <Grid size={{ xs: 6 }}>
                    <StyledButton
                      onClick={() => window.open(codeURL.frontend, "_blank")}
                      backgroundColorButtonProject={"white"}
                      sx={{ width: "100%" }}
                    >
                      Frontend
                    </StyledButton>
                  </Grid>
                )}

                {codeURL.backend && (
                  <Grid size={{ xs: 6 }}>
                    <StyledButton
                      onClick={() => window.open(codeURL.backend, "_blank")}
                      backgroundColorButtonProject={"white"}
                      sx={{ width: "100%" }}
                    >
                      Backend
                    </StyledButton>
                  </Grid>
                )}

                {codeURL.mobile && (
                  <Grid size={{ xs: 6 }}>
                    <StyledButton
                      onClick={() => window.open(codeURL.mobile, "_blank")}
                      backgroundColorButtonProject={"white"}
                      sx={{ width: "100%" }}
                    >
                      Download App
                    </StyledButton>
                  </Grid>
                )}

              </Grid>

            )}
          </Grid>
        </Grid>

      </StyledCard>

      {/* modal imagem */}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">

        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          display="flex"
          justifyContent="center"
        >

          <img
            src={srcImages[currentImage]}
            alt="preview"
            style={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />

        </Box>

      </Dialog>
    </>
  );
};

export default ProjectCard;