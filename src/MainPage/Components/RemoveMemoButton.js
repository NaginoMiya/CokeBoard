import React from 'react';
import firebase, {db} from '../../Firebase';

import { makeStyles } from '@material-ui/core/styles';

//IconButton
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
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
        if((props.Memos).length == 0){
            //エラーハンドリング
            return;
        }
    
        //条件に一致したものを配列に格納し直す‥
        let tmp = (props.Memos).filter(x => (x.CreatedDate != props.CurrentMemo));
        let DocmentName = (props.Memos).filter(x => (x.CreatedDate == props.CurrentMemo));

        if(DocmentName.length == 0){
            //2回続けて同じメモを削除しようとした場合のエラーハンドリング.
            //この場合は,他のメモを一度も選択していないのでcurrentMemoが更新されていないので対応する必要がある.
            return;
        }

        props.setMemos(tmp);
    
        let deleteDoc = db.collection(props.uid).doc(DocmentName[0].MemoName).delete();
    });

    return (
        <div className={classes.root}>
            <IconButton aria-label="delete" onClick={removeMemo}>
                CurrentMemoを削除<DeleteIcon />
            </IconButton>
        </div>
    );
}
export default RemoveMemoButton;