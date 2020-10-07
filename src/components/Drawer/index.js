import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaHome, FaUser, FaCode, FaFile, FaAddressBook } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        fontSize: 24
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    viewing: {
        color: theme.palette.primary.main,
    },
    programming: {
        color: theme.palette.secondary.main,
    }
}));


const WebsiteDrawer = props => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                onMouseOver={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
            >
                <List>
                    <ListItem button component={Link} smooth to='/#home'>
                        <ListItemIcon className={clsx({
                            [classes.viewing]: props.location.pathname == '/' && (props.location.hash == '#home' || props.location.hash == ''),
                        })}><FaHome /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button component={Link} smooth to='/#about'>
                        <ListItemIcon className={clsx({
                            [classes.viewing]: props.location.pathname == '/' && props.location.hash == '#about',
                        })}><FaUser /></ListItemIcon>
                        <ListItemText primary='About Me' />
                    </ListItem>
                    <ListItem button component={Link} smooth to='/#contact'>
                        <ListItemIcon className={clsx({
                            [classes.viewing]: props.location.pathname == '/' && props.location.hash == '#contact',
                        })}><FaAddressBook /></ListItemIcon>
                        <ListItemText primary='Contact Me' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component={Link} to='/programming'>
                        <ListItemIcon className={classes.programming}><FaCode /></ListItemIcon>
                        <ListItemText primary='My Programming' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component="a" href="https://drive.google.com/file/d/1hQGB-3WnhvWq-9YGBw5qBOTUkdB6IARd/view?usp=sharing" target="_blank">
                        <ListItemIcon><FaFile /></ListItemIcon>
                        <ListItemText primary='My Resume' />
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>
    )
}


export default WebsiteDrawer;