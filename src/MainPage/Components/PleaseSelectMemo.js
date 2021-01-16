import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: '10vw',
    },
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        height: '45.5vh',
        alignItems: 'center',
    },
}));

function PleaseSelectMemo(props){
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <h1 className={classes.text}>Please Select Memo</h1>
        </Box>
    );
}
export default PleaseSelectMemo;