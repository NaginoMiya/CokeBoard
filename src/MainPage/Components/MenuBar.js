import React from 'react';

import Memo from './Memo';
import CreateNewMemoButton from './CreateNewMemoButton';
import RemoveMemoButton from './RemoveMemoButton';
import Typography from '@material-ui/core/Typography';
import './MenuBar.css';


function MenuBar(props){

    return (
        <div className="Menu-Bar">
            <Typography variant="h5" className="site-title-menu-bar"> 🥤Coke Board </Typography>
            <CreateNewMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} />
            <RemoveMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo}/>
            <Typography variant="h6" className="menu-bar-memo"> MEMO </Typography>
            <div className="Memo">{(props.Memos).map(x => <Memo key={x.CreatedDate} Memo={x} setCurrentMemo={props.setCurrentMemo}  />)}</div>
        </div>
    );
}
export default MenuBar;