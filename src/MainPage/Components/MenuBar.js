import React from 'react';

import Memo from './Memo';
import CreateNewMemoButton from './CreateNewMemoButton';
import RemoveMemoButton from './RemoveMemoButton';


function MenuBar(props){

    return (
        <div>
            <CreateNewMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} />
            <RemoveMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo}/>
            <div>{(props.Memos).map(x => <Memo key={x.CreatedDate} Memo={x} setCurrentMemo={props.setCurrentMemo}  />)}</div>
        </div>
    );
}
export default MenuBar;