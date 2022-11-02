import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    appBar: {
        background: 'linear-gradient(45deg, #663333 30%, #8d5d5d 90%)'
    },
    mainLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit'
        },
    },
}));

const AppToolbar = () => {
    const { classes } = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6">
                        <Link to="/" className={classes.mainLink}>
                            NFT pictures
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    );
};

export default AppToolbar;