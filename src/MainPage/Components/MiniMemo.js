import React from 'react';
import firebase, {db} from '../../Firebase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

//Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//IconButton
import {IconButton, Button} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//MiniMemo全体
import {Card, Grid} from '@material-ui/core/';

//markdown関係
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';//url貼ったりtable作れるようになるやつ
import breaks from 'remark-breaks';//mdでの改行をそのまま改行にしてくれるやつ


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
        width: '30vw',
    },
    //IconButtonsのスタイルです.
    edit: {
        display: 'inline-block',
    },
    // Markdownのスタイル
    markdown: {
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '15px',
        '& > *': {
            textAlign: 'left',
            margin: '0px',
            marginBottom: '3px',
            marginTop: '2px',
        },
        // フォントサイズの変更（保留）
        '& > p': {
            fontSize: "15px",
            margin: '0',
        }
    },
    textBox: {
        height: '60vh',
        width: '100%',
        alignItems: 'center',
        fontSize: '15px',
    },
    root: {
        '& > *': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(1),
            height: '45.5vh',
            overflowY: 'scroll',
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        width: '100%',
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

function MiniMemo(props) {
    const db = firebase.firestore();
    const classes = useStyles();

    //プレースホルダー
    const textareaRef_md = React.useRef(props.Md);


    const sendData = React.useCallback((collectionName) => {

        let tmp = props.CurrentMemo;
        tmp.MiniMemos[props.idx] = textareaRef_md.current.value;

        //var docRef = db.collection(collectionName).doc(tmp.MemoName);
        var docRef = db.collection(collectionName).doc(String(tmp.CreatedDate));
        docRef.set(tmp);

        //props.setMemos([...props.Memos, {MemoName : tmp.MemoName, CreateDate : tmp.CreateDate, MiniMemos : tmp.MiniMemos}]);
    });


    //Edit内容を保存するコールバック関数.
    const SaveMemo = React.useCallback(() => {
        //現在の画面を更新するためにCurrentMemoをupdate
        let tmp = props.CurrentMemo;
        tmp.MiniMemos[props.idx] = textareaRef_md.current.value;
        props.setCurrentMemo(tmp);

        props.setCurrentMemo(props.CurrentMemo);

        console.log(props.CurrentMemo.MiniMemos[props.idx]);

        //ローカルで別のメモに遷移しても大丈夫なようにMemosを更新
        let target_idx = 0;
        for(; target_idx<props.Memos.length; target_idx++){
            if(props.Memos[target_idx].CreatedDate == props.CurrentMemo.CreatedDate){
                break;
            }
        }
        
        tmp = props.Memos;
        (tmp[target_idx]).MiniMemos[props.idx] = textareaRef_md.current.value;
        props.setMemos(tmp);

        sendData(props.uid);
    });
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //メモの内容(md)をセットする.
        //props.setMarkdown(textareaRef_md.current.value);
        SaveMemo();
        setOpen(false);
    };


    return (
        <Grid item xs={3} className={classes.root}>
            <Card className={classes.card} raised={true}>
                {/*  Editボタンです. */}
                <div className={classes.edit}>
                    <IconButton aria-label="delete" onClick={handleOpen}>
                        MEMO{props.idx + 1}<EditIcon />
                    </IconButton>
                </div>

                {/* Markdownです. */}
                <ReactMarkdown plugins={[gfm, breaks]} children={props.CurrentMemo.MiniMemos[props.idx]} className={classes.markdown}/>

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
                        <Grid container className={classes.paper} alignItems="stretch" direction="column" spacing={0}>
                            <Grid item xs={12}>
                                <textarea ref={textareaRef_md} className={classes.textBox}>{props.CurrentMemo.MiniMemos[props.idx]}</textarea>
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton
                                onClick={handleClose}
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForwardIcon />}
                                >
                                    SAVE
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </Fade>
                </Modal>
            </Card>
        </Grid>
    );
}
export default MiniMemo;