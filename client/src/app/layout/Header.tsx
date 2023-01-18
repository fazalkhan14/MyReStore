import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header(props : any) {

    const midLinks = [
        { title: 'catalog', path: '/catalog' },
        { title: 'about', path: '/about' },
        { title: 'contact', path: '/contact' }
    ]
    
    const rightLinks = [
        { title: 'login', path: '/login' },
        { title: 'register', path: '/register' }
    ]

    const navStyles = {
        color: 'inherit',
        textDecoration: 'none',
        typography: 'h6',
        '&:hover': {
            color: 'grey.500'
        },
        '&.active': {
            color: 'text.secondary'
        }
    }

    return (
        <AppBar position='static'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} to='/'
                        sx={navStyles}>
                        RE-STORE
                    </Typography>
                    <Switch onChange={props.onThemeToggle} />
                </Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}