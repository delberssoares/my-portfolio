import { styled } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
  backgroundColorButtonProject?: string;
  variant?: "outline" | "solid";
  sx?: SxProps<Theme>;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  backgroundColorButtonProject,
  variant = "outline",
  sx,
}) => {
  const ButtonBase = styled("button")(({ theme }) => ({
    backgroundColor: variant === "solid" ? theme.palette.secondary.main : "transparent",
    border: `1px solid ${variant === "solid" ? theme.palette.secondary.main : theme.palette.primary.contrastText}`,
    borderRadius: "999px",
    padding: "10px 24px",
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: variant === "solid" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
    fontWeight: 600,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: backgroundColorButtonProject || theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    },
  }));

  return (
    <ButtonBase onClick={onClick} style={sx as React.CSSProperties}>
      {children}
    </ButtonBase>
  );
};

export default StyledButton;