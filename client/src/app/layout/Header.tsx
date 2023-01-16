import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header(props : any) {

    return (
        <AppBar position="static" sx={{mb : 4}}>
            <Toolbar>
                <Typography variant="h6">
                    Re-Store
                </Typography>
                <Switch {...label} onChange={props.onThemeToggle}/>
            </Toolbar>
        </AppBar>
    )
}