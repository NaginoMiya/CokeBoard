import React from 'react';
import firebase, {db} from '../../Firebase';

import { makeStyles } from '@material-ui/core/styles';

//Button
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    button: {
        width: '80%',
        '& > *': {
            color: '#fffafa',
        }
    },
    //IconButtonsのスタイルです.
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));


function RemoveMemoButton(props){
    const db = firebase.firestore();
    const classes = useStyles();

    const removeMemo = React.useCallback(() => {
        if((props.Memos).length == 0 || props.CurrentMemo == null){
            //エラーハンドリング
            return;
        }
    
        //条件に一致したものを配列に格納し直す‥
        let tmp = (props.Memos).filter(x => (x.CreatedDate != props.CurrentMemo.CreatedDate));
        let DocmentName = (props.Memos).filter(x => (x.CreatedDate == props.CurrentMemo.CreatedDate));

        if(DocmentName.length == 0){
            //2回続けて同じメモを削除しようとした場合のエラーハンドリング.
            //この場合は,他のメモを一度も選択していないのでcurrentMemoが更新されていないので対応する必要がある.
            return;
        }

        props.setMemos(tmp);
    
        let deleteDoc = db.collection(props.uid).doc(String(DocmentName[0].CreatedDate)).delete();
    });

    return (
        <div className={classes.root}>
            <Button
            aria-label="delete"
            onClick={removeMemo}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            >
                Delete Current Memo
            </Button>
        </div>
    );
}
export default RemoveMemoButton;