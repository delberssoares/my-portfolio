import { Grid, styled, Typography, IconButton, Link } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/delberss/",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} />,
    url: "https://github.com/delberss",
  },
  {
    name: "Email",
    icon: <MdEmail size={28} />,
    url: "mailto:delberss@hotmail.com",
  },
];

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "16px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const IconContainer = styled("div")(({  }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.light,
    transform: "scale(1.1)",
  },
}));

const FooterSection = () => {
  return (
    <StyledFooter>
      <Grid container justifyContent="center">
        <Grid size={{xs:12}}>
          <IconContainer>
            {SOCIAL_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIconButton aria-label={item.name}>
                  {item.icon}
                </StyledIconButton>
              </Link>
            ))}
          </IconContainer>
        </Grid>

        <Grid size={{xs:12}}>
          <Typography
            variant="body2"
            align="center"
            color="secondary"
            sx={{ mt: 1 }}
          >
            © {new Date().getFullYear()} Delber Silveira Soares -  All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default FooterSection;