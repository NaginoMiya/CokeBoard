import React from 'react';
import { withStyles, Button, Box } from '@material-ui/core/';

import MemoNameChangeButton from './MemoNameChangeButton';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#fffafa'),
        margin: '4px',
        backgroundColor: '#fffafa',
        width: '80%',
        '&:hover': {
            backgroundColor: '#cccccc',
        },
        '& > *': {
            textOverflow: "ellipsis",
        },
        textTransform: 'none', //大文字に変換されるのを防ぎます.
    },
}))(Button);

function Memo(props){
    const M = props.Memo;

    //表示しているメモ名を管理するためのstate (即時変更が適用されるようになります.)
    const [MemoName, setMemoName] = React.useState(M.MemoName);

    const handler = React.useCallback(() => {
//        props.setCurrentMemo(M.CreatedDate);
        props.setCurrentMemo(M);
        props.setTitle(MemoName);
        props.setIsHideChangeButton(M.CreatedDate);
    });

    return (
        <div>{/* MamoName ChnageボタンをBoxの外に出すためにdivを追加しました. */}
            <Box component="div">
                <ColorButton variant="contained" onClick={handler}> {MemoName} </ColorButton>
            </Box>

            {/* 名前を変更するボタンです‥ Memoが選択されたときに画面に現れます. */}
            {(props.CurrentMemo != null && props.isHideChangeButton == M.CreatedDate) ?
                <MemoNameChangeButton setMemoName={setMemoName} uid={props.uid} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo}
                Memos={props.Memos} setMemos={props.setMemos} setTitle={props.setTitle} /> : null}
        </div>
        
    );
}
export default Memo;