import { styled } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
  backgroundColorButtonProject?: string;
  sx?: SxProps<Theme>;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  backgroundColorButtonProject = "#4f8e3e",
  sx,
}) => {
  const ButtonBase = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "6px",
    padding: "8px 16px",
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor:
        backgroundColorButtonProject || theme.palette.secondary.main,
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
