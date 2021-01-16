import React from 'react';
import firebase, {db} from '../../Firebase';

import { makeStyles, withStyles } from '@material-ui/core/styles';


//Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {Fade, Grid} from '@material-ui/core/';

//Button
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        alignItems: 'center',
        fontSize: '30px',
    },
    //Modalのスタイルです.
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '50%',
    },
    //IconButtonsのスタイルです.
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
            width: '80%',
            color: theme.palette.getContrastText(green[500]),
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
            '& > *': {
                color: '#fffafa',
            }
        },
}))(Button);

function CreateNewMemoButton(props) {
    const db = firebase.firestore();
    const classes = useStyles();
    
    //プレースホルダー
    const textareaRef_MemoName = React.useRef('');


    //メモを作成するコールバック関数
    const createMemo = React.useCallback((collectionName) => {
        let date = new Date().getTime();
        var docRef = db.collection(collectionName).doc(String(date));
        docRef.set({MemoName : textareaRef_MemoName.current.value, CreatedDate : date, MiniMemos : ['', '', '', '', '', '', '', '']});

        props.setMemos([...props.Memos, {MemoName : textareaRef_MemoName.current.value, CreatedDate : date, MiniMemos : ['', '', '', '', '', '', '', '']}]);
    });


    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //名前が空白出ないならばメモを作成.
        if(textareaRef_MemoName.current.value != ''){
            createMemo(props.uid);
        }

        setOpen(false);
    };


    return (
        <div>
            {/*  新規作成ボタンです. 適当に変えてください */}
            <div className={classes.root}>
                <ColorButton
                aria-label="delete"
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon />}
                >
                Add New Memo
                </ColorButton>
            </div>


            {/* Modalです. */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                disableBackdropClick={true}
            >
                <Fade in={open}>
                    <Grid container className={classes.paper} spacing={4}>
                        <Grid item xs={10}>
                            <input ref={textareaRef_MemoName} className={classes.input} placeholder="Memo Title"></input>
                        </Grid>
                        <Grid item xs={2}>
                            <ColorButton
                            onClick={handleClose}
                            variant="contained"
                            color="primary"
                            endIcon={<AddCircleOutlineIcon />}
                            >
                            ADD
                            </ColorButton>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
}
export default CreateNewMemoButton;