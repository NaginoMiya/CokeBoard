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
    },
    //IconButtonsのスタイルです.
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function MiniMemo(props) {
    const db = firebase.firestore();
    const classes = useStyles();

    //プレースホルダー
    const textareaRef_md = React.useRef(props.Md);


    const sendData = React.useCallback((collectionName) => {

        let tmp = props.CurrentMemo;
        tmp.MiniMemos[props.idx] = textareaRef_md.current.value;

        var docRef = db.collection(collectionName).doc(tmp.MemoName);
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
            if(props.Memos[target_idx].CreateDate == props.CurrentMemo.CreateDate){
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
        <div>

            

            {/*  Editボタンです. */}
            <div className={classes.root}>
                <IconButton aria-label="delete" onClick={handleOpen}>
                    Editボタン{props.idx}<DeleteIcon />
                </IconButton>
            </div>

            {/* Markdownです. */}
            <ReactMarkdown plugins={[gfm, breaks]} children={props.CurrentMemo.MiniMemos[props.idx]} />

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
                    <textarea ref={textareaRef_md}>{props.CurrentMemo.MiniMemos[props.idx]}</textarea>
                    <button onClick={handleClose}> SAVE </button>
                </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default MiniMemo;