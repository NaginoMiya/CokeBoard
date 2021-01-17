import React from 'react';

import Memo from './Memo';
import CreateNewMemoButton from './CreateNewMemoButton';
import RemoveMemoButton from './RemoveMemoButton';
import Typography from '@material-ui/core/Typography';
import './MenuBar.css';


function MenuBar(props){

    const [isHideChangeButton, setIsHideChangeButton] = React.useState(null);

    return (
        <div className="Menu-Bar">
            <Typography variant="h5" className="site-title-menu-bar"> 🥤Coke Board </Typography>
            <CreateNewMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} />
            <RemoveMemoButton uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo}/>
            <Typography variant="h6" className="menu-bar-memo"> MEMO </Typography>

            {/* メニューバーに並んでいるボタンを生成します. */}
            <div className="Memo">
                {(props.Memos).map(x => <Memo key={x.CreatedDate} uid={props.uid} Memo={x} 
                CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} 
                isHideChangeButton={isHideChangeButton} setIsHideChangeButton={setIsHideChangeButton}
                Memos={props.Memos} setMemos={props.setMemos} setTitle={props.setTitle}  />)}
            </div>
        </div>
    );
}
export default MenuBar;