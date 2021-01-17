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
import RefreshIcon from '@material-ui/icons/Refresh';
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

function MemoNameChangeButton(props) {
    const db = firebase.firestore();
    const classes = useStyles();

    const [isLimitOver, setIsLimitOver] = React.useState(false);
    
    //プレースホルダー
    const textareaRef_MemoName = React.useRef('');

    //見た目上でのMemoNameを保存します.
    const setMemoName = React.useCallback(() => {
        props.setMemoName(textareaRef_MemoName.current.value);

        //currentMemoのMemoNameを変更.
        let tmp = props.CurrentMemo;
        tmp.MemoName = textareaRef_MemoName.current.value;
        props.setCurrentMemo(tmp);

        //画面上部に表示されているメモの名前を変更.
        props.setTitle(textareaRef_MemoName.current.value);
    });

    //Memosの中の情報を変更します.
    const setMemos = React.useCallback(() => {
        let target_idx = 0;
        for(; target_idx<props.Memos.length; target_idx++){
            if(props.Memos[target_idx].CreatedDate == props.CurrentMemo.CreatedDate){
                break;
            }
        }

        let tmp = props.Memos;
        tmp[target_idx].MemoName = textareaRef_MemoName.current.value;
        props.setMemos(tmp);        
    });

    //DBの中の情報を変更します.
    const updateDB = React.useCallback(() => {
        var docRef = db.collection(props.uid).doc(String(props.CurrentMemo.CreatedDate));
        docRef.set(props.CurrentMemo);
    });

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //40文字を超える場合はエラー
        if(textareaRef_MemoName.current.value.length > 40){
            setIsLimitOver(true);
            return;
        }

        //名前が空白出ないならばメモを作成.
        if(textareaRef_MemoName.current.value != ''){
            setMemoName();
            setMemos();
            updateDB();
        }

        setIsLimitOver(false);
        setOpen(false);
    };


    return (
        <div>
            {/*  名前変更ボタンです. 適当に変えてください */}
            <div className={classes.root}>
                <ColorButton
                aria-label="delete"
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<RefreshIcon/>}
                >
                Change Memo Title!
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
                            <input ref={textareaRef_MemoName} className={classes.input} placeholder="New Memo Title"></input>
                        </Grid>
                        <Grid item xs={2}>
                            <ColorButton
                            onClick={handleClose}
                            variant="contained"
                            color="primary"
                            endIcon={< AddCircleOutlineIcon  />}
                            >
                            Save!
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12}>
                            {isLimitOver ? <h2 className={classes.longtitle}>タイトルが長すぎます.</h2> : null}
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
}
export default MemoNameChangeButton;