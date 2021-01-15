import React from 'react';

import Memo from './Memo';
import CreateNewMemoButton from './CreateNewMemoButton';
import RemoveMemoButton from './RemoveMemoButton';


function MenuBar(props){

    return (
        <div>
            <CreateNewMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} />
            <RemoveMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo}/>
            <div>{(props.Memos).map(x => <Memo key={x.CreatedDate} CreatedDate={x.CreatedDate} MemoName={x.MemoName} MiniMemo_A={x.MiniMemo_A} setCurrentMemo={props.setCurrentMemo}  />)}</div>
        </div>
    );
}
export default MenuBar;