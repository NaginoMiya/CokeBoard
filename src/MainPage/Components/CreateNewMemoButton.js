import React from 'react';
import firebase, {db} from '../../Firebase';

import { makeStyles } from '@material-ui/core/styles';


//Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//IconButton
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
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
    },
    //IconButtonsのスタイルです.
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));


function CreateNewMemoButton(props) {
    const db = firebase.firestore();
    const classes = useStyles();
    
    //プレースホルダー
    const textareaRef_MemoName = React.useRef('');


    //メモを作成するコールバック関数
    const createMemo = React.useCallback((collectionName) => {
        var docRef = db.collection(collectionName).doc(textareaRef_MemoName.current.value);
        docRef.set({CreatedDate : new Date().getTime(), MiniMemos : ['', '', '', '', '', '', '', '']});

        props.setMemos([...props.Memos, {MemoName : textareaRef_MemoName.current.value, CreatedDate : new Date().getTime(), MiniMemos : ['', '', '', '', '', '', '', '']}]);
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
                <IconButton aria-label="delete" onClick={handleOpen}>
                    新規作成
                    <DeleteIcon />
                </IconButton>
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
                <div className={classes.paper}>
                    <textarea ref={textareaRef_MemoName}></textarea>
                    <button onClick={handleClose}> Close </button>
                </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default CreateNewMemoButton;