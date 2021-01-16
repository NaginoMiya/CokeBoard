import React from 'react';
import MiniMemo from './MiniMemo';

function MiniMemoBundle(props){

    console.log(props.CurrentMemo.MiniMemos);

    return (
        <div>
            <p>test = {props.CurrentMemo.MiniMemos[0]}</p>

            <MiniMemo idx={0} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={1} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={2} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={3} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={4} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={5} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={6} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            <MiniMemo idx={7} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />

        </div>
    );
}
export default MiniMemoBundle;