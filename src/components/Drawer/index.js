import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import { FaHome, FaUser, FaCode, FaFile, FaAddressBook, FaBars, FaChevronLeft } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import onClickOutside from 'react-onclickoutside';
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
        color: theme.palette.secondary.main,
    },
    menu: {
        color: theme.palette.primary.main,
    },
    desktop: {
        display: 'block',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    }
}));


function WebsiteDrawer(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((pastProps) => !pastProps)
    }

    WebsiteDrawer.handleClickOutside = e => {
        if (!open) setOpen(false);
    }

    return (
        <div>
            <div className={classes.desktop}>
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
                    >
                        <List>
                            <ListItem button onClick={toggleDrawer}>
                                <Tooltip title={open ? '' : 'Expand Menu'}><ListItemIcon className={classes.menu}>{open ? <FaChevronLeft /> : <FaBars />}</ListItemIcon></Tooltip>
                                <ListItemText primary='Welcome!' />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button component={Link} smooth to='/#home'>
                                <Tooltip title={open ? '' : 'Home'}><ListItemIcon className={clsx({
                                    [classes.viewing]: props.location.pathname === '/' && (props.location.hash === '#home' || props.location.hash === ''),
                                })}><FaHome /></ListItemIcon></Tooltip>
                                <ListItemText primary='Home' />
                            </ListItem>
                            <ListItem button component={Link} smooth to='/#about'>
                                <Tooltip title={open ? '' : 'About Me'}><ListItemIcon className={clsx({
                                    [classes.viewing]: props.location.pathname === '/' && props.location.hash === '#about',
                                })}><FaUser /></ListItemIcon></Tooltip>
                                <ListItemText primary='About Me' />
                            </ListItem>
                            <ListItem button component={Link} smooth to='/#programming'>
                                <Tooltip title={open ? '' : 'My Programming'}><ListItemIcon className={clsx({
                                    [classes.viewing]: props.location.pathname === '/' && props.location.hash === '#programmming',
                                })}><FaCode /></ListItemIcon></Tooltip>
                                <ListItemText primary='My Projects' />
                            </ListItem>
                            <ListItem button component={Link} smooth to='/#contact'>
                                <Tooltip title={open ? '' : 'Contact Me'}><ListItemIcon className={clsx({
                                    [classes.viewing]: props.location.pathname === '/' && props.location.hash === '#contact',
                                })}><FaAddressBook /></ListItemIcon></Tooltip>
                                <ListItemText primary='Contact Me' />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button component="a" href="https://drive.google.com/file/d/1hQGB-3WnhvWq-9YGBw5qBOTUkdB6IARd/view?usp=sharing" target="_blank">
                                <Tooltip title={open ? '' : 'My Resume'}><ListItemIcon><FaFile /></ListItemIcon></Tooltip>
                                <ListItemText primary='My Resume' />
                            </ListItem>
                        </List>
                    </Drawer>
                </ThemeProvider>
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => WebsiteDrawer.handleClickOutside
};


export default onClickOutside(WebsiteDrawer, clickOutsideConfig);