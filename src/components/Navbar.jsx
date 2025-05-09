import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import './navbar.css'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../redux/utilSlice';

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);


    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const handleChange = (e) => {
        setChecked(e.target.checked);
        if (e.target.checked) {
            dispatch(toggleMode("light"));
        }
        else {
            dispatch(toggleMode("dark"));
        }

    }


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem key={"home"}>
                    <ListItemButton onClick={() => navigate("/")}>

                        <ListItemText primary={"HOME"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem key={"2"}>
                    <ListItemButton onClick={() => navigate("/exchange-rates")}>

                        <ListItemText primary={"EXCHANGE RATES"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem key={"3"}>
                    <ListItemButton onClick={() => navigate("/about")}>

                        <ListItemText primary={"ABOUT"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem key={"4"}>
                    <ListItemButton onClick={() => navigate("/error")}>

                        <ListItemText primary={"ERROR"} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )

    return (
        <>
            <nav id='nav'>
                <div id='logo'>
                    <div>
                        <Button id='menu' onClick={toggleDrawer(true)} color='info' variant='contained' style={{ marginBottom: "5px" }}>
                            <MenuIcon />
                        </Button>
                    </div>
                    Loan Calculator
                </div>
                <ul id='nav-links'>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/exchange-rates">Exchange Rates (Live)</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/error">Error Page</NavLink></li>
                </ul>

                <Switch onChange={handleChange} color='warning' />
            </nav>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default Navbar