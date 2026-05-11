import { AppBar, IconButton, MenuItem, Toolbar, Box, Menu, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function NavBar() {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleScrollTo = (sectionId: string) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            const yOffset = -80; 
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = ["About", "Skills", "Projects"];
    return (
        <AppBar position="fixed" elevation={1}>
            <StyledToolBar variant="dense">
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item}
                            onClick={() => handleScrollTo(item)}
                            sx={(theme) => ({
                                fontWeight: 500,
                                '&:hover': { color: theme.palette.secondary.main },
                                cursor: 'pointer',
                            })}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                            sx: {
                                left: 'unset !important',
                                right: '16px',
                            },
                        }}
                    >
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item}
                                onClick={() => {
                                    handleScrollTo(item);
                                    handleMenuClose();
                                }}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </StyledToolBar>
        </AppBar>
    );
}
