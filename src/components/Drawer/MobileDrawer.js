import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { FaHome, FaUser, FaCode, FaFile, FaAddressBook, FaBars, FaChevronLeft } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerButton: {
        color: theme.palette.surfaceBackground.contrastText
    },
    viewing: {
        color: theme.palette.secondary.main,
    },
    menu: {
        color: theme.palette.surfaceBackground.main,
    },
    toolbar: {
        backgroundColor: theme.palette.surfaceBackground.main,
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        },
    },
}));


function WebsiteDrawer(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((pastProps) => !pastProps)
    }

    return (
        <div className={classes.mobile}>
            <ThemeProvider theme={theme}>
                <AppBar postion='fixed'>
                    <Toolbar className={classes.toolbar}>{open ? null : <IconButton className={classes.drawerButton} onClick={toggleDrawer}><FaBars></FaBars></IconButton>}</Toolbar>
                </AppBar>
                <Drawer
                    open={open}
                    onClose={toggleDrawer}
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
                                <Tooltip title={open ? '' : 'My Projects'}><ListItemIcon className={clsx({
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
                    {/* <Divider />
                    <List>
                        <ListItem button component={Link} to='/programming/#timeline'>
                            <Tooltip title={open ? '' : 'My Programming'}><ListItemIcon className={clsx({
                                [classes.viewing]: props.location.pathname === '/programming/',
                            })}><FaCode /></ListItemIcon></Tooltip>
                            <ListItemText primary='My Programming' />
                        </ListItem>
                    </List> */}
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
    )
}


export default WebsiteDrawer;